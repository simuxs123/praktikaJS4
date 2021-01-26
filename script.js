const form=document.querySelector("form");
const vais=document.querySelector("#vaisius")
const kain=document.querySelector("#kaina")
const kiek=document.querySelector("#kiekis")
const div=document.querySelector("div")
form.addEventListener("submit", function(e){
    e.preventDefault();
    skaiciavimas(vais.value,kain.value, kiek.value);
    vais.value="";
    kain.value="";
    kiek.value="";
})
function skaiciavimas(vaisius, kaina,kiekis){
    let isViso=parseFloat(kaina)*kiekis;
    let tekstas=`Produktas:${vaisius}, kaina:${isViso}, kiekis:${kiekis}`;
    div.append(tekstas);
}


const arr=["jonukas","maryte","edita","gretute"]
arr.forEach(function(el,i){
    let p=document.createElement("P");
    p.innerText=el;
    document.body.append(p);
    if(i%2==0)
        p.classList.add("even");
})