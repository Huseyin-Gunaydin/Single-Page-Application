import {useEffect, useState} from "react"

//const [message, setMessage]= useEffect("room")


export default function Button({roomNummer}){
    
   const [checkedIn, setcheck] = useState(false);
   const clicked = (event)=>{
    setcheck(!checkedIn)
    console.log(checkedIn)
   }

   useEffect(() => {
    if(checkedIn){
        alert(`Zimmer Nr.${roomNummer} ist nun belegt`)
    }
  }, [checkedIn]);


    return(
        <>      
        <button onClick={clicked}>Check In</button>
        </>
    )
}



/* 2. Implementiere einen State "checkedIn" in der Komponente Room, der anfangs auf false steht und wechsle beim Klick auf den Button zwischen false und true hin und her.  */

/* 3. Überwache den Wechsel des States mittels useEffect und zeige einen Alert mit dem Text "Zimmer Nr. <roomNo> ist nun belegt.", sobald der State auf true gewechselt ist.  */

/* 3. Durum değişikliğini useEffect kullanarak izleyin ve durum doğru olarak değişir değişmez "Oda no. <roomNo> şimdi dolu." metniyle birlikte bir uyarı gösterin. */