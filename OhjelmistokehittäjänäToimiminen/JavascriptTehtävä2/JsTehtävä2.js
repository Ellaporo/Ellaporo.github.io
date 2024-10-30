const weekday = ["Tänään on Sunnuntai","Tänään on Maanantai","Tänään on Tiistai","Tänään on Keskiviikko","Tänään on Torstai","Tänään on Perjantai","Tänään on Lauantai"];
 
function showWeekday() {
    const d = new Date();
    let day = weekday[d.getUTCDay()];
    document.getElementById("viikonpaiva").innerHTML = day;
  }
   
  document.getElementById("myBtn").addEventListener("click", showWeekday);