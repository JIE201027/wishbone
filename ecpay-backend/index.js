const express = require('express');
const cors = require('cors');
const ecpay_aio_nodejs = require('ecpay_aio_nodejs');

const app = express();
app.use(express.json());
app.use(cors()); // 允許你的網頁跨網域呼叫

// 綠界測試參數 (建議之後改用環境變數)
const options = {
    OperationMode: "Test",
    HashKey: "5294y06JbISpM5x9",
    HashIV: "v77hoKGq4kWxRRp9",
    MerchantID: "2000132"
};

app.post('/create-payment', (req, res) => {
    const { totalAmount, itemName } = req.body;
    const create = new ecpay_aio_nodejs(options);

    const MerchantTradeNo = "f" + Date.now();
    const base_param = {
        MerchantTradeNo: MerchantTradeNo,
        MerchantTradeDate: new Date().toLocaleString("zh-TW", { hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).replace(/\//g, "/"),
        TotalAmount: totalAmount.toString(),
        TradeDesc: "展示商店訂單",
        ItemName: itemName,
        ReturnURL: "https://www.google.com", // 測試用，正式需收回傳結果
        OrderResultURL: "https://www.google.com", // 付款完跳轉回哪裡
        ChoosePayment: "ALL",
        EncryptType: "1",
    };

    const html = create.payment_client.aio_check_out_all(base_param);
    res.send({ html });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));