const clock = document.querySelector("h2#clock");


function displayClockH2(){
    const date = new Date();
    let hours = String(date.getHours()).padStart(2,+"0");
    let Minutes = String(date.getMinutes()).padStart(2,+"0");
    let seconds = String(date.getSeconds()).padStart(2,+"0");
    clock.innerText = `${hours}:${Minutes}:${seconds}`;
}

displayClockH2();
setInterval(displayClockH2, 1000);
