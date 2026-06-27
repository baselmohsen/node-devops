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
    const uptime = os.uptime();

    const totalMem = os.totalmem() / 1024 / 1024;
    const freeMem = os.freemem() / 1024 / 1024;

    const cpus = os.cpus().length;

    res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>DevOps App v2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(120deg, #141e30, #243b55);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
        }

        .box {
            background: rgba(255,255,255,0.08);
            padding: 30px;
            border-radius: 15px;
            width: 90%;
            max-width: 500px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        h1 {
            text-align: center;
            font-size: 24px;
        }

        .tag {
            text-align: center;
            margin-bottom: 15px;
            color: #00ffae;
        }

        .item {
            background: rgba(0,0,0,0.25);
            margin: 8px 0;
            padding: 10px;
            border-radius: 8px;
            font-size: 14px;
        }

        .footer {
            text-align: center;
            margin-top: 15px;
            font-size: 12px;
            opacity: 0.7;
        }
    </style>
</head>

<body>
        <div class="box">
            <h1>🚀 Laravel CRUD DevOps Demo</h1>

            <p>
            This application is a simple Product Management System built with Laravel.
            It demonstrates how to create, view, update, and delete products while showcasing a complete DevOps pipeline.
            </p>     
    <div class="tag">CI/CD + Docker + Kubernetes Ready</div>

        <div class="item">🖥 Hostname: <b>${hostname}</b></div>
        <div class="item">⚙ Platform: <b>${platform}</b></div>
        <div class="item">⏱ Uptime: <b>${Math.floor(uptime)} seconds</b></div>

        <div class="item">🧠 CPU Cores: <b>${cpus}</b></div>
        <div class="item">💾 Total Memory: <b>${totalMem.toFixed(2)} MB</b></div>
        <div class="item">📦 Free Memory: <b>${freeMem.toFixed(2)} MB</b></div>

        <div class="footer">
            Version 2.0.0 • Built for DevOps Practice
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
    console.log('🚀 DevOps App v2 running on port 3000');
});