const express = require('express');
const app = express();

// 定义一个简单的路由
app.get('/', (req, res) => {
  res.send('Welcome to My Dynamic Website!');
});

// 设置服务器端口
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
