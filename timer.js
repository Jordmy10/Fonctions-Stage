
    function timeAct(){
        function formaterPeriode(periode){
            return ("0" + periode).slice(-2)
        }
        const heureActuelle=new Date()
        let secondes=heureActuelle.getSeconds();
        let minutes=heureActuelle.getMinutes();
        let heures=heureActuelle.getHours();
        const heureFinale= formaterPeriode(heures) + ":" + formaterPeriode(minutes) + ":" + formaterPeriode(secondes) 
        const styleHeure=document.getElementById("heureActu")
        styleHeure.textContent= heureFinale
    }

    setInterval(timeAct,1000)

    
