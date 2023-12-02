const fs=require('fs');



function enviaremail(){
    const content=document.querySelector('#campo');
    var emailtxt=content.value
    fs.writeFile('inf.txt', emailtxt, err=>{
        if(err){
            console.error(err);
            return;
        }
    });
}
