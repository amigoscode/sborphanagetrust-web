import type { NextApiRequest, NextApiResponse } from 'next';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
});

const prices = {
  sponsorChild: 'price_1QkRbcEiGv4EG4FUTRNQpG5F',
  sadaqah: 'price_1PJd2wEiGv4EG4FUsANVQXbw',
  zakat: 'price_1PJcheEiGv4EG4FUtnQRURkW',
};

type PriceKey = keyof typeof prices;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { price: priceKey }: { price: PriceKey } = req.body;

    if (!prices[priceKey]) {
      return res.status(400).json({ error: 'Invalid price' });
    }

    const price = prices[priceKey];

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price,
          quantity: 1,
        },
      ],
      custom_fields: [
        {
          key: 'giftaid',
          label: {
            type: 'custom',
            custom: 'Gift Aid',
          },
          optional: false,
          default: 'yes',
          type: 'dropdown',
          dropdown: {
            options: [
              {
                label: 'Yes',
                value: 'yes',
              },
              {
                label: 'No',
                value: 'no',
              },
            ],
          },
        },
        {
          key: 'happywithphone',
          label: {
            type: 'custom',
            custom: 'Are Happy with Phone Call?',
          },
          optional: false,
          default: 'yes',
          type: 'dropdown',
          dropdown: {
            options: [
              {
                label: 'Yes',
                value: 'yes',
              },
              {
                label: 'No',
                value: 'no',
              },
            ],
          },
        },
        {
          key: 'email',
          label: {
            type: 'custom',
            custom: 'Are you happy to receive emails from us?',
          },
          optional: false,
          default: 'yes',
          type: 'dropdown',
          dropdown: {
            options: [
              {
                label: 'Yes',
                value: 'yes',
              },
              {
                label: 'No',
                value: 'no',
              },
            ],
          },
        },
        ...(priceKey === 'zakat'
          ? [
              {
                key: 'zakat',
                label: {
                  type: 'custom',
                  custom: 'Zakat',
                },
                optional: false,
                default: 'regular',
                type: 'dropdown',
                dropdown: {
                  options: [
                    {
                      label: 'Regular',
                      value: 'regular',
                    },
                    {
                      label: 'Zakatul fitr',
                      value: 'zakatulfitr',
                    },
                  ],
                },
              },
            ]
          : []),
        ...(priceKey === 'sadaqah'
          ? [
              {
                key: 'sadaqah',
                label: {
                  type: 'custom',
                  custom: 'Sadaqah',
                },
                optional: false,
                default: 'regular',
                type: 'dropdown',
                dropdown: {
                  options: [
                    {
                      label: 'Regular',
                      value: 'regular',
                    },
                    {
                      label: 'Fidyah',
                      value: 'fidyah',
                    },
                  ],
                },
              },
            ]
          : []),
      ],
      mode: priceKey === 'sponsorChild' ? 'subscription' : 'payment',
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/fail`,
      phone_number_collection: {
        enabled: true,
      },
    });

    return res.status(200).json({ url: session.url as string });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
