//Loops and strings
//Topic_1(loops)
/*
//1. For loop
for(initialization ; stopping condition ; i++) {
        console.log("hello");
}
*/
for(let count =1 ; count <= 5 ; count++) {
    console.log("hello");
}
console.log("loop has ended");
//(i)
//calculate sum of 1 to n
let sum = 0;
let n = 5;
for(let i = 1; i <= n ; i++){
    sum = sum + i;
}
console.log("total sum is",sum);
//doubt (like %d is there anything in js)

//(ii)
//imp point
for(let i = 1;i <= 5; i++){
    console.log("i = ",i);
}
//console.log("i = ",i) will not going to work cause we declared let i in as block variable
for(var j = 1;j <= 5; j++){    //using var
    console.log("j = ",j);
}
console.log("j = ",j);


//2. infinte loop;(never use)

//3. while loop (same as 1)
/*
//inititialization before the loop happens here
while(stopping condition){
    //do some work
    //updation works takes place here
}
*/
let i =1;    //intialize
while(i<=5) {
    console.log("i = ",i);
    i++;    //updation
}


//4. do while loop
//(atleat one time it will compulsory going to work)
/*
# same like while loop only while(condition) comes at last
#
do{
     //do some work   
} while(condition);
*/
//example of it's use
let ii = 20;    //intialize
while(ii<=5) {
    console.log("ii = ",ii);
    ii++;    //updation
}//it is not going to work even for once but in do while
//with do while
let k =20;
do {
    console.log("k = ",k);
    k++;
} while(k<=10);    //k =  20 one time it works


//5. For - of loop 
/*
(helps to iterate on some special datatypes)
(works on the stringd and arrays to work on there each element)
#
for(let val of strval){
   //do some work
}
*/
let str = "SwetaYadav";
//here i is iterator  -> characters
for(let i of str) {     //no initialization,updation,condition needed
    console.log("i = ",i);
}
//to count the length of string
let Str = "SwetaYadav";
let size = 0;
for(let i of str) {    
    console.log("i = ",i);
    size++;
}
console.log(size);


//6. For in loop
/*
(heps to access the keys of the value also)
for(let key in objvar){
    //do some work
}
*/
let student = {
    name : "Sweta Yadav",
    age: 19,
    cgpa: 7.5,
    isPass: true
};

for(let key in student) {
    console.log("key = ",key , "value = ",student[key]);
}



//Topic_2(practice questions)
//1 (print all even number from 0 to 100)
let count = 0;
for(let k = 0;k<=100;k++) {
    if(k%2==0) {
        console.log(k);
        count++
    }
    console.log(count);
}

//2(game)
/*
let gameNum = 25;
let userNum = prompt("Guess the number: ");

while(userNum != gameNum) {
    userNum = prompt("You enter wrong number , Guess again: ");
}
console.log("Congratulations, you entered the right number");
*/



//Topic_3(Strings)
//1(Create string)
let str1 = "Sweta Yadav";     //1 way
let str2 = 'Swati yadav ';    //2 way

//these strings have some inbuilt properties and some inbuilt functions also which can also known as methods now first we focus on the properties
//2(string length)
console.log(str.length);      // out: 10
console.log("str[0] = ",str[0]);
console.log("str[1] = ",str[1]);
console.log("str[2] = ",str[2]);
console.log("str[3] = ",str[3]);
console.log("str[4] = ",str[4]);
console.log("str[5] = ",str[5]);
console.log("str[6] = ",str[6]);
console.log("str[7] = ",str[7]);
console.log("str[8] = ",str[8]);
console.log("str[9] = ",str[9]);
console.log("str[10] = ",str[10]);
console.log("str[11] = ",str[11]);
/*
out:
str[0] =  S
str[1] =  w
str[2] =  e
str[3] =  t
str[4] =  a
str[5] =  Y
str[6] =  a
str[7] =  d
str[8] =  a
str[9] =  v
str[10] =  undefined
str[11] =  undefined

# position or index starts from the 0 
# spaces are not counted as indexes
*/

//3(template litreal)
let specialString = `this is a template litreal`;    //3rd way
console.log(typeof specialString);      //out: string

//why template is needed??
//normal string
let obj = {
    item: "pen",
    price: 10,
};

console.log("the cost of", obj.item,"is",obj.price,"rupees");

//template string
let output = `the cost of ${obj.item} is {obj.price} rupees`;
console.log(output);


