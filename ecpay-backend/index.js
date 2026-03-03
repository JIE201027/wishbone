const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
app.use(express.json());
app.use(cors());

const MerchantID = "2000132";
const HashKey = "5294y06JbISpM5x9";
const HashIV = "v77hoKGq4kWxRRp9";

function generateCheckMacValue(params) {
    // 1. 排序並組合字串
    const sortedKeys = Object.keys(params).sort();
    let rawStr = `HashKey=${HashKey}&` +
        sortedKeys.map(key => `${key}=${params[key]}`).join('&') +
        `&HashIV=${HashIV}`;

    // 2. 進行 URL 編碼
    let encodedStr = encodeURIComponent(rawStr)
        .toLowerCase()
        .replace(/%20/g, '+')
        .replace(/%2d/g, '-')
        .replace(/%5f/g, '_')
        .replace(/%2e/g, '.')
        .replace(/%21/g, '!')
        .replace(/%2a/g, '*')
        .replace(/%28/g, '(')
        .replace(/%29/g, ')');

    return crypto.createHash('sha256').update(encodedStr).digest('hex').toUpperCase();
}

app.post('/create-payment', (req, res) => {
    try {
        const { totalAmount } = req.body;
        const MerchantTradeNo = "MM" + Date.now().toString().slice(-10);

        // 取得台灣時間格式 YYYY/MM/DD HH:mm:ss
        const now = new Date();
        const MerchantTradeDate = now.toLocaleString('zh-TW', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).replace(/-/g, '/');

        const base_param = {
            ChoosePayment: 'ALL',
            EncryptType: '1',
            ItemName: 'MomMomStoreItem', // 絕對不要用中文或特殊符號測試
            MerchantID: MerchantID,
            MerchantTradeDate: MerchantTradeDate,
            MerchantTradeNo: MerchantTradeNo,
            OrderResultURL: 'https://www.google.com',
            PaymentType: 'aio',
            ReturnURL: 'https://www.google.com',
            TotalAmount: Math.floor(totalAmount).toString(),
            TradeDesc: 'MomMomOrderDescription'
        };

        // 計算簽章
        const checkMacValue = generateCheckMacValue(base_param);

        // 構建表單 (使用綠界正式測試環境 URL)
        let formHtml = `<form id="_form_aio_checkout" action="https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5" method="post">`;
        Object.keys(base_param).forEach(key => {
            formHtml += `<input type="hidden" name="${key}" value="${base_param[key]}" />`;
        });
        formHtml += `<input type="hidden" name="CheckMacValue" value="${checkMacValue}" />`;
        formHtml += `</form>`;

        res.send({ html: formHtml });

    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));