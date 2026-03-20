let url = require("url")
let u = "file:///C:/Users/LJENG/dvc/url%20module/demo.html?dvc=user+cr7&password_dvc=1234567890&year=2026&month=feb"
process.noDeprecation = true;
let q = url.parse(u,true)
console.log(q.query)
console.log(q.query.year)
let yr = q.query.year
console.log(yr)
var month = q.query.month
console.log(month)
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("is " +yr + " a leap year or not ? " + isLeapYear(yr))
