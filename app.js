const express = require('express');
const os = require('os');

const app = express();

/**
 * HEALTH CHECK (مهم جدًا في Kubernetes)
 */
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        uptime: os.uptime(),
        timestamp: new Date().toISOString()
    });
});

/**
 * MAIN PAGE
 */
app.get('/', (req, res) => {

const hostname = os.hostname();
const platform = os.platform();
const uptime = Math.floor(os.uptime());

const totalMem = (os.totalmem() / 1024 / 1024).toFixed(0);
const freeMem = (os.freemem() / 1024 / 1024).toFixed(0);
const cpus = os.cpus().length;

res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>DevOps App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #0f172a, #1e293b);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .card {
            background: rgba(255,255,255,0.06);
            padding: 25px;
            border-radius: 14px;
            width: 340px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            backdrop-filter: blur(10px);
        }

        .title {
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .status {
            text-align: center;
            color: #22c55e;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .item {
            background: rgba(0,0,0,0.25);
            padding: 10px;
            margin: 8px 0;
            border-radius: 8px;
            font-size: 14px;
        }

        .footer {
            text-align: center;
            margin-top: 15px;
            font-size: 11px;
            color: #94a3b8;
        }

        .badge {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 20px;
            background: #2563eb;
            font-size: 11px;
            margin-bottom: 10px;
        }
    </style>
</head>

<body>

<div class="card">

    <div class="status">🟢 RUNNING</div>

    <div class="title">DevOps Node App</div>

    <div class="badge">Docker • Kubernetes • CI/CD</div>

    <div class="item">🐳 Hostname: ${hostname}</div>
    <div class="item">⚙ Platform: ${platform}</div>
    <div class="item">⏱ Uptime: ${uptime}s</div>
    <div class="item">🧠 CPU Cores: ${cpus}</div>
    <div class="item">💾 Memory: ${freeMem}/${totalMem} MB</div>

    <div class="footer">
        Built for DevOps Practice 🚀
    </div>

</div>

</body>
</html>
`);
});

/**
 * START SERVER
 */
app.listen(3000, () => {
    console.log('🚀 Server running on port 3000');
    console.log('🚀 DevOps App v2 running on port 3000');
});