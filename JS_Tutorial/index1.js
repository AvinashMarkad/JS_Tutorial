setInterval(()=>{
    let a=new Date();
    let time=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()
    let date=a.toLocaleDateString()
    // document.querySelectorAll('.avi') .innerHTML=time+date;
    document.getElementById("avi") .innerHTML=time+" on "+date;
},1000)