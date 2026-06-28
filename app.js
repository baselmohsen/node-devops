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
    <title>DevOps Demo</title>
    <title>DevOps App DevOpsDevOpsDevOpsDevOpsDevOpsDevOpsDevOps v2</title>
   <meta name="viewport" content="width=device-width, initial-scale=1.0">

   <style>
       body {
           margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea, #764ba2);
            font-family: Arial, sans-serif;
            background: linear-gradient(120deg, #141e30, #243b55);
           height: 100vh;
           display: flex;
           justify-content: center;
           align-items: center;
            color: #fff;
            color: white;
       }

        .card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(12px);
            padding: 35px;
            border-radius: 16px;
        .box {
            background: rgba(255,255,255,0.08);
            padding: 30px;
            border-radius: 15px;
           width: 90%;
            max-width: 420px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
            text-align: center;
            max-width: 500px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.4);
       }

       h1 {
            font-size: 22px;
            margin-bottom: 10px;
            text-align: center;
            font-size: 24px;
       }

        .badge {
            display: inline-block;
            padding: 5px 12px;
            border-radius: 20px;
            background: #00c853;
            font-size: 12px;
        .tag {
            text-align: center;
           margin-bottom: 15px;
            color: #00ffae;
       }

        .info {
            text-align: left;
            margin-top: 15px;
            background: rgba(0,0,0,0.2);
            padding: 15px;
            border-radius: 10px;
        }

        .info p {
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
            opacity: 0.8;
            opacity: 0.7;
       }
   </style>
</head>

<body>
    <div class="card">
        <div class="badge">LIVE • DevOps Demo</div>
    <div class="box">
        <h1>🚀 DevOps Node App v2</h1>
        <div class="tag">CI/CD + Docker + Kubernetes Ready</div>

        <h1>🚀 Node.js DevOps App 🚀🚀</h1>
        <p>Built with CI/CD Pipeline + Kubernetes</p>
        <div class="item">🖥 Hostname: <b>${hostname}</b></div>
        <div class="item">⚙ Platform: <b>${platform}</b></div>
        <div class="item">⏱ Uptime: <b>${Math.floor(uptime)} seconds</b></div>

        <div class="info">
            <p>🖥 Hostname: <strong>${hostname}</strong></p>
            <p>⚙ Platform: <strong>${platform}</strong></p>
            <p>⏱ Uptime: <strong>${Math.floor(uptime)}s</strong></p>
        </div>
        <div class="item">🧠 CPU Cores: <b>${cpus}</b></div>
        <div class="item">💾 Total Memory: <b>${totalMem.toFixed(2)} MB</b></div>
        <div class="item">📦 Free Memory: <b>${freeMem.toFixed(2)} MB</b></div>

       <div class="footer">
            Version: 1.0.0 • Powered by Basel Mohsen zaki 🚀
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
    console.log('🚀 Server running on port 3000');
    console.log('🚀 DevOps App v2 running on port 3000');
});