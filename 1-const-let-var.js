// const a = "a";
// a = "b";

// let a = "a";
// a = "b";
// console.log(a);

// var a = "a";
// a = "c";
// console.log(a);

var a = "a";
{
  var a = "b";
  console.log(1, a);
}
console.log(2, a);
