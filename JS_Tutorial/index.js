//1. ways to print javascript
        // document.write("This is document1");
        //console.log("Hello world");
        // alert("me");
       
//2. javascript API
      //console.clear()
    //   console.assert(5==7) 
    //   console.warn("this is worning");
    //   console.error("this is an error")

//3.java script variables

    //data type "number"
    //  var num1=10;
    //  var num2=10;
    //  console.log(num1+num2);
    // document.write(num1+num2);

//4.data type
   //data type "string"
    // var str1="this is string";  
    //  console.log(str1);

    //  //data type "object"
    //  var num1=99.99
    //  var num2=0.01
    //  console.log(num1+num2);

//    var marks={
//        avi:10,
//        raj:10.10,
//        abc:99.99,
//    }
//    console.log(marks)
  
//    data type boolean
//    var a,b;
//    a=true;
//    b=false
//    console.log(a,b);

//    logical oprators
//    console.log(a&&b); 
//    console.log(a||b);
//    console.log(!a);
//    console.log(!b);

// var und;
// console.log(und);

// var a=null;
// console.log(a);

//  var ary=[1,2,"avinash",4,5];
// console.log(ary);
// console.log(ary[0]);
// console.log(ary[4]);

// oprators in javascript
//arith oprator
//  1.+
//  2.-
//  3.*
//  4./

// var a=120;
// var b=12;
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);

// assignment oprator
// 1.=

// var c=a;
//  c+=10; //c=c+10
//  c-=10;
//  c*=10;
//  c/=10;
//  console.log(c);
// comparision oprators
// var x=10;
// var y=10;
// console.log(x==y)
// console.log(x>=y)
// console.log(x<=y)
// console.log(x!=y)


// 5.functions
  // function avg(a,b){
  //     var c=(a+b)/2
  //     return c
  // }
  // c1=avg(15,16)
  // c2=avg(100,10)
  // console.log(c1,c2)

//6. conditional in javascript
  // var age=2
  //  if(age>=18){
  //     console.log("you are not kid")
  //   }
  //   else{
  //     console.log("you are kid ")
 // }

// ladder if-else
   
  //    var marks=91

  // if(marks>90){
  //   console.log("grade A+")
  // } 
  // else if(marks>80){
  //   console.log("grade A")
  // }
  // else if(marks>70){
  //   console.log("grade B")
  // }
  // else if(marks>=50){
  //   console.log("grade C")
  // }
  // else{
  //   console.log("fail")
  // }
   
//7. Arrray

// var ary=[1,2,3,4,5,6,7,8,9,0]
// console.log(ary);

// for(i=0;i<ary.length;i++){
//   console.log(ary[i])
// }

// ary.forEach(function(element){
//   console.log(element)
// })

// ary.forEach(function(i){
//   console.log(i)
// })

//8 while loop
// let ary=[1,2,3,4,5,6,7,8,9,0]
// let j=0
// console.log("this is while loop ");
// while(j<ary.length){
//   console.log(ary[j])
//   j++
// } 

//9 this is DO-WHILE LOOP
  //  console.log("this is do-while loop")
//  do{
//    console.log(ary[j])
//    j++
//  }while(j<ary.length)

// continue and break keywords

// var ary=[0,1,2,3,4,5,6,7,8,9]

//10 for(var i=0;i<ary.length;i++){
//   if(i==6){
//     //  break;
//     continue;
//   }
//   console.log(ary[i])
// }


//11 array oprations

  let myary=["fan","camera",34,null,true];

  // console.log(myary);
  // console.log(myary.length)
  // myary.pop();
  // myary.push("avinash")
  // myary.shift()
  //  var newlen=myary.unshift("markad")
  // myary.unshift("markad")
  // console.log(myary.toString());
  // console.log(myary.sort())

  //12. string oprations

    //  let str1="computer is good,is not bad";
    //  let str2="department";

    //  console.log(str1);
    //  console.log(str2);
    //  console.log(str1.length);
    //  console.log(str2.length);
    //  console.log(str1.indexOf("is"))
    //  console.log(str1.lastIndexOf("is"))
    // console.log(str1.slice(3,20))
    // console.log(str1.slice(0,17))
    // console.log(str1.replace("good","bad"))

// 13. date 

  //  let todaydate=new Date();
  //  console.log(todaydate)
  //  console.log(todaydate.getDate())
  //  console.log(todaydate.getDay())
  //  console.log(todaydate.getFullYear())

// 14.dom=document Object model(dom manupulating)

//  console.log(document)
//  console.log(document.location)
// console.log(document.getElementById('click').click())
// console.log(document.getElementById('click').style.background="red")
// console.log(document.getElementById('click').style.border="blue 5px solid")
// console.log(document.getElementById('click').style.color="white")

// let elemclass=document.getElementsByClassName('contanair')
// console.log(elemclass)
// // elemclass[0].style.background="red"
// elemclass[0].classList.add('bg-color')

// 15 document tagname

//  tn= document.getElementsByTagName('button')
//  console.log(tn)

// 16. button clicked
  //  function clicked(){
  //    console.log("button was clicked")
  //  }

  //  window.onload=function(){
  //    console.log("document was loaded")
  //  }

  // firstcontanair.addEventListener('click',function(){
  //   console.log("click hua")
  // })

  // firstcontanair.addEventListener('mouseover',function(){
  //   console.log("mouse over container")
  // })

  // firstcontanair.addEventListener('mouseout',function(){
  //   console.log("mouse out of container")
  // })


// firstcontanair.addEventListener('mouseup',function(){
//     console.log("mouse up container")
//   })

  // firstcontanair.addEventListener('mousedown',function(){
  //   console.log("mouse down container")
  // })

  // firstcontanair.addEventListener('click',function(){
  //   document.querySelectorAll('.contanair')[0].innerHTML="this is document"
  //   // console.log("mouse down container")
  // })

// 17. arrow function
    // function sum(a,b){
    //   return a+b;
    // }

    // sum=(a,b)=>{
    //    return a+b;
    // }

//18. set time out    


// logkaro = ()=>{
//   document.querySelectorAll('.contanair')[0].innerHTML="this is doc"
//   console.log("I Am Your Log")
// }
// setTimeout(logkaro,5000)

// 19.javascript localStorage

  // localStorage.setItem('name','avinash')
  // localStorage
  // localStorage.getItem('name') 
  // localStorage.clear()


// 20. json

//    obj={name:"avinsh",length:1}
//    js=JSON.stringify(obj)
//    console.log(js)
//    console.log(typeof(js))
//    console.log(typeof(obj))

// 21. doller

  // var a=34;
  // var str="value of a is "
  // console.log("",str+a)

22  
