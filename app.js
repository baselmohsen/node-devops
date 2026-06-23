const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>DevOps Demo</title>
        <style>
            body{
                font-family: Arial, sans-serif;
                background:#f4f4f4;
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
                margin:0;
            }
            .card{
                background:white;
                padding:30px;
                border-radius:12px;
                box-shadow:0 4px 10px rgba(0,0,0,0.1);
                text-align:center;
            }
            h1{
                color:#2c3e50;
            }
            p{
                color:#555;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>🚀 DevOps Demo App the last version  this is me basel mohsen zaki 🚀 🚀 🚀 🚀 </h1>
            <p><strong>Hostname:</strong> ${os.hostname()}</p>
            <p><strong>Platform:</strong> ${os.platform()}</p>
            <p><strong>Status:</strong> ✅ Running</p>
        </div>
    </body>
    </html>
    `);
});

app.listen(3000, () => {
    console.log('🚀 Server running on port 3000');
});