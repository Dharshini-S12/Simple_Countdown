var countdownElement=document.getElementById('countdown');
var initalcountdownval=countdownElement.innerHTML;
setInterval(function(){
 
  initalcountdownval=initalcountdownval>0? initalcountdownval -1:0;
  countdownElement.innerHTML=initalcountdownval;
  
},1000);


/*var a=document.getElementById('countdown');
var b= a.innerHTML;
setInterval(function(){
    b=b>0? b -1:0;
    a.innerHTML=b;
},1000);*/