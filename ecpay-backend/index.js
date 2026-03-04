const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const app = express();

// 為了接收綠界回傳的 POST 表單資料，需要加入這行
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const MerchantID = "3002607";
const HashKey = "pwFHCqoQZGmho4w6";
const HashIV = "EkRm7iFT261dpevs";

// 🏆 通用的 CheckMacValue 產生器
function generateCheckMacValue(params) {
    const sortedKeys = Object.keys(params).sort();
    let rawStr = `HashKey=${HashKey}`;
    for (const key of sortedKeys) {
        rawStr += `&${key}=${params[key]}`;
    }
    rawStr += `&HashIV=${HashIV}`;

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

// ==========================================
// 🚛 新增：物流門市選擇路由
// ==========================================
app.post('/create-logistics-map', (req, res) => {
    // 根據官方文件 (https://developers.ecpay.com.tw/7398/) 調整參數名稱
    const base_param = {
        MerchantID: MerchantID,      // 3002607
        LogisticsType: 'CVS',       // 必填，固定為 CVS
        LogisticsSubType: 'UNIMART', // ✨ 修正：文件規範電子地圖應使用 LogisticsSubType 且 UNIMART 須大寫
        IsCollection: 'Y',          // 必填，代收貨款 Y/N
        ServerReplyURL: 'https://ecpay-payment-demo.onrender.com/logistics-callback', // 門市選完後的通知網址
        ExtraData: '',              // 可選，額外資訊
        Device: '0'                 // 0: PC版, 1: 行動裝置版
    };

    // 產生 HTML 自動提交表單
    let formHtml = `
    <!DOCTYPE html>
    <html>
        <head><meta charset="utf-8"></head>
        <body onload="document.forms[0].submit()">
            <form action="https://logistics-stage.ecpay.com.tw/Express/map" method="post">`;

    for (const key in base_param) {
        formHtml += `<input type="hidden" name="${key}" value="${base_param[key]}" />`;
    }

    formHtml += `</form></body></html>`;

    // 直接發送 HTML 給前端執行跳轉
    res.send(formHtml);
});

// ==========================================
// 📩 新增：接收門市回傳 (綠界會 POST 到這)
// ==========================================
app.post('/logistics-callback', (req, res) => {
    const data = req.body;
    console.log("收到門市資訊:", data);

    // 綠界選完後會回傳：CVSStoreName (門市名), CVSStoreID (門市店號), CVSAddress (門市地址)
    // 我們將這些資訊透過網址傳回前端的結帳頁面
    const frontendUrl = "http://127.0.0.1:5500/myshop/index.html"; // ⚠️ 換成你的前端首頁或結帳頁
    const params = new URLSearchParams({
        storeName: data.CVSStoreName,
        storeId: data.CVSStoreID,
        storeAddr: data.CVSAddress
    }).toString();

    res.redirect(`${frontendUrl}?${params}`);
});

// 原有的金流路由保持不變...
app.post('/create-payment', (req, res) => {
    // ... (維持你原本的程式碼)
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));