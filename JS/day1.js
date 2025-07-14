//Topic_1: (to print something)
//1
console.log("hellooo");
//2
console.log("helloo") //without colon also it works
//3
console.log('hellooo')  //sigle ' can also print

/*





Topic_2: (installation and connection)
some notes
1. it have the extension of .js
2. sinlge line comments using //
3. double line comments using /* in the start and ending will be shown here 
4. now code in vs and practicals can be seen on the browser we have to join them somehow
5. for this we will use html (a programming language used for definig the structure of website like button, block etc)
6. how everything will show up how information should be shown all tells by html
7. html have direct connection to browser using this we can ensure connection of javascript


8.STEPS
   (i) Make a file globally "index.html"
   (ii) then write ! there and click the first option a automatic code(boiler plate code) will be written there.
   (iii) save + write script there at last 2nd line + press enter
   (iv) write src="filename.js" in between script like for example <script src= "day1.js"></script> like this
   (v)  now when you opwn the index file(in browser blank page will come) -> click right button -> select inspect -> go to console-> 
        output of file will be printed there (index and file should be in same folder only.)
   
*/





//Topic_3: VARIABLES(conatiners to store different different kind of data,can change its value,)
/*     (i)   Variable (Variables are names you give to store data in memory.) → Points to → Memory → Holds → Data
       (ii)  console automatically stores the value and put operations on that
             > age = 24 (input sign >)
             < 24
             > age
             << 24
             > age + 1
             < 25
             > name = "Tony Stark"
               'Tony Stark'
             > name
             << 'Tony Stark'
             > price = 150.50
                150.5
       (iii) 1.String
             2.Integer
             3.Float
             4.Null(we know there is a value which is 0 or null)
             5.Undefined(don't know what is there)
             6.Boolean type (stores whether true or false)
             javascript is dyanamically typed no early datatype declaration for variable is there and = is used as assighment operator
       */
fullName = "sweta yadav"; //1  (i can use this var for storing int as well )
Age = 24;  //2
price = 99.99;  //3
x = null;  //4
y = undefined;  //5
isFollow = false;  //6
console.log("fullNamesw3");  //not print the value of full name print the full name 
console.log(fullName); //output = sweta yadav
console.log(Age);
console.log(price);
console.log(x);
console.log(y);
console.log(isFollow);

//Variables assign rules
//1.Case sensitive
//2.While naming only letter,digit,_,$ is allowed
//3.from 2nd for starting letter of var digit should not get used
//4.Reseved words can't use

fullName = "hello";   //1
FULLNAME = "HELLO";
//both are different
console.log(fullName);
console.log("FULLNAME");





//Topic_4(let,var,const)
//we have to use keywords while defining the variables as it is important.
/*
1. Var
     can be re-declared (that is why not a good practice it is) and updated.global scope variable
*/

var AGE = 24;  //declared a variable
var AGE = 59;  //declared one more same variable
var AGE = 98;  //declared one more same variable
console.log(AGE);  //it will print 86(last declared one)
// but here at 3 different location in memory 3 different variable name of age created

/*
2. Let
   cannot redeclare the variables but can be updated.Block {} scope variable
*/
let age =24;
age = 46;  //let age = 46; it will show error cannot write let again for same var
age = 59;  //let age = 59; same error
console.log(age)  //it will print 59 updated one
// here at the same location of same var value get updated not new variable formed

/*
3.const
  cannot redeclared and cannot updated.block {} scope variable
*/
const name = "Balle";
//name = "Helloo"; //cannot reasign
console.log(name);

const PI = 3.14;
console.log(PI);

//IMP POINT

//1
let a; //without assigning it can create the var
console.log(a);  //it will show undefined
a=10;
console.log(a); // 10
//but in const
//const A; //will show error (SyntaxError: Missing initializer in const declaration)
const A =100;
console.log(A); //now 100;

