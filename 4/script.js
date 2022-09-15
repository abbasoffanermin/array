let marka =[
    "bmw",
    "audi",
    "hyundai",
    "Jaguar"
]
let model =[
    ["x2","x3","x4","x5","x6"],
    ["a5","a6","a7","a8"],
    ["accent","coupe","elantra","matrix"],
    ["xe","xf","xj","xj l"]
]
let imgs=[
    ["https://turbo.az/autos?q%5Bmake%5D%5B%5D=35","https://turbo.az/autos?q%5Bmake%5D%5B%5D=35","https://turbo.az/autos?q%5Bmake%5D%5B%5D=35"],
    ["https://turbo.az/autos?q%5Bmake%5D%5B%5D=35","https://turbo.az/autos?q%5Bmake%5D%5B%5D=35","https://turbo.az/autos?q%5Bmake%5D%5B%5D=35"],
    ["https://turbo.az/autos?q%5Bmake%5D%5B%5D=35","https://turbo.az/autos?q%5Bmake%5D%5B%5D=35","https://turbo.az/autos?q%5Bmake%5D%5B%5D=35"]
]
let text=""
let markaS =document.getElementById("marka")
let data=`<option value="" disabled selected> marka secin</option>`
for(let i=0;i<marka.length;i++){
    data+=`<option value="${i}"> ${marka[i]}</option>`
}
markaS.innerHTML=data

function sec(){
    let val=markaS.value
    let modelS =document.getElementById("model")
let data=`<option value="" disabled selected> model secin</option>`
for(let i=0;i<model[val].length;i++){
    data+=`<option value="${i}"> ${model[val][i]}</option>`
}
modelS.innerHTML=data
}


function img(){
   let imgsS=imgs.value
    let modelS =document.getElementById("model")
    let markaS =document.getElementById("marka")
    let markaV=markaS.value
    let modelV=modelS.value
    document.getElementById("text").innerHTML=`Siz ${marka[markaV]} -nin ${model[markaV][modelV]} markasını  seçdiniz. `
     document.getElementById("img").innerHTML=`<img src="${imgs[imgsS]}"/>`
}



