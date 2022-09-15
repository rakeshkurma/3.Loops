const prompt=require("prompt-sync")();

let num=prompt(" Enter a Number  to find special or not ");

let temp=num,sum=0,digit;
let fact;
while(temp!=0)
{
    

    digit=temp%10;

    fact = factoril(digit);
    sum+=fact;
    temp=parseInt(temp/10);
}


function factoril(n)
{
    let i=1,s=1;
    while(i<=n)
    {
        s*=i;
        i++;
    }
  
    return s;
}

if(sum==num)
console.log(`${num} is a Special Number`);
else 
console.log(`As num=${num}  and sum=${sum} are not Equal so its  Not a special Number`);