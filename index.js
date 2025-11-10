// //document.getElementById("numb").innerText= 5

let count = 0;

// let text ="this is a house"

// // document.getElementById('numb').innerText=count

// function Adding(){
//    console.log(text);
// }

// function Dog(){
//     console.log("Alan is the name of the dog");
// } 

let countL = document.getElementById("numb") 
let welCome_l= document.getElementById('Welcome-el')
let rTx = 0;

function Adding(){
    count = count + 1 ;
    countL.innerText = count
    
}


function SaveN(){
    if (count>1){
    welCome_l.textContent += count + " - "
    countL.textContent=rTx;
    count=0;}
    else{
        alert('NO NUmber counted')
    }
} 

function Rtl() {
    welCome_l.textContent='Previous Entry: ';
    countL.textContent=rTx;
    count=0;
}



