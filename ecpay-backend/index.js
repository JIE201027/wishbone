const express = require('express');
const cors = require('cors');
const ecpay_aio_nodejs = require('ecpay_aio_nodejs');

const app = express();
app.use(express.json());
app.use(cors());

// ✅ 修正點 1：必須包裹在 MercProfile 裡面
const options = {
    OperationMode: "Test",
    MercProfile: {
        MerchantID: "2000132",
        HashKey: "5294y06Jbhkq92Zl", // 建議使用官方測試專用 Key
        HashIV: "v77hoKGq4kWxNNIS"   // 建議使用官方測試專用 IV
    }
};

app.post('/create-payment', (req, res) => {
    try {
        const { totalAmount, itemName } = req.body;
        const create = new ecpay_aio_nodejs(options);

        // ✅ 修正點 2：綠界訂單號英數混合不可超過 20 字
        const MerchantTradeNo = "MM" + Date.now().toString().slice(-10);

        // 修正時間格式為 YYYY/MM/DD HH:mm:ss
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
            ItemName: itemName,
            ReturnURL: "https://www.google.com",
            OrderResultURL: "https://www.google.com",
            ChoosePayment: "ALL",
            EncryptType: "1",
        };

        const html = create.payment_client.aio_check_out_all(base_param);
        res.send({ html });
    } catch (err) {
        console.error("結帳發生錯誤:", err);
        res.status(500).send({ error: err.message });
    }
});

const PORT = process.env.PORT || 10000; // Render 建議用 10000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));