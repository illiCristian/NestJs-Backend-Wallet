import TransferCard from '@/components/MoneyCharge/TransferCard';
import MoneyCard from '@/components/MoneyCharge/MoneyCard';
import React from 'react';

export default function page() {
  return (
    <>
      <section className='px-14 py-10 h-[763px]'>
        <h3 className='text-start text-black text-base font-semibold leading-normal  mb-4'>
          Desde cuentas propias
        </h3>
        <TransferCard />
        <h3 className='text-start text-black text-base font-semibold leading-normal mt-9 mb-4'>
          En Efectivo
        </h3>
        <MoneyCard />
      </section>
    </>
  );
}
