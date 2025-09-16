"use client";
import React from 'react'
import MainLayout from "../../../main-layout"
import ProductBrand from "../../../../components/product/brand/ProductBrand"
import { useParams } from 'next/navigation';

const ProductBrandPage = () => {
  const params = useParams();
  const id = Number(params.id);

  if (!id || isNaN(id)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MainLayout>
        <ProductBrand id={id} />
      </MainLayout>
    </>
  )
}

export default ProductBrandPage