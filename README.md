This repo contains the minimum necessary files to create a web worker that reads data from an SQLITE database, and send the data to a web page on a BBB
Prerequisites:   1) install node js on BBB with apt-get install nodejs
                 2) install sqlite3 and express modules using npm
The code assumes that the BBB is on 192.168.0.52: change this in dbase1.js to your own ip.
The code uses port 3050: change this in BOTH dbase_server.js and dbase1.js if you need to. 
The dbase_server code needs to be running in terminal on BBB while the web page can be loaded as normal.
In order to easily edit the code, I made a symlink from /var/www/html on the BBB to point at ~/example/templates, where I have all of the web resources that I/m working on.
The database location is ~/examples/C_BMS/test2.db: this can be changed in dbase_server to point at your database.
My thanks to https://stackoverflow.com/users/13086781/gp-adhikari who assisted greatly with geting the fetch and db_server code working.
**********************************
Issues
***********************************
1) Current issue: Code returns databae data enclosed in a square bracket pair. this causes the json parser called by dbase1.js code to throw an error.
   This is currently un resolved (14/10/24).
