const express = require('express');
const path = require('path');
const app = express();
const port = 2234;

// 設定靜態檔案資料夾，讓 express 提供 fullmotion 資料夾內的所有內容
app.use(express.static(path.join(__dirname)));

// 設置根路徑對應 index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// 啟動伺服器
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
