const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
app.use(express.json());
app.use(cors());

// 1. 綠界官方測試環境金鑰
const MerchantID = "2000132";
const HashKey = "5294y06JbISpM5x9";
const HashIV = "v77hoKGq4kWxRRp9";

// 2. 簽章計算函式 (CheckMacValue)
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

// 3. 建立訂單 API
app.post('/create-payment', (req, res) => {
    try {
        const { totalAmount } = req.body;

        // 產生 10 位數隨機交易編號
        const MerchantTradeNo = "MM" + Date.now().toString().slice(-10);

        // ✅ 手動拼湊時間字串 (YYYY/MM/DD HH:mm:ss)
        const d = new Date();
        const YYYY = d.getFullYear();
        const MM = ('0' + (d.getMonth() + 1)).slice(-2);
        const DD = ('0' + d.getDate()).slice(-2);
        const HH = ('0' + d.getHours()).slice(-2);
        const mm = ('0' + d.getMinutes()).slice(-2);
        const ss = ('0' + d.getSeconds()).slice(-2);
        const MerchantTradeDate = `${YYYY}/${MM}/${DD} ${HH}:${mm}:${ss}`;

        // 綠界標準參數
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

        // 計算 CheckMacValue
        const checkMacValue = generateCheckMacValue(base_param);

        // 4. 構建輸出 HTML (包含自動提交與手動備援按鈕)
        let formHtml = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Redirecting to ECPay...</title>
            </head>
            <body onload="document.forms[0].submit()" style="text-align:center; padding-top:50px; font-family:sans-serif;">
                <h3>正在導向綠界支付頁面...</h3>
                <p>如果頁面沒有自動跳轉，請點擊下方按鈕</p>
                
                <form action="https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5" method="post">`;

        for (const key in base_param) {
            formHtml += `<input type="hidden" name="${key}" value="${base_param[key]}" />`;
        }
        formHtml += `<input type="hidden" name="CheckMacValue" value="${checkMacValue}" />`;

        formHtml += `
                    <button type="submit" style="padding:10px 20px; cursor:pointer;">手動前往付款</button>
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