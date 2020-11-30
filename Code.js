const writeToFile = require("write-to-file");
const dash = require('./db.json')
const curnum = dash.dash.dhess
dash.dash.dhess = curnum + 100

writeToFile("db.json", JSON.stringify(dash , 4))