let  pauseBtn=document.getElementsByClassName("fa-play");
let artists=document.getElementsByClassName("artist");
let extra=document.getElementsByClassName("extra")
let wave=document.getElementsByClassName("wave");
let check=1;
for(let p of artists){
   p.addEventListener("click",function pause(){
    if(check==1){
        p.classList.remove("extra")
        p.children[2].children[0].removeAttribute("class","fa-play fa-solid")
        p.children[2].children[0].setAttribute("class","fa-pause fa-solid")
        p.children[2].style="opacity:1;"
 
        check=0;
        
    }
    else{
        p.children[2].style="opacity:0;"
        p.classList.add("extra")
        p.children[2].children[0].removeAttribute("class","fa-pause fa-solid") 
        p.children[2].children[0].setAttribute("class","fa-play fa-solid") 
        check=1;
         

    }
        

   })
}
 
let yse=1;
let likeBtn=document.getElementsByClassName("likeg")[0];
likeBtn.addEventListener("click",function(){
    if(yse==1){
        likeBtn.style="  color:rgb(244,49,98);"
        setTimeout(function de(){
            console.log("hello ")
        },1000);
        yse=0;
        // likeBtn.style="transform:scale(1); "
    }
    else{
        likeBtn.style="color:white;"
        yse=1;
    }
})
let audioElement=new Audio('Brown.mp3')
audioElement.pause; 
console.log("hey sop")
let masterPlayBtn=document.getElementsByClassName("i3")[0];
masterPlayBtn.addEventListener("click",function player(){
    if(audioElement.paused|| audioElement.currentTime<=0){
     audioElement.play();
     masterPlayBtn.classList.remove("fa-play");
     masterPlayBtn.classList.add("fa-pause");
    }
    else{
        audioElement.pause();
        masterPlayBtn.classList.remove("fa-pause");
     masterPlayBtn.classList.add("fa-play");
    }
})
let progressBar=document.getElementById("progressbar");
audioElement.addEventListener("timeupdate",function tt(){
    console.log("timeupdate")
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress)
    progressBar.value=progress;
}) 
progressBar.addEventListener("change",function iro(){
    audioElement.currentTime=(progressBar.value*audioElement.duration)/100;
})
let player =document.getElementsByClassName("playbtn");
let cmnGridBox=document.getElementsByClassName("cmn-grid-box");
for(let box of cmnGridBox){
    box.addEventListener("click",function changer(){
        makePlayAll();
        makeGifOff();
        
        box.children[0].style="opacity:1;"
        console.log(box.children[4].innerHTML);
         masterBtnImage.src=box.children[2].src;
         title.innerHTML=box.children[3].innerHTML
         title.nextElementSibling.innerHTML=box.children[4].innerHTML
        
        box.children[1].children[0].classList.remove("fa-play")
         box.children[1].children[0].classList.add("fa-pause")
         let index=parseInt(box.id);
         console.log(index);
         audioElement.src=`${index}.mp3`;
         console.log(audioElement.src);
         audioElement.currentTime=0;
         audioElement.play();
         
         masterPlayBtn.classList.remove("fa-play");
         masterPlayBtn.classList.add("fa-pause");
    })
     
}
let masterBtnImage=document.getElementsByClassName("masterBtnImg")[0];
let  title=document.getElementsByClassName("title")[0];
 console.log(title.nextElementSibling)
function makePlayAll(){

for(let playing of player ){
    console.log(playing);
   playing.children[0].classList.remove("fa-pause");
   playing.children[0].classList.add("fa-play");
}




}
let songAraay=["1.mp3","2.mp3","3.mp3","4.mp3","5.mp3","6.mp3","7.mp3","8.mp3","9.mp3","10.mp3","11.mp3","12.mp3","13.mp3","14.mp3","14.mp3","15.mp3","16.mp3","17.mp3","18.mp3",]
 

//////volume control/////
let middle=document.getElementsByClassName("right")[0]
audioElement.volume= (middle.children[2].value)/30.0;
 
console.log(middle)
 middle.children[2].addEventListener("change",function fodoe(){
   audioElement.volume= middle.children[2].value/30.0;
 })
 console.log(middle.children[2].value)

 function makeGifOff(){
    for( let ele of wave){
        ele.style="opacity:0;"
    }
 }