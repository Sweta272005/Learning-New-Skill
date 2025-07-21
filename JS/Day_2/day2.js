//Operators and coonditional statements

//Topic_1(Comments in js)
console.log('Hello from test.js');
//this is a comment(single line)
/*
this is a multi line comment
*/



//Topic_2(Operators in js)
//same in most languages used to perform some operation on data
/*
1.(a+b)=expression , where a and b are operands and + is a operator
2.Arithmetic operators:
      1.Addition
      2.Subtraction
      3.Multiplication
      4.divide
      5.Modulous
      6.Exponentiation
      7.Increment
      8.Decrement
*/
//2.arithmetic operators
let a=5;
let b= 2;
console.log("a=",a);
console.log("b=",b);
console.log("a+b=",a+b);   //1.Addition
console.log("a-b=",a-b);   //2.Subtraction
console.log("a*b=",a*b);   //3.Multiplication
console.log("a/b=",a/b);   //4.divide
console.log("a%b=",a%b);   //5.Modulous
console.log("a**b=",a**b);   //6.Exponentiation(a to the power b= 5^2)

//now two unary(only need one operator) operators
a=a+1;   //7.Increment (or we can write a++)
b=b-1;   //8.Decrement (or we can write b--)
console.log("a=",a);
console.log("b=",b);

//post increment(a++)
console.log("a++=",a++);   //first it will print the a original value
console.log("a=",a);     //then next it will update the value
//pre increment(++a)
console.log("++b=",++b);   //first it will update the value then it will print
//post decrement(a--)
console.log("a--=",a--);
console.log("a=",a); 
//pre decrement(--a)
console.log("--b=",--b); 


/*
3.Assighment operator
     1.(=)
     2.(+=)
       (a+=1 which can also write as a=a+1)
     3.(-=)
     4.(*=)
     5.(%=)
     6.(**=)
//3.Assighment operator (left = right;right value gets assign to the left)
*/
//1.(=)
let c=5;
let d=2;
console.log("c =",c);
console.log("d =",d);
//2. (+=)
c += 4;   //c = c + 4
console.log("c2 = ",c);   //9
//3. (-=)
c -= 4;   //c = c - 4
console.log("c3 = ",c);   
//4. (*=)
c *= 4;   //c = c * 4
console.log("c4 = ",c);   
//5. (%=)
c %= 3;   //c = c % 3
console.log("c5 = ",c);   
//6. (**=)
c **= 4;   //c = c ** 4
console.log("c6 = ",c);   //9


/*
//4.Comparison operator
    1.(==)    //checks are these equal
    2.(!=)    //checks are the no equal
    3.(===)   //checks the equal to and type(strict including datatype comparision)
    4.(!==)   //check not equal to and type(strict including datatype comparision)
//5. if a is number 5 and b is string five it will return them equal for strict comparision 3 and 4 are important
//6. (i) >
     (ii) >=
     (iii) <
     (iv) <=
*/
//1.(==):return boolean type true or false
let e = 5;
let f = 2;
console.log("e==f",e==f);    //1.false
console.log("e!=f",e!=f);    //2.true
console.log("e===f",e===f);  //3.(not beneficial cause datatype is already same now bwhaves same like ==)
console.log("e!==f",e!==f);  //4.(not beneficial cause datatype is already same now bwhaves same like !=)
//5
let g = 5;  //number
let h = "5";   //string -> number
console.log("g==h",g==h);   //true
console.log("g===h",g===h);   //3.false
let i = 4;
let j ="3";
console.log("i!=j",i!=j);
console.log("i!==j",i!==j); // doubt
//6
console.log("e > f",e > f);   //(i)
console.log("e >= f",e >= f); //(ii)
console.log("e < f",e < f);   //(iii)
console.log("e <= f",e <= f); //(iv)
//another example
console.log("e > e",e > e);   //(i)
console.log("e >= e",e >= e); //(ii)
console.log("e < e",e < e);   //(iii)
console.log("e <= e",e <= e); //(iv)


/*
//5.Logical operators: return true or false based on true and false events
    1.(&&) : logical and [e1:true(1), e2:true(1) = then only out: true(1){*}]
    cond1 | cond2 | RES(&&) |  RES(||)
      T   |   T   |  T*     |    T
      T   |   F   |  F      |    T
      F   |   T   |  F      |    T
      F   |   F   |  F      |    F+
    2.(||) : logical or  []
    3.(!)  : logical not
*/
let m =6;
let n = 5;
let cond1 = m>b;   //true
let cond2 = m==6;   //true
//1
console.log("1.cond1 && cond2 : ",cond1 && cond2);   //1  out:true
console.log("1.cond1 && cond2 : ", m>b && m==6 );    // no need of extra var write like this
//return true only when both cond are true(true k liye dono ko true hona chahiye)
//2
console.log("2.cond1 || cond2 = ", m<n || m==6);     //2  out:true
//return true when atleast one is true(true hone k liye ek hi true kaffi hai)
//3
console.log("6<5 = ", m < n);   //false
console.log("!(6 < 5) ", !(m < n));  //true 




//Topic_3(conditional statements )

//1. IF statement
let age = 25;
if(age>=18){
  console.log("eligible");     //eligible
}
let Age = 18;
if(Age>=18){
  console.log("eligible");     //NOTHING
}
//MAIN PROGRAME(multiple if statement)
//(i)
let AgE = 18;
if(AgE>=18){
  console.log("eligible");     
}
if(AgE<18){
  console.log("not eligible");    
}
//(ii)
let mode ="dark";
let colour;     //the colur we want to set

if(mode=="dark"){
  colour="black;"
}
if(mode=="light") {
  colour="white";
}
console.log(colour);

//2. if else statement
//(ii)
if(mode=="dark"){
  colour="black;"
}
else {
  colour="white";
}
console.log(colour);

//3. else if statement
if(age<18){
  console.log("junior");
} else if (age>60){
  console.log("senior");
} else{
  console.log("middle˜"); 
}
//(iii)
let modee = "silver";
let color;

if (modee === "dark") {
  color = "black";
} else if (modee === "blue") {
  color = "blue";
} else if (modee === "pink") {
  color = "pink";
} else {
  color = "white";
}

console.log(color);

//imp
if (modee = "dark") console.log(mode);  //only one work no error will come




//Topic_4(ternary operator)
/*
1. works on 3 operands
2. condition? true output : false output
3. example = age>18 ? "adult": "not addult";
*/

let agee = 25;
agee >= 18 ? "adult" : "not adult";    //output nothing
//need to store in a var to get printed output
let result = agee >= 18 ? "adult" : "not adult"; 
console.log(result);
//or
agee >= 18 ? console.log("adult") : console.log("not adult"); 



//mdn docs
//switch statement 

//imp_notes
/*
//1
alert("hello!");   //pops as a notification on html page
//2
prompt("hello!");   //pops the message + takes a input on page as well
//3
let name = prompt("hello!");   //whatever input we'll give is going to get saved in var name
console.log(name);
*/


//topic_5(questions);
//1
/*
let num = prompt("Enter the number:");
if(num % 5 == 0){
  console.log(num ,"is multiple of 5");
}
else {
  console.log(num ,"is not multiple of 5");
}
*/  //works only on browser

//2
let score = 75;
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else if (score >= 0 && score <= 49) {
    grade = "F";
}

console.log("according to your scores, your grade was : ", grade);
