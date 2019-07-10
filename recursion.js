/*
1
Create a function called sum 
that takes a single parameter n, 
and return the sum of all integers up to n starting from 0

Ex: sum(2); => 2 + 1 + 0 => 3 
Ex: sum(5); => 5 + 4 + 3 + 2 + 1 + 0 => 15

*/
function sum(n) {
  if (n==0){
    return 0;
  }
  return n+sum(n-1);
  // your code here 
}
console.log(sum(4));

/*
2
Create a function called factorial 
that takes a single parameter n, 
and return the product of all integers up to n starting from 1

Ex: factorial(2); => 2 * 1 => 6 
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24 

*/
function factorial(n) {

  if(n===1){

    return 1;
  
  }
return n =n* factorial(n-1);
 
}
console.log(factorial(4))

/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space

Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
function repeatStr(x,y){

if (y===0){
  return"";
}
return x+ repeatStr(x,y-1)
 
}

console.log(repeatStr("mohd ",8))

/*
4
Create a function called fibon
that takes 1 parameter a number,
and return the fibonacci for this number

Ex: fibon(7); => 21
Ex: fibon(2); => 2
Ex: fibon(1); => 1
Ex: fibon(0); => 1

fib(n): 1 1 2 3 5 8 13 21
        | | | | | |  |  |
n:      0 1 2 3 4 5  6  7
*/
function ficccccbon(x){

  if(x===1||x===0){
    return 1;
  }
return ficccccbon(x-1)+ficccccbon(x-2);

}
console.log(ficccccbon(6));



/*
5
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/

function sum2(num1,num2){

  if(num1===num2){
  
    return num2;
  }
  
  return (num1 + sum2(  (num1+1) , num2  )  );
  }
  console.log(sum2(5,5));
  
  

/*
6
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
Important: the stop condition should be [somthing=== 0]
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/

function repeatStr2( str , str2){
  num=str2.length;
  
  if (num===0){

    return "";
  }

  var sam=str2.slice(0,str2.length-1);
  return(str+""+repeatStr2(str,sam))
}
console.log(repeatStr2("amam","aaaa"));


/*/*
7
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/

function multiOf(num1,num2,num3 ){

  if (num3===0){
    return num1;

  }
 
 
  return num2*multiOf(num1, num2,num3-1);
  
} 


multiOf(4,10,2)


/*
8
Create a function called muti2
that take two parameter
and will return the multiplication from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/


function muti2(num1,num2){

  if(num1===num2){
  
    return num2;
  }
  
  return (num1 * muti2(  (num1+1) , num2  )  );
  }

  muti2(4,5)



/*
9
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should dint have extra space at the end or comma
** Important: the stop condition should [num1===num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/

function numberBetweenUs(num1 , num2){
  if (num1===num2-2)  {
     
    return num2-1;

    } 
    
  
  return (num1+1)+" , "+(numberBetweenUs(  (num1+1) , num2  )  );
}
numberBetweenUs(2,8);

/*
10
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 need to ahve "done"
between each number a comma and space
** you need to use recursion
** Important: You should dint have extra space at the end or comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
function countDown(x){

if(x===0){
  return "done";
}
return x = x +","+countDown(x-1);
}
console.log(countDown(2))




/*
11
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/
 function multiplication2(num1,num2){
     if(num2===0){
       return 0;
     }
    return (num1 + multiplication2(num1,num2-1));

 }

   multiplication2(5,4)


// 11
// Write a function called mod2
// that takes two parameters
// and return the module of them
// without using %
// mod2(5,4) => 1
// mod2(2,8) => 2
// mod2(7,4) => 3
// */
function mod2(num1,num2){
  if(num1<num2){
   return num1;
  }
  
  return  mod2(num1-num2,num2 )
}
mod2(8,5)

/*
12
Write a function called mirror
that takes one parameter a string
and return the reversed string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
** Important: You should dint have extra space at the end
mirror("school") => "loohcs"
mirror("car") => "rac"
mirror("maDrasa") => "asarDam"
*/

/*
13
Write a function called mirrorCaseAlso
that takes one parameter a string
and return the reversed string order
and the lower case to upper case
and the upper case to lower case
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
** Important: You should dint have extra space at the end
mirrorCaseAlso("sChOol") => "LOoHcS"
mirrorCaseAlso("THOR") => "roht"
mirrorCaseAlso("BaBa") => "AbAb"
*/

/*
14
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/

/*
15
Write a function called repeatChar2
that takes two parameters
and return the times that this char
wit case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
repeatChar2("schOol","o") => 1
repeatChar2("school","a") => 0
repeatChar2("School","S") => 1
try more case by yourself
*/