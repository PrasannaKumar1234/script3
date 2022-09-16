
// // 1. Using for loops, write a Javascript program to output the following
// // pattern
// var i,j;
// let sum="";
// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){

//        sum=sum+ j ;
     
//     }
//     sum=sum+ "\n";
// }console.log(sum);


/*2. Write a program to find whether a given number is armstrong number or

not-*/

// var number=370;
// var temp=number;
// var sum=0;
// while(temp>0){
//     var digit= temp%10;
//     sum+= digit**3;
//     temp=parseInt(temp/10);
// }
// if(sum==number){
//     console.log("The NUmber YOU Entered Is Armstrong = ",number);
// }
// else{
//     console.log("The Entered Number is Not Armstrong ");
// }


// 3. Write a program to find whether a given number is special number or

// not-

// var num=145;
// var originalnumber=num;
// var sum=0;

// while(num>0){
//     var lastdigit= num%10;
//     var fact =factorial(lastdigit);
//     sum=sum+fact;
//     num=parseInt(num/10);
// }

// if(originalnumber===sum){
//     console.log( originalnumber     +  "is a special number");
// }else{
//     console.log( originalnumber     + "is not a special number");
// }

// function factorial(x){
// var fact=1;
// for(var i=1;i<=x;i++){
//     fact =fact*i;
// }
//     return fact;
// }