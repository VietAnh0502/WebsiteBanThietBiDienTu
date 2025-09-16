"use client";

import ProductDetail from '../../../../components/product/detail/productDetail'
import React from 'react'
import MainLayout from "../../../main-layout"
import { useParams } from 'next/navigation';

const ProductDetailPage = () => {
  const params = useParams();
  const id = params.id as string;

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
        <ProductDetail id={id}/>
    </MainLayout>
  )
}

export default ProductDetailPage