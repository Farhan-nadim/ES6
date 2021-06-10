const doubleIt=num=>num*2
const result=doubleIt(10);
console.log(result)


const add=(num1,num2=0)=>num1+num2;
const result1=add(10,20);
console.log(result1)


const giveMe5=()=>5;
result3=giveMe5();
console.log(result3);

const doMath=(num1,num2)=>{
    const sum=num1+num2;
    const differ=num1-num2;
    const result=sum*differ;
    return result;
}
const result4=doMath(12,10);
console.log(result4);