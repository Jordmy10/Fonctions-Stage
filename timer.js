
    function timeAct(){
        const heureActuelle=new Date()
        let secondes=heureActuelle.getSeconds();
        let minutes=heureActuelle.getMinutes();
        let heures=heureActuelle.getHours();
        secondes=secondes<10 ? "0" + secondes:secondes
        const heureFinale= heures + ":" + minutes + ":" + secondes 
        const styleHeure=document.getElementById("heureActu")
        styleHeure.textContent= heureFinale

    }

    setInterval(timeAct,1000)

    
