//Scopes

//global scope

var isim = "Atakan";

function yazdir(){ //function scope
    var isim = "Enes";
    var yas = 22;
    console.log(yas);
    console.log(isim);
}

//const => sabit tanımlama 
if(true) //global scope  (let,const kullanılırsa kendi scope unu oluşturur. Global scope olmaktan çıkar.)
{
    var isim = "Fatih";    
}


yazdir();
console.log(isim);
