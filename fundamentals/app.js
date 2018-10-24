const fs = require("fs");
const os = require("os");

const user = os.userInfo();
const notes = require("./notes");


fs.appendFileSync("text.txt", `hello ${user.username} ${notes("hello")}`);
