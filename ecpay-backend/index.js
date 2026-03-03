const express = require('express');
const cors = require('cors');
const ecpay_aio_nodejs = require('ecpay_aio_nodejs'); // 引入官方套件
const app = express();
app.use(express.json());
app.use(cors());

// 綠界官方測試金鑰
const options = {
    OperationMode: 'Test', // 測試模式
    MerchantID: '2000132',
    HashKey: '5294y06JbISpM5x9',
    HashIV: 'v77hoKGq4kWxRRp9',
};

app.post('/create-payment', (req, res) => {
    try {
        const { totalAmount } = req.body;
        const MerchantTradeNo = "MM" + Date.now().toString().slice(-10);

        // 取得當前台灣時間 (YYYY/MM/DD HH:mm:ss)
        const now = new Date();
        const twTime = new Date(now.getTime() + (8 * 60 * 60 * 1000));
        const MerchantTradeDate = twTime.getFullYear() + '/' +
            ('0' + (twTime.getMonth() + 1)).slice(-2) + '/' +
            ('0' + twTime.getDate()).slice(-2) + ' ' +
            ('0' + twTime.getHours()).slice(-2) + ':' +
            ('0' + twTime.getMinutes()).slice(-2) + ':' +
            ('0' + twTime.getSeconds()).slice(-2);

        // 準備傳給套件的參數
        let base_param = {
            MerchantTradeNo: MerchantTradeNo,
            MerchantTradeDate: MerchantTradeDate,
            TotalAmount: Math.floor(totalAmount).toString(),
            TradeDesc: 'MomMomOrder',
            ItemName: 'MomMomStore',
            ReturnURL: 'https://www.ecpay.com.tw',
            ChoosePayment: 'ALL',
            EncryptType: '1',
            PaymentType: 'aio',
        };

        // 💡 重點：呼叫官方套件產生表單與簽章
        const create = new ecpay_aio_nodejs(options);
        const formHtml = create.payment_client.aio_check_out_all(base_param);

        // 官方套件產出的 html 本身就帶有自動 submit 腳本
        // 但為了繞過 CSP，我們把它包裝在一個乾淨的 HTML 裡面
        const finalHtml = `
        <!DOCTYPE html>
        <html>
            <head><meta charset="utf-8"></head>
            <body>
                ${formHtml}
            </body>
        </html>`;

        res.send({ html: finalHtml });

    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err.message });
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));