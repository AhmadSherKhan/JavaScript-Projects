const hourEl=document.getElementById('hours');
const minuteEl=document.getElementById('minutes');
const secondEl=document.getElementById('seconds');
const ampmEl=document.getElementById('ampm');

function UpdateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm= "AM";

    // to change AM to PM after 12 we use this
    if(h>12){
        h=h-12;
    }else{
        ampm="PM";
    }  
// if hour,minute or second is less than 10 i.e 7 or 9 so for adding 0 with i.e 09 or 04 we write this   
    h = h < 10 ? "0" + h : h ;
    m = m < 10 ? "0" + m : m ;
    s = s < 10 ? "0" + s : s ;

    hourEl.innerText=h;
    minuteEl.innerText=m;
    secondEl.innerText=s;
    ampmEl.innerText=ampm;

    // for updating clock just after 1 second we use this 
    setTimeout(()=>{
        UpdateClock();
    },1000)
}
UpdateClock();