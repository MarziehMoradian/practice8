let phonePattern=/09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/i;
let emailPattern=/[a-zA-Z0-9.-]+@[a-z-]+\.com/;
let phone=document.getElementById("phone");
let email=document.getElementById("email");
let sub=document.getElementById("submit");
let nu=document.getElementById("null");
let fname=document.getElementById("firstName");
let lname=document.getElementById("lastName");
let subject=document.getElementById("subject");

function foo() {
    if( email.value==="" || phone.value==="" || fname.value==="" || lname.value===""||subject.value==="")  {
        nu.innerHTML="لطفا فیلد های خالی را پر کنید";
        sub.disabled=true;
    }else{
        sub.disabled=false;
        
    }
    
}

function validationEmail() {
        if (email.value.match(emailPattern)){
            document.getElementById("errorEmail").innerHTML="";
        }else{ 
                sub.disabled=true;
                nu.innerHTML="";
                document.getElementById("errorEmail").innerHTML="!لطفا فرمت ایمیل به درستی وارد کنید";
            }
            
    
}

phone.onkeyup=function validationPhone() {
    if (phone.value.match(phonePattern)){
        document.getElementById("errorPhone").innerHTML="";
    }else{
        sub.disabled=true;
        nu.innerHTML="";
        document.getElementById("errorPhone").innerHTML="!لطفا شماره تماس را به درستی وارد کنید";
    }
}
// setInterval(validationEmail,1000)

// myPromise=new Promise((myResolve,myReject)=>{
    //     if (email.value.match(emailPattern) && email.value===" "){
        //                     myResolve (document.getElementById("errorEmail").innerHTML="");
        //                 }else{
            //                     myReject(document.getElementById("errorEmail").innerHTML="لطفا ایمیل خود را صحیح وارد کنید");
            //                 }
            // });
            // myPromise.then(
                //     (res)=>console.log(res)
                //     ).catch((err)=>console.log(err))
                