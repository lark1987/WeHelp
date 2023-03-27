
let box1=document.getElementById("box1").choose
let box2=document.getElementById("box2").choose
let box3=document.getElementById("box3").choose
let box4=document.getElementById("box4").choose
let E="E"
let I="I"
let S="S"
let N="N"
let T="T"
let F="F"
let J="J"
let P="P"

function check(){
     if(box1[0].checked){document.getElementById("A1").innerHTML = E}
else if(box1[1].checked){document.getElementById("A1").innerHTML = I};
     if(box2[0].checked){document.getElementById("A2").innerHTML = S}
else if(box2[1].checked){document.getElementById("A2").innerHTML = N};
     if(box3[0].checked){document.getElementById("A3").innerHTML = T}
else if(box3[1].checked){document.getElementById("A3").innerHTML = F};
     if(box4[0].checked){document.getElementById("A4").innerHTML = J}
else if(box4[1].checked){document.getElementById("A4").innerHTML = P};
}