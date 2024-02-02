const hour_minute=document.getElementById("hour");
hour_minute.addEventListener("click",hourToMinute);

const minute_hour=document.getElementById("minute");
minute_hour.addEventListener("click",minutetoHour);

function hourToMinute(hour,minute){
    var hour=document.getElementById('HourInt').value;
    var minute=document.getElementById('MinuteInt').value;

    var h=parseInt(hour);
    var m=parseInt(minute);
     let ans;

    if(m>=0){
      if(h==0){
      ans=m;
      ans+=" minutes since there is no hour being input";
      }

      else if(h>=0){
        ans=(h*60)+m;
        ans+=" minutes ";
      }
      else{
        ans="Please enter both value";
        } 
    }
    else{
      ans="invalid input";
    }
    

    document.getElementById("Answer1").innerHTML=ans; 
}

function minutetoHour(hour,minute)
{
    var hour=document.getElementById('HourInt').value;
    var minute=document.getElementById('MinuteInt').value;
     
    ans=0;

    var h=parseInt(hour);
    var m=parseInt(minute);

    var m2 =0;
    var h2=0;
    
    var s=0;

if(m>=60){

   if(h>0){ 
    m2=m/60;
    m2=parseInt(m2);
    h2= h+m2;
    m2=m2*60;
    s=m-m2;
    ans= h2+" hours "+s+" minutes";
   }
    else if(h==0){
    m2=m/60;
    m2=parseInt(m2);
    h2= h+m2;
    m2=m2*60;
    s=m-m2;
    ans= h2+" hours "+s+" minutes"; 
    }

    else{
      ans="Please enter both value";
      } 

    }

else if (m<60)
    {
     if(h==0){
        ans=m+" minutes"+" since there is no hour being input";  
     }   
      else if(h>0) 
        ans=h+" hour  "+m+" minutes since minutes  is less then 60";
      
      else{
          ans="Please enter both value";
          } 
    }
    
    else{
      ans="invalid";
      } 

  document.getElementById("Answer1").innerHTML=ans;
}