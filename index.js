const characters =["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
"Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")",
"_","-","+","=","{","[","}","]",",","|",":",";",
"<",">",".","?","/"];

let passWord1=document.getElementById("pass-Word1")
let passWord2=document.getElementById("pass-Word2")
let passwordLength=15
function randomCharacter1(){
    random1= Math.floor(Math.random()*characters.length)
    return characters[random1]
}

function randomCharacter2(){
    random2= Math.floor(Math.random()*characters.length)
    return characters[random2]
}
function generate(){

    
    let randomPassword1=""
    for(let i=0; i<passwordLength;i++){
       
       randomPassword1+=randomCharacter1()
       passWord1.textContent=randomPassword1

    }

    let randomPassword2=""
    for(let i=0; i<passwordLength;i++){
       
       randomPassword2+=randomCharacter2()
       passWord2.textContent=randomPassword2

    }

}

function copy1(){
    navigator.clipboard.writeText(passWord1.textContent);
    alert("Copied the text: " + passWord1.textContent);
}
function copy2(){
    navigator.clipboard.writeText(passWord2.textContent);
    alert("Copied the text: " + passWord2.textContent);
}