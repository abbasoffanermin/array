let olke =[
    "Azerbaycan",
    "Rusiya",
    "Turkiye",
    "Almaniya"
]
let seher =[
    ["BAki","Cebrayil","Agdam","Gence","Goycay"],
    ["Moskva","Sankt‑Peterburq","Samara","Kazan"],
    ["Istanbul","Ankara","Izmir","Bursa"],
    ["Berlin","Hamburq","Viten"]
]
 let olkeS =document.getElementById("olke")
let seherS=document.getElementById("seher")
let data=`<option value="" disabled selected>Olke secin</option>`
for(let i=0;i<olke.length;i++){
    data+=`<option value="${i}">${olke[i]}</option>`
}olkeS.innerHTML=data

function sec(){
    
    let val=olkeS.value
    let data=`<option value="" disabled selected>Seher secin</option>`
for(let i=0;i<seher[val].length;i++){
    data+=`<option value="${i}"> ${seher[val][i]}</option>`
}seherS.innerHTML=data
}