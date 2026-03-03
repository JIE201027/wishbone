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
    const sortedKeys = Object.keys(params).sort();
    let rawStr = `HashKey=${HashKey}&` +
        sortedKeys.map(key => `${key}=${params[key]}`).join('&') +
        `&HashIV=${HashIV}`;

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

        // ✅ 手動拼湊時間，避開 toLocaleString 在不同作業系統的差異
        const d = new Date();
        const YYYY = d.getFullYear();
        const MM = ('0' + (d.getMonth() + 1)).slice(-2);
        const DD = ('0' + d.getDate()).slice(-2);
        const HH = ('0' + d.getHours()).slice(-2);
        const mm = ('0' + d.getMinutes()).slice(-2);
        const ss = ('0' + d.getSeconds()).slice(-2);
        const MerchantTradeDate = `${YYYY}/${MM}/${DD} ${HH}:${mm}:${ss}`;

        const base_param = {
            ChoosePayment: 'ALL',
            EncryptType: '1',
            ItemName: 'MomMomStoreItem',
            MerchantID: MerchantID,
            MerchantTradeDate: MerchantTradeDate,
            MerchantTradeNo: MerchantTradeNo,
            OrderResultURL: 'https://www.google.com',
            PaymentType: 'aio',
            ReturnURL: 'https://www.google.com',
            TotalAmount: Math.floor(totalAmount).toString(),
            TradeDesc: 'MomMomOrderDescription'
        };

        const checkMacValue = generateCheckMacValue(base_param);

        let formHtml = `
        <!DOCTYPE html>
        <html>
            <head><title>Redirecting...</title></head>
            <body onload="document.forms[0].submit()">
                <form action="https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5" method="post">`;

        for (const key in base_param) {
            formHtml += `<input type="hidden" name="${key}" value="${base_param[key]}" />`;
        }
        formHtml += `<input type="hidden" name="CheckMacValue" value="${checkMacValue}" />`;

        formHtml += `
                </form>
            </body>
        </html>`;

        res.send({ html: formHtml });

    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));