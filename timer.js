
const mins=document.getElementById("mins");
const sec=document.getElementById("secs");
const hrs=document.getElementById("hrs")
let secondes=0;
let minute=0;
let heures=0;

   
  setInterval(() => {
      secondes++   
      sec.textContent=secondes;
         if(secondes<10){
            sec.textContent="0" + secondes;
        }
        if(secondes>59){
            secondes=0;
            sec.textContent="0" + secondes;
        }
    }, 1000);

     setInterval(minutes, 60000);

    function minutes(){
        mins.textContent=minute + ":";
        minute++;
         if(minute<10){
            mins.innerText="0" + minute + ":";
        }
        if(minute>60){
            minute=0
        }
    };

  setInterval(heures,360000);

    function heure(){
        hrs.textContent=heures
        heures++
        if(heures>23){
            heures=0
        }
    }
 