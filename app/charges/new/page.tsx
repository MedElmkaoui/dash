// NouvelleCharge.tsx
import React from 'react';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import FormCharge from '@/components/Forms/FormCharge';

const NouvelleCharge = () => {
  return (
    <>
      <Breadcrumb pageName="Nouvelle Charge" showTitle={false} />
      <div className="overflow-hidden rounded-sm bg-white shadow-default dark:bg-boxdark">

        
        <FormCharge type="Création" />
      </div>
    </>
  );
};

export default NouvelleCharge;
