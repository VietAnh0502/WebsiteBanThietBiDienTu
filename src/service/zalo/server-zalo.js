import axios from 'axios';
import CryptoJS from 'crypto-js';
import { v1 as uuid } from 'uuid';
import express from 'express';
import moment from 'moment';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const config = {
    appid: "554", // ID ứng dụng của bạn trên ZaloPay
    key1: "8NdU5pG5R2spGHGhyO99HN1OhD8IQJBn", // Key1 của bạn
    key2: "uUfsWgfLkRLzq6W2uNXTCxrfxs51auny", // Key2 của bạn
    endpoint: "https://sandbox.zalopay.com.vn/v001/tpe/createorder",
};

app.post('/payment', async (req, res) => {
    const { amount, orderInfo, redirecturl, orderid, appid } = req.body;

    const order = {
        appid: config.appid,
        amount: amount, // Tổng tiền thanh toán
        orderid: orderid, // ID đơn hàng duy nhất
        orderInfo: orderInfo, // Thông tin đơn hàng
        redirecturl: redirecturl, // URL sau khi thanh toán
        embeddata: "embeddata123", // Thông tin thêm (có thể tùy chỉnh)
        items: [{
            itemid: "knb",
            itemname: "Kim Nguyen Bao",
            itemprice: amount,
            itemquantity: 1,
        }],
    };

    const requestData = {
        appid: config.appid,
        appuser: "testuser",
        orderid: orderid,
        amount: amount,
        description: orderInfo,
        returnurl: redirecturl,
        bankcode: "",
        buyeremail: "buyer@example.com",
        items: JSON.stringify(order.items),
        embeddata: order.embeddata,
    };

    // Tạo signature
    const signature = CryptoJS.HmacSHA256(
        `${config.key1}|${requestData.appid}|${requestData.orderid}|${requestData.amount}|${requestData.description}|${config.key2}`,
        config.key1
    ).toString(CryptoJS.enc.Base64);

    // Tạo đơn hàng ZaloPay
    try {
        const response = await axios.post(config.endpoint, {
            ...requestData,
            signature: signature,
        });

        if (response.data && response.data.orderurl) {
            return res.json({ orderurl: response.data.orderurl }); // Trả về link thanh toán
        } else {
            return res.status(400).json({ error: "Lỗi tạo đơn hàng thanh toán." });
        }
    } catch (error) {
        return res.status(500).json({ error: "Lỗi kết nối với ZaloPay." });
    }
});

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});
