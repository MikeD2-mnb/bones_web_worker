const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3050; //you can change this port to whatever port you want

const db = new sqlite3.Database('/home/debian/examples/C_BMS/test2.db', sqlite3.OPEN_READONLY);
//app.use(express.static("/var/www/html/templates"));
//make an endpoint to fetch data
app.get('/data', (req, res) => {
    console.log(".get received");
    db.all("SELECT * FROM EpiData", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        
        res.json(rows);
        console.log(rows);
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
