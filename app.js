const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {

    const hostname = os.hostname();
    const platform = os.platform();
    const uptime = os.uptime();

    res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>DevOps Demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea, #764ba2);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
        }

        .card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(12px);
            padding: 35px;
            border-radius: 16px;
            width: 90%;
            max-width: 420px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
            text-align: center;
        }

        h1 {
            font-size: 22px;
            margin-bottom: 10px;
        }

        .badge {
            display: inline-block;
            padding: 5px 12px;
            border-radius: 20px;
            background: #00c853;
            font-size: 12px;
            margin-bottom: 15px;
        }

        .info {
            text-align: left;
            margin-top: 15px;
            background: rgba(0,0,0,0.2);
            padding: 15px;
            border-radius: 10px;
        }

        .info p {
            margin: 8px 0;
            font-size: 14px;
        }

        .footer {
            margin-top: 15px;
            font-size: 12px;
            opacity: 0.8;
        }
    </style>
</head>

<body>
    <div class="card">
        <div class="badge">LIVE • DevOps Demo</div>

        <h1>🚀 Node.js DevOps App 🚀🚀</h1>
        <p>Built with CI/CD Pipeline + Kubernetes</p>

        <div class="info">
            <p>🖥 Hostname: <strong>${hostname}</strong></p>
            <p>⚙ Platform: <strong>${platform}</strong></p>
            <p>⏱ Uptime: <strong>${Math.floor(uptime)}s</strong></p>
        </div>

        <div class="footer">
            Version: 1.0.0 • Powered by Basel Mohsen zaki 🚀
        </div>
    </div>
</body>
</html>
    `);
});

app.listen(3000, () => {
    console.log('🚀 Server running on port 3000');
});