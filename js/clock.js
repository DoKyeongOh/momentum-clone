const clock = document.querySelector("h2#clock");


function displayClockH2(){
    const date = new Date();
    let hours = date.getHours().toString().padStart(2,+"0");
    let Minutes = date.getMinutes().toString().padStart(2,+"0");
    let seconds = date.getSeconds().toString().padStart(2,+"0");
    clock.innerText = `${hours}:${Minutes}:${seconds}`;
}

setInterval(displayClockH2, 1000);
