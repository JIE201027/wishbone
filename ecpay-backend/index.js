const express = require('express');
const cors = require('cors');
const ecpay_aio_nodejs = require('ecpay_aio_nodejs');

const app = express();
app.use(express.json());
app.use(cors());

const options = {
    OperationMode: "Test",
    MercProfile: {
        MerchantID: "2000132",
        HashKey: "5294y06Jbhkq92Zl",
        HashIV: "v77hoKGq4kWxNNIS"
    },
    IgnorePayment: [], // 修正 join 錯誤的關鍵
    IsProjectContractor: false
};

app.post('/create-payment', (req, res) => {
    try {
        const { totalAmount, itemName } = req.body;

        // 確保 itemName 不為空且不含特殊字元，綠界建議用 # 分隔
        const cleanItemName = itemName ? itemName.replace(/[^\u4e00-\u9fa5a-zA-Z0-9#]/g, '') : "ShopItem";

        const create = new ecpay_aio_nodejs(options);

        const MerchantTradeNo = "MM" + Date.now().toString().slice(-10);
        const now = new Date();
        const MerchantTradeDate = now.getFullYear() + '/' +
            ('0' + (now.getMonth() + 1)).slice(-2) + '/' +
            ('0' + now.getDate()).slice(-2) + ' ' +
            ('0' + now.getHours()).slice(-2) + ':' +
            ('0' + now.getMinutes()).slice(-2) + ':' +
            ('0' + now.getSeconds()).slice(-2);

        const base_param = {
            MerchantTradeNo: MerchantTradeNo,
            MerchantTradeDate: MerchantTradeDate,
            TotalAmount: totalAmount.toString(),
            TradeDesc: "MomMomSelectOrder",
            ItemName: cleanItemName,
            ReturnURL: "https://www.google.com",
            OrderResultURL: "https://www.google.com",
            ChoosePayment: "ALL",
            EncryptType: "1",
        };

        // 產生 HTML
        const html = create.payment_client.aio_check_out_all(base_param);
        res.send({ html });
    } catch (err) {
        console.error("結帳發生錯誤:", err);
        res.status(500).send({ error: "SDK 產生表單失敗: " + err.message });
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));