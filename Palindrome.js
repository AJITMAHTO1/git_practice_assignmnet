let a="aabaa";
let b="";

for(let i=0;i<a.length;i++){
b=b+a[i];
}

if(a==b){
console.log("Palindrome");
}
else{
console.log("Not a Palindrome");
}