//2
{
   let b =5;
   console.log(b);  //5
}
{
    let b = 20;
    console.log(b);  //20
}
//in let redeclaration can work like that cause it is block var





//Topic_5(datatypes)
/* 
Primititve{
1. Number,2.String,3.Boolean,4.Undefined,5.Null,6.bigInt,7.Symbol
}
*/

//1 (number)
let height = 24;
console.log(height);   // html: height , output: 24
console.log(typeof height);   //html: typeof , output: 'number'

//2 (string)
let colour = "pink";
console.log(colour);   //html: colour, out: pink
console.log(typeof colour);   //html: typeof , output: 'string'

//3 (Boolean)
let isFOLLOW = true;
console.log(isFOLLOW);   //html: isFOLLOW , out:true
console.log(typeof isFOLLOW);   //html:typeof , out: boolean

//4 (Undefined)
let d;
console.log(d);   //html: d, out: undefined
console.log(typeof d);    //html: typeof d, out: undefined

//5 (NULL)
let e = null;
console.log(e);   //html: e , out: null
console.log(typeof e);   //html: typeof e , out: 'object'

//6(BigInt)
//not much used
let f = BigInt("123");
console.log(f);   //html:f, out:123n
console.log(typeof f);   //html:typeof f, out:'bigint'

//7 (symbol)
let g = Symbol("hello!!");
console.log(g);   //html: f , out: Symbol(hello!!)
console.log(typeof g);   //html: typeof g , out:'symbol'


//non primitive 
/*{
1. objects= collection of values [arrays,functions]
2. stores in way of key:value
3. like for object student [(name=string)(age=number)(marks=number)(isPass=boolean)]
}*/
const student = {
      fullname : "sweta yadav",   //we don't use ; we use ,
      AgE: 20,
      cgpa: 8.2,
      isPass: true
};   ///here we use ;
console.log(student);
console.log(typeof student);
console.log(student["fullname"]);  //for accessing a particular key value
console.log(student.fullname);     //for accessing a prticular key value way 2

// in html
/*
>student
<{fullname: 'sweta yadav', AgE: 20, cgpa: 8.2, isPass: true}AgE: 20cgpa: 8.2fullname: "sweta yadav"isPass: true[[Prototype]]: Object
>typeof student 
<'object'
student["fullname"]  //for accessing a particular key value
'sweta yadav'
student.fullname     //for accessing a prticular key value way 2
'sweta yadav'
*/

//for updating the values 
//1. for let in number
student["AgE"] = student["AgE"] + 5;  //VALUE UPDATED
//2. for string
student["fullname"] = "Swati yadav";  //VALUE UPDATED
console.log(student);
console.log(typeof student);
console.log(student["fullname"]);
console.log(student["AgE"]);
// This states that we can change the const object keys but not objects as we learntt earlier





//Topic_6(PRACTICE QUESTIONS)

//1.
// variables(name[string],rating[number],price[numer],offer[number])
const product = {
      productName: "ball pen",
      rating: 4.5,
      offer: 5,
      price: 27
};
console.log(product);

//important point about string
/*
in number 1+2 in html give 3;
but in string "123"+1 will give 1231;
aslo "abcd" +123 it will give abcd123 ;
in case of string it adds as string
*/
console.log(1+2);
console.log(123+1);
console.log("123"+1);
console.log("abcd"+123);

//2.
//variables(username[string],isfollow[boolean],followers[number],following[number])
const profile = {
      username: "Sweta yadav",
      isFollow: false,
      followers: 79,
      following: 79
};

console.log(profile);
console.log(typeof profile);
console.log(typeof profile["username"]);
console.log(typeof profile["isFollow"]);
console.log(profile["username"]);
console.log(profile["isFollow"]);

//updations
profile["username"] = "Swati yadav";
profile["isFollow"] = true;
profile["followers"] = 186;

console.log(profile);
console.log(profile["username"]);
console.log(profile["isFollow"]);