import { Request, Response } from 'express';
import axios from 'axios';
import crypto from 'crypto';
import moment from 'moment';
import CryptoJS from 'crypto-js'; // npm install crypto-js
import { v4 as uuidv4 } from 'uuid';
import { redirect } from 'next/dist/server/api-utils';


export const momoPayment = async (req: Request, res: Response) => {
    console.log(req.body);
    const { amount } = req.body.data; // Nhận amount từ body của request
    if (!amount) {
        return res.status(400).json({ message: 'Amount is required' });
    }

    console.log('Amount:', amount);

    // MoMo parameters
    const accessKey = 'F8BBA842ECF85';
    const secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';
    const orderInfo = 'pay with MoMo';
    const partnerCode = 'MOMO';
    const redirectUrl = 'http://localhost:4000/paymentSuccess';
    const ipnUrl = 'https://webhook.site/b3088a6a-2d17-4f8d-a383-71389a6c600b';
    const requestType = "payWithMethod";
    const orderId = partnerCode + new Date().getTime();
    const requestId = orderId;
    const extraData = '';
    const autoCapture = true;
    const lang = 'vi';

    // Tạo rawSignature
    const rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;

    // Tạo signature
    const signature = crypto.createHmac('sha256', secretKey)
        .update(rawSignature)
        .digest('hex');

    // JSON object gửi tới MoMo endpoint
    const requestBody = JSON.stringify({
        partnerCode,
        partnerName: "Test",
        storeId: "MomoTestStore",
        requestId,
        amount,
        orderId,
        orderInfo,
        redirectUrl,
        ipnUrl,
        lang,
        requestType,
        autoCapture,
        extraData,
        signature
    });

    // Option cho axios POST
    const options = {
        method: 'POST',
        url: 'https://test-payment.momo.vn/v2/gateway/api/create',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(requestBody)
        },
        data: requestBody
    };

    try {
        const result = await axios(options);

        console.log(result.data);


        return res.status(200).json(result.data);
    } catch (error: any) {
        return res.status(500).json({
            statusCode: 500,
            message: error.message
        });
    }
}

export const zaloPayment = async (req: Request, res: Response) => {
    console.log(req.body);

    const { amount } = req.body.data; // Truy cập trực tiếp `amount` từ `req.body`
    if (!amount) {
        return res.status(400).json({ message: 'Amount is required' });
    }

    console.log('Amount:', amount);

    // Cấu hình ZaloPay
    const config = {
        appid: "554",
        key1: "8NdU5pG5R2spGHGhyO99HN1OhD8IQJBn",
        key2: "uUfsWgfLkRLzq6W2uNXTCxrfxs51auny",
        endpoint: "https://sandbox.zalopay.com.vn/v001/tpe/createorder"
    };

    // Dữ liệu bổ sung
    const embeddata = {
        merchantinfo: "embeddata123",
        redirecturl: "http://localhost:4000/paymentSuccess"
    };

    // Danh sách sản phẩm
    const items = [
        {
            itemid: "knb",
            itemname: "kim nguyen bao",
            itemprice: amount, // Sử dụng amount từ body
            itemquantity: 1
        }
    ];

    // Tạo thông tin đơn hàng
    const order = {
        appid: config.appid,
        apptransid: `${moment().format('YYMMDD')}_${uuidv4()}`, // Mã giao dịch có định dạng yyMMdd_xxxx
        appuser: "demo",
        apptime: Date.now(), // milliseconds
        item: JSON.stringify(items),
        embeddata: JSON.stringify(embeddata),
        amount, // Sử dụng amount từ body
        description: "ZaloPay Integration Demo",
        bankcode: "",
        mac: ""
    };

    // Tạo chuỗi raw data để ký
    const rawData = `${config.appid}|${order.apptransid}|${order.appuser}|${order.amount}|${order.apptime}|${order.embeddata}|${order.item}`;

    // Tính toán MAC (HMAC-SHA256)
    order.mac = CryptoJS.HmacSHA256(rawData, config.key1).toString();

    // Gửi request tới ZaloPay
    try {
        const result = await axios.post(config.endpoint, null, {
            params: order, // Truyền order vào params
        });

        console.log('ZaloPay Response:', result.data);

        return res.status(200).json(result.data);
    } catch (error: any) {
        console.error('Error from ZaloPay:', error.message);
        return res.status(500).json({
            statusCode: 500,
            message: error.message,
        });
    }
};
