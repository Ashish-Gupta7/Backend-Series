// Jaha hamara data hota hai waha se hota hai export aur jaha pr data ko use krna hota hai, waha hota hai import.

// 1st =>

// var a = 12;
// module.exports = a;        // export krne ka tareeka.







// 2nd => ham ek file se sirf ek hi cheej ko export kr skte hai, isliye ham export krne ke liye object ka use krte hai.
// var a = 12;
// var obj = {
//     name: "ash",
//     dob: 123444
// };
// var fnc = function(){
//     console.log("iamFnc");
// };
// var arr = ["qw", 21, "qjj112"];

// module.exports = {d1Var: a, qwe: obj, asd: fnc, zxc: arr};                 // {key/property: value}  yaha key changable hoti hai aur value fix hoti hai jo ki variables pr depend krti hai.





// 3rd => iss object me yadi hmm key aur value ko same likhe to koi fark nhi padega.
// ex. =>              {qwe: obj}  =   {obj}    left wale me obj ki property qwe hai aur right wale me obj ki property obj hi hai.

// var a = 12;
// var obj = {
//     name: "ash",
//     dob: 123444
// };
// var fnc = function(){
//     console.log("iamFnc");
// };
// var arr = ["qw", 21, "qjj112"];

// module.exports = {a, obj, fnc, arr};