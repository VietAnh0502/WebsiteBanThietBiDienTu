"use client";

import React from 'react'
import EditProductManagement from "../../../../components/productManagement/editProductManagement"
import MainLayout from "../../../main-layout"
import { useParams } from 'next/navigation';

const EditProductMangementPage = () => {
    const params = useParams();
    const id = params.id as string;
  
    if (!id) {
      return <div>Loading...</div>;
    }

    return (
        <MainLayout>
            <EditProductManagement id={id}/>
        </MainLayout>
    )
}

export default EditProductMangementPage