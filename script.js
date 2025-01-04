const kits=["Crash","Kick","Sanre","Tom"];
const containerEl=document.querySelector(".container");


kits.forEach((kit)=>{
    
    const btnEl=document.createElement("button");
    containerEl.append(btnEl);
    btnEl.innerText=kit;
    btnEl.classList.add("btn");

    const audioEl=document.createElement("audio");
    containerEl.append(audioEl);

    audioEl.src=kit+".mp3";

    btnEl.addEventListener("click",()=>{
        audioEl.play();

    })

    window.addEventListener("keypress",(event)=>{
       
        if(event.key === kit.slice(0,1))
        {
            audioEl.play();
        }
    })

    

})