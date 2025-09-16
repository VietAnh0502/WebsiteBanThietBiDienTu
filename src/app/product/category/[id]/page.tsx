"use client";
import React from 'react'
import MainLayout from "../../../main-layout"
import ProductCategory from "../../../../components/product/category/productCategory"
import { useParams } from 'next/navigation';

const ProductCategoryPage = () => {
  const params = useParams();
  const id = Number(params.id);

  if (!id || isNaN(id)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MainLayout>
        <ProductCategory id={id} />
      </MainLayout>
    </>
  )
}

export default ProductCategoryPage