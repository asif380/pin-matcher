//empty value
document.querySelector('#c').addEventListener('click',()=>{
    document.querySelector('#inptext').value = ''; 
})
//empty text
document.querySelector('#rmv').addEventListener('click',()=>{
let inval=document.querySelector('#inptext').value;
let remove = inval.slice(0,inval.length - 1);
document.querySelector('#inptext').value = remove;
})
//display none
    document.querySelector('#yes').style.display = 'none';
//display block
    document.querySelector('#no').style.display = 'none';
document.querySelector('#generate-btn').addEventListener('click',()=>{
    let res = Math.floor(1000 + Math.random()*9000);
    document.querySelector('#input-pin').value =res;
})
// input
function btnkey(id){
    let key = id;
    let preval = document.querySelector('#inptext').value
    document.querySelector('#inptext').value = preval + key;
}
//submit
document.querySelector('#sub-btn').addEventListener('click',()=>{
    let inputpin = document.querySelector('#input-pin')
    let inptext = document.querySelector('#inptext')
    if(inputpin.value === inptext.value){
        document.querySelector('#yes').style.display = 'block'
    }else{
        document.querySelector('#no').style.display = 'block'

    }
    let test = document.querySelector('#left').innerHTML
    document.querySelector('#left').innerHTML= test - 1;
    if(test == '0'){ 
        // document.querySelector('#left').innerHTML= test - 1;
        alert('please reload the page');
        document.querySelector('#left').innerHTML = 'No'
    }
}
)

