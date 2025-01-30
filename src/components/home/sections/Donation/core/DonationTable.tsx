/* eslint-disable import/no-extraneous-dependencies */

import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

import Button from '@/components/core/Button';
import CheckIcon from '@/icons/home/CheckIcon';
import { cx } from '@/utils/cx';

type Props = {
  className?: string;
  appearance?: 'selected' | 'normal';
  title: string;
  text: string;
  price: string;
  features: string[];
  label: string;
  hasSign: boolean;
  priceType: string;
};

const styles = {
  selected: {
    title: 'text-white',
    text: 'text-white',
    priceText: 'text-white',
    bgColor: 'bg-gradient xl:scale-110',
    featBg: 'bg-white',
    button: 'primary',
    buttStyle: 'duration-200 hover:opacity-90',
  },
  normal: {
    title: 'text-dark-1',
    text: 'text-grey-1',
    priceText: 'text-dark-1',
    bgColor: 'bg-white',
    featBg: 'bg-grey-5',
    button: 'secondary',
    buttStyle: 'shadow-xl shadow-gray-300',
  },
};

export const Checkout = async (priceType: string) => {
  try {
    const response = await axios.post('/api/checkout', {
      price: priceType,
    });
    window.location.href = response.data.url;
  } catch (err: any) {
    toast.error(err?.message);
  }
};

export default function DonationTable({
  className,
  appearance = 'normal',
  title,
  text,
  price,
  features,
  label,
  priceType,
  hasSign,
}: Props) {
  return (
    <div
      className={cx(
        'h-[622px]  xl:w-[360px] md:w-[320px]  w-full rounded-2xl shadow-xl shadow-gray-300',
        styles[appearance].bgColor,
        className,
      )}
    >
      <div
        className={cx(
          'px-2 py-9 xl:px-5',
          appearance === 'selected' &&
            "bg-[url('/assets/donate/bg-mask.png')] bg-bottom bg-no-repeat",
        )}
      >
        <div className="flex flex-col items-center">
          <p
            className={cx(
              'text-4xl font-bold mb-2 text-center',
              styles[appearance].title,
            )}
          >
            {title}
          </p>
          <p
            className={cx(
              'text-base font-medium mb-5 w-56 text-center h-10',
              styles[appearance].text,
            )}
          >
            {text}
          </p>
          <div
            className={cx(
              'text-3xl font-bold text-center mb-7 flex space-x-1.5',
              styles[appearance].priceText,
            )}
          >
            {hasSign && <p className="text-sm font-light text-grey-1">£</p>}
            <p>{price}</p>
          </div>
        </div>
        <div
          className={cx(
            'rounded-2xl py-6 px-2 xl:px-4',
            styles[appearance].featBg,
          )}
        >
          {features.map((feat, index: number) => (
            <div className="flex items-center space-x-3 py-3" key={index}>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-1 text-white">
                <CheckIcon />
              </div>
              <p className="text-sm font-medium text-dark-1">{feat}</p>
            </div>
          ))}
          <div className="mt-7 flex w-full items-center justify-center">
            <Button
              appearance={styles[appearance].button as any}
              className={styles[appearance].buttStyle}
              onClick={() => Checkout(priceType)}
            >
              {label}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
