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
    // 1. 依照字母排序
    const sortedKeys = Object.keys(params).sort();

    // 2. 拼接字串
    let rawStr = `HashKey=${HashKey}`;
    for (const key of sortedKeys) {
        rawStr += `&${key}=${params[key]}`;
    }
    rawStr += `&HashIV=${HashIV}`;

    // 3. URL Encode 並處理特殊符號 (綠界 V5 標準)
    const encodedStr = encodeURIComponent(rawStr)
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

        const d = new Date();
        const MerchantTradeDate = `${d.getFullYear()}/${('0' + (d.getMonth() + 1)).slice(-2)}/${('0' + d.getDate()).slice(-2)} ${('0' + d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}:${('0' + d.getSeconds()).slice(-2)}`;

        // 💡 採用最簡必填參數，移除可能干擾的 URL
        const base_param = {
            ChoosePayment: 'ALL',
            EncryptType: '1',
            ItemName: 'MomMomStore',
            MerchantID: MerchantID,
            MerchantTradeDate: MerchantTradeDate,
            MerchantTradeNo: MerchantTradeNo,
            PaymentType: 'aio',
            ReturnURL: 'https://www.ecpay.com.tw',
            TotalAmount: Math.floor(totalAmount).toString(),
            TradeDesc: 'MomMomOrder'
        };

        const checkMacValue = generateCheckMacValue(base_param);

        let formHtml = `
        <!DOCTYPE html>
        <html>
            <head><meta charset="utf-8"></head>
            <body style="text-align: center; padding-top: 50px;">
                <div style="border: 1px solid #ccc; display: inline-block; padding: 20px;">
                    <h2>訂單準備完成</h2>
                    <form action="https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5" method="post">`;

        for (const key in base_param) {
            formHtml += `<input type="hidden" name="${key}" value="${base_param[key]}" />`;
        }
        formHtml += `<input type="hidden" name="CheckMacValue" value="${checkMacValue}" />`;
        formHtml += `
                        <button type="submit" style="background:red; color:white; padding:10px 20px; font-size:20px;">
                            點我進入支付頁面
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