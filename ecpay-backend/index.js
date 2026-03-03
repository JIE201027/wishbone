const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const app = express();
app.use(express.json());
app.use(cors());

// 🏆 換成綠界官方 2856 文件指定的最新測試特店資料
const MerchantID = "3002607";
const HashKey = "pwFHCqoQZGmho4w6";
const HashIV = "EkRm7iFT261dpevs";

function generateCheckMacValue(params) {
    const sortedKeys = Object.keys(params).sort();
    let rawStr = `HashKey=${HashKey}`;
    for (const key of sortedKeys) {
        rawStr += `&${key}=${params[key]}`;
    }
    rawStr += `&HashIV=${HashIV}`;

    // 綠界標準編碼規則
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

        // 取得台灣時間
        const now = new Date();
        const twTime = new Date(now.getTime() + (8 * 60 * 60 * 1000));
        const MerchantTradeDate = `${twTime.getFullYear()}/${('0' + (twTime.getMonth() + 1)).slice(-2)}/${('0' + twTime.getDate()).slice(-2)} ${('0' + twTime.getHours()).slice(-2)}:${('0' + twTime.getMinutes()).slice(-2)}:${('0' + twTime.getSeconds()).slice(-2)}`;

        const base_param = {
            ChoosePayment: 'ALL',
            EncryptType: '1',
            ItemName: 'MomMomStoreGoods', // 固定簡單名稱
            MerchantID: MerchantID,
            MerchantTradeDate: MerchantTradeDate,
            MerchantTradeNo: MerchantTradeNo,
            PaymentType: 'aio',
            ReturnURL: 'https://www.ecpay.com.tw',
            TotalAmount: Math.floor(totalAmount).toString(),
            TradeDesc: 'MomMomOrderDesc'
        };

        const checkMacValue = generateCheckMacValue(base_param);

        let formHtml = `
        <!DOCTYPE html>
        <html>
            <head><meta charset="utf-8"></head>
            <body style="text-align: center; padding-top: 50px; font-family: sans-serif;">
                <div style="border: 2px solid #000; display: inline-block; padding: 30px; border-radius: 10px;">
                    <h2>訂單計算完成 (ID: ${MerchantID})</h2>
                    <p>應付金額：NT$ ${totalAmount}</p>
                    <form action="https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5" method="post">`;

        for (const key in base_param) {
            formHtml += `<input type="hidden" name="${key}" value="${base_param[key]}" />`;
        }
        formHtml += `<input type="hidden" name="CheckMacValue" value="${checkMacValue}" />`;
        formHtml += `
                        <button type="submit" style="background:#000; color:#fff; border:none; padding:15px 30px; font-size:18px; cursor:pointer; border-radius:5px;">
                            前往綠界測試刷卡頁
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