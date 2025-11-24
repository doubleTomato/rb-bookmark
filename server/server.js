// server/server.js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// 미들웨어 설정
app.use(express.json());

// 테스트 라우트
app.get('/', (req, res) => {
    res.send('API Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000', // React 개발 서버 주소
    credentials: true,
}));