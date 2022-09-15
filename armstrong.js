
/*
 2. Write a program to find whether a given number is armstrong number or

not-
The Armstrong number is a number that is equal to the sum of cubes of

its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 153 is an Armstrong number.
153 = (1*1*1)+(5*5*5)+(3*3*3) where:
(1*1*1)=1
(5*5*5)=125
(3*3*3)=27
So:
1+125+27=153 
*/
const prompt=require("prompt-sync")();

let num=prompt(" Enter a number to Find Armstrong or not  ");
let temp=num;
let digit=0,sum=0,cube;
while(temp!=0)
{

    digit=temp%10;
    cube=(digit*digit*digit);
    sum+=cube;
  temp=parseInt(temp/10)  ; 

}

if(sum==num)
console.log(`${num} is Armstrong`);
else
console.log(`sum= ${sum} num= ${num} is  not Armstrong`);