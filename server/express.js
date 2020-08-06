const express = require('express');
const path = require('path');
const chalk = require('chalk');
const app = express();
//Assign port to variable port.
const port = process.env.PORT;
//Create static content.
const staticContent = express.static(path.resolve(__dirname, '../dist'));
app.use(staticContent);
//Create listner on port assigned to variable aboove.
app.listen(port, ()=>{
    console.log(chalk.bold.green(`Application is up and running on port ${port}`));
});