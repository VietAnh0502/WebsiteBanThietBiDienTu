"use client";

import React from 'react'
import OrderDetailManagement from "../../../../components/orderManagement/orderDetailManagement"
import MainLayout from "../../../main-layout"
import { useParams } from 'next/navigation';


const OrderDetailManagementPage = () => {
    const params = useParams();
    const id = params.id as string;

    if (!id) {
        return <div>Loading...</div>;
    }


    return (
        <MainLayout>
            <OrderDetailManagement id={id} />
        </MainLayout>
    )
}

export default OrderDetailManagementPage