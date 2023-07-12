var amount_per= 0;
var t_amount=0;
var t_persons=0
const total_amount = document.getElementById("total-amount");
const no_persons = document.getElementById("no-persons");
function takeamount(val){
    //console.log(val)
     t_amount = val
     console.log(t_amount)
}

function totalpersons(val){
    //console.log(val)
     t_persons=val
     console.log(t_persons)
}
const content = document.getElementById("per-amount")
const split=document.getElementById("split")
split.addEventListener("click",(e) => {
    amount_per = t_amount/t_persons
    console.log(amount_per)
    document.getElementById("per-amount").style.visibility='visible';
    function display(num){
        const digits=num.toString().split('');
        content.textContent="Rs. "
        digits.forEach((digit,index) =>{
            setTimeout(()=>{
            content.textContent+=digit;
            },index * 300)
        })
        setTimeout(()=>{
            content.textContent+=" /-" 
        },digits.length*300)
    }
    display(amount_per) 
})


