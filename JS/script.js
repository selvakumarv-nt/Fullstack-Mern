// // var a =10;//Re-declaration and Re-assignment allowed
// // let b=20;//re-assignment allowed but re-declaration not allowed
// // const c=30;//re-assignment and re-declaration not allowed
// // console.log(a);
// // console.log(b);
// // console.log(c);
// // var d =100;
// // var e="hello world";
// // var boolean = false;
// // var undefined;
// // var Null = null;
// // console.log(typeof d);
// // console.log(typeof e);
// // console.log(typeof boolean);
// // console.log(typeof undefined);
// // console.log(typeof Null);

// // var bigInt = 12345n;
// // var symbol = Symbol('li');
// // console.log(typeof bigInt);
// // console.log(typeof symbol);

// // var arr=[10,20,30,40,50];
// // console.log(typeof arr,arr);
 
// // var obj={
// //     name:"sk",
// //     age:22,
// //     dept:["ct","ai&DS","Css"]
// // }
// // console.log(typeof obj,obj);

// //arithmetic operator(+,-,*,/,%,)
// // var a =10;
// // var b=20;
// // console.log(a+b)
// // console.log(a-b)
// // console.log(a*b)
// // console.log(a/b)
// // console.log(a%b)
// // var c=15
// // var e="30"
// // console.log(c+e)
// // console.log(c-e)
// // var d="sk"
// // console.log(d+c)
// // console.log(d-c)
// // //Logical operator &&,||,!
// // var a=true;
// // var b=false;

// // console.log(a&&b);
// // console.log(a||b);
// // console.log(!a);
// // console.log("Relation or comparision operator < > <=  >=  == !=");
// // a=10;
// // b="20";
// // console.log(a<b);
// // console.log(a>b);
// // console.log(a<=b);
// // console.log(a>=b);
// // console.log(a==b);
// // console.log(a!=b);
// // console.log(a===b);
// // console.log(a!==b);
// // console.log("Assingment operator");
// // var a=10;
// // var b=20;
// // var a=a+b;
// // var a+= b;
// // console.log(a);
// // console.log("Unary Operator");
// // var a =10;
// // var b =20;
// // console.log(a++);
// // console.log(++a);
// // console.log(--b);
// // console.log(b--);
// // a=1;
// // b=1;
// // c=0;
// // result=a++ + --b + ++c - ++a + ++b + c++ + b++ + a;
// // console.log(result);
// // var a=10;
// // var b=20;
// // if(true)
// // {
// //     console.log(`${a} + ${b} = ${a+b}`);
// //     console.log(a,"+",b,"=",a+b);
// // }
// // a=10;
// // console.log(a);
// // var a =10;
// // const b=20;
// // let c=20;
// // if(true)
// // { 
// //      var a=45;
// //      console.log(a);
// //      const b=30;
// //      let c=30;
// //      console.log(b);
// //      console.log(c);
// // }
// // console.log(a);
// // console.log(b);
// // console.log(c);
// //if else
// //     var a=10;
// // if(a%2 ==0)
// // {
// //     console.log(`${a} is Even`);
// // }
// // else{
// //     console.log(`${a} is odd`);
// // }


// // //else if
// // var mark=30;
// // if(mark>=90)
// // {
// //     console.log("0 grade");
// // }
// // else if(mark>=75)
// // {
// //     console.log("A  grade");

// // }
// // else if(mark>=35)
// // {
// //     console.log("Pass");
// // }
// // else{
// //     console.log("Fail");
// // }
// var a=4;
// var result = a%2 ==0 ? "Even" : "Odd";
// console.log(result);



// var mark =49;
// var result = (mark>=90) ? "O grade" : (mark >=70) ? " A grade" : (mark>=35) ? "Pass" :"Fail";
// console.log(result);

// var day =3;
// switch(day)
// {
//     case 1:
//         {
//         console.log("Monday");
//         break;
//         }
//     case 2:
//         {
//             console.log("Tuesday")
//             break;
//         }
//     case 3:
//         {
//             console.log("wednesday");
//             break;
//         }
//     case 4:
//         {
//             console.log("Thursday");
//             break;
//         }
//     case 5:
//         {
//             console.log("friday");
//             break;
//         }
//     case 6:
//         {
//             console.log("saturday");
//             break;
//         }
//     case 7:
//         {
//             console.log("sunday");
//             break;
//         }
//     default:
//         {
//             console.log("invalid day input");
//             break;
//         }
// }


// for(var a=1;i<=10;i++)
// {
//     console.log(1);
// }


// var val=10246;
// var count=0;
// while(val >0)
// {
//     count++;
//     val=Math.floor(val/10);
// }
// console.log(count);

//do..while
// do{
// console.log("*");
// }while(false);

//continue

// for(let i=1;i<=10;i++)
// {
//     if(i%2===0)
//     {
//         continue;
//     }
//     console.log(i);
// }


//Arrow Function

// var demo =()  =>{
//     console.log(10 +20);
// }
// demo();
//arrow function with default and parameter value
// var demo=(a=5,b=6) => {
//       console.log(a+b);
// }
// demo(10,20);
// demo();
// demo(10);

//spread operator(...)

// var arr =[10,20,30];
// var arr2 =[arr,40,50];
// var arr3 =[...arr,40,50];
// console.log(arr)
// console.log(arr2)
// console.log(arr3)

//Destructuring operator

// var [m1,m2,m3,m4,m5] = [90,99,98,97,100];
// console.log(m1,m2,m3,m4,m5);
//Destructuring operator using obj

// var {name,mobile,dept,email,isactive} ={
//                 name:"sk",
//                 mobile:121234567890,
//                 dept:["ct","Aids"],
//                 email:"12345@gmail.com",
//                 isactive:true
// }
// console.log(name,mobile,dept,email,isactive);


//for in and for of

//var arr=[10,20,30,40,50];
// for (let index in arr)
// {
//     console.log(index);
// }
// for (let value of arr)
// {
//     console.log(value);
// }

//using object

// var obj={
//     name:"sk",
//     dept:["ct","Ai&Ds"],
//     mobile:12345678
// }
// for(let key in obj)
// {
//     console.log(key,obj[key]);
// }

//map
//  var arr=[1,2,3,4,5];
//  var result=arr.map((val) =>(val*2));
//  console.log(result);

//filter
 var arr=[1,2,3,4,5];
 var even =arr.filter((val) => val%2===0);
 console.log(even);
 var sum=arr.reduce((add,val) =>(add+val),0);
 console.log(sum);









































































