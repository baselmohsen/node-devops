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
            background: #111827;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .box {
            background: #1f2937;
            padding: 25px;
            border-radius: 12px;
            width: 320px;
            text-align: center;
            box-shadow: 0 10px 25px rgba(0,0,0,0.4);
        }

        h1 {
            font-size: 20px;
            margin-bottom: 15px;
        }

        .item {
            background: #111827;
            margin: 8px 0;
            padding: 10px;
            border-radius: 8px;
            font-size: 14px;
            text-align: left;
        }

        .status {
            color: #22c55e;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .footer {
            margin-top: 15px;
            font-size: 11px;
            color: #9ca3af;
        }
    </style>
</head>

<body>

<div class="box">

    <div class="status">🟢 RUNNING</div>

    <h1>DevOps Node App</h1>

    <div class="item">🐳 Hostname: ${hostname}</div>
    <div class="item">⚙ Platform: ${platform}</div>
    <div class="item">⏱ Uptime: ${uptime}s</div>
    <div class="item">🧠 CPU Cores: ${cpus}</div>
    <div class="item">💾 Memory: ${freeMem}/${totalMem} MB</div>

    <div class="footer">
        Docker • Kubernetes • CI/CD
    </div>

</div>

</body>
</html>
`);
});