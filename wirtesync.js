const fs=require("fs");
fs.writeFileSync("file1.txt","Welcome to node.js");
console.log("Flie create successfully");
const data = fs.readFileSync("file1.txt","utf-8");
console.log(data);
fs.appendFileSync("file1.txt","welcome to fsd lab");
console.log("Data appended");