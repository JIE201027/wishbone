const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const app = express();
app.use(express.json());
app.use(cors());

const MerchantID = "2000132";
const HashKey = "5294y06JbISpM5x9";
const HashIV = "v77hoKGq4kWxRRp9";

// 🏆 綠界官方最嚴格的簽章算法
function generateCheckMacValue(params) {
    const sortedKeys = Object.keys(params).sort();
    let rawStr = `HashKey=${HashKey}`;
    for (const key of sortedKeys) {
        rawStr += `&${key}=${params[key]}`;
    }
    rawStr += `&HashIV=${HashIV}`;

    // 必須嚴格遵守這個轉義順序
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

        // 1. 產生 10 位數交易編號
        const MerchantTradeNo = "MM" + Date.now().toString().slice(-10);

        // 2. 修正時區 (Render 是 UTC，我們強制轉台灣 GMT+8)
        const now = new Date();
        const twTime = new Date(now.getTime() + (8 * 60 * 60 * 1000));
        const YYYY = twTime.getFullYear();
        const MM = ('0' + (twTime.getMonth() + 1)).slice(-2);
        const DD = ('0' + twTime.getDate()).slice(-2);
        const HH = ('0' + twTime.getHours()).slice(-2);
        const mm = ('0' + twTime.getMinutes()).slice(-2);
        const ss = ('0' + twTime.getSeconds()).slice(-2);
        const MerchantTradeDate = `${YYYY}/${MM}/${DD} ${HH}:${mm}:${ss}`;

        // 3. 準備參數 (順序不重要，由 function 排序)
        const base_param = {
            ChoosePayment: 'ALL',
            EncryptType: '1',
            ItemName: 'MomMomStoreItem',
            MerchantID: MerchantID,
            MerchantTradeDate: MerchantTradeDate,
            MerchantTradeNo: MerchantTradeNo,
            PaymentType: 'aio',
            ReturnURL: 'https://www.ecpay.com.tw',
            TotalAmount: Math.floor(totalAmount).toString(),
            TradeDesc: 'MomMomOrder'
        };

        const checkMacValue = generateCheckMacValue(base_param);

        // 4. 回傳包含按鈕的 HTML
        let formHtml = `
        <!DOCTYPE html>
        <html>
            <head><meta charset="utf-8"></head>
            <body style="text-align: center; padding-top: 50px; font-family: sans-serif;">
                <div style="border: 2px solid #ee4d2d; display: inline-block; padding: 30px; border-radius: 15px;">
                    <h2>訂單確認成功</h2>
                    <p>金額：NT$ ${totalAmount}</p>
                    <form action="https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5" method="post">`;

        for (const key in base_param) {
            formHtml += `<input type="hidden" name="${key}" value="${base_param[key]}" />`;
        }
        formHtml += `<input type="hidden" name="CheckMacValue" value="${checkMacValue}" />`;
        formHtml += `
                        <button type="submit" style="background:#ee4d2d; color:white; border:none; padding:15px 30px; font-size:18px; border-radius:5px; cursor:pointer;">
                            確認前往綠界付款
                        </button>
                    </form>
                </div>
            </body>
        </html>`;

        res.send({ html: formHtml });

    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));