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
//(helps to iterate on some special datatypes)
