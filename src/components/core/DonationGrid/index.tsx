import React from 'react';

import DonationTable from '@/components/home/sections/Donation/core/DonationTable';

const DONATION = [
  {
    appearance: 'normal',
    title: 'Zakat Donation',
    text: 'make your Zakat donation',
    price: '2.5%',
    features: [
      'One off Payment',
      '100% donation used',
      'Eligible to receive zakat',
      'Yearly news and updates',
    ],
    label: 'Zakat Donation',
    hasSign: false,
    priceType: 'zakat',
  },
  {
    appearance: 'selected',
    title: 'Be a Sponsor',
    text: 'one child for a year',
    price: '240',
    features: [
      '£240 per Year',
      '£20 monthly direct debit',
      '100% donation used',
      'Get frequent updates',
      'Talk to your sponsored child',
    ],
    label: 'Sponsor a child',
    hasSign: true,
    priceType: 'sponsorChild',
  },
  {
    appearance: 'normal',
    title: 'Sadaqah Jariyah',
    text: 'Unique and sustainable projects',
    price: 'Any',
    features: [
      'One off Payment',
      '100% donation used',
      'Used in unique projects',
      'Yearly news and updates',
    ],
    label: 'Sadaqah Donation',
    hasSign: false,
    priceType: 'sadaqah',
  },
];
export default function DonationGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-24">
      {DONATION.map((donat, index: number) => (
        <DonationTable
          key={index}
          {...donat}
          appearance={donat.appearance as any}
        />
      ))}
    </div>
  );
}
