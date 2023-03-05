document.getElementById("start").addEventListener("click",function(){
    let num=0
    isClick=true
 let intervalId=setInterval(()=>{
     let getText=document.getElementById("text")
     getText.innerText=++num
    if(isClick=true){
        document.getElementById("stop").addEventListener("click",function(){
            clearInterval(intervalId)
        })

   }
}  ,1000)
})


document.getElementById("reset").addEventListener("click",function(){
    let getText=document.getElementById("text")
    getText.innerText="00"
})
document.getElementById("stop").addEventListener("click",function(){  
})