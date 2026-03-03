const express = require('express');
const cors = require('cors');
const crypto = require('crypto'); // 內建加密模組

const app = express();
app.use(express.json());
app.use(cors());

// 官方測試金鑰
const MerchantID = "2000132";
const HashKey = "5294y06JbISpM5x9";
const HashIV = "v77hoKGq4kWxRRp9";

// 手動計算 CheckMacValue 的函式
function generateCheckMacValue(params) {
    // 1. 依照字母順序排序
    const sortedKeys = Object.keys(params).sort();
    let rawStr = `HashKey=${HashKey}&`;

    sortedKeys.forEach(key => {
        rawStr += `${key}=${params[key]}&`;
    });

    rawStr += `HashIV=${HashIV}`;

    // 2. URL Encode 並處理綠界特定的符號轉換
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

    // 3. SHA256 加密並轉大寫
    return crypto.createHash('sha256').update(encodedStr).digest('hex').toUpperCase();
}

app.post('/create-payment', (req, res) => {
    try {
        const { totalAmount } = req.body;
        const MerchantTradeNo = "MM" + Date.now().toString().slice(-10);

        const now = new Date();
        const MerchantTradeDate = now.getFullYear() + '/' +
            ('0' + (now.getMonth() + 1)).slice(-2) + '/' +
            ('0' + now.getDate()).slice(-2) + ' ' +
            ('0' + now.getHours()).slice(-2) + ':' +
            ('0' + now.getMinutes()).slice(-2) + ':' +
            ('0' + now.getSeconds()).slice(-2);

        // 準備參數
        const base_param = {
            MerchantID: MerchantID,
            MerchantTradeNo: MerchantTradeNo,
            MerchantTradeDate: MerchantTradeDate,
            PaymentType: 'aio',
            TotalAmount: Math.floor(totalAmount).toString(),
            TradeDesc: 'MomMomOrder',
            ItemName: 'MomMomProduct', // 暫用純英文
            ReturnURL: 'https://www.google.com',
            ChoosePayment: 'ALL',
            EncryptType: '1',
            OrderResultURL: 'https://www.google.com',
        };

        // 計算簽章
        base_param['CheckMacValue'] = generateCheckMacValue(base_param);

        // 手動產生 HTML 表單內容
        let formHtml = `<form id="_form_aio_checkout" action="https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5" method="post">`;
        Object.keys(base_param).forEach(key => {
            formHtml += `<input type="hidden" name="${key}" value="${base_param[key]}" />`;
        });
        formHtml += `</form>`;

        console.log("生成的簽章:", base_param['CheckMacValue']);
        res.send({ html: formHtml });

    } catch (err) {
        console.error("結帳發生錯誤:", err);
        res.status(500).send({ error: err.message });
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));