//Fonksiyonlar


function selamlama(mesaj) {
    console.log(mesaj);
}

// selamlama("selam");
// selamlama("naber");
// selamlama("merhaba");
// selamlama("ne var ne yok");


// function yasHesapla(dogumYili)
// {
//     let suankiYil = new Date().getFullYear();
//     console.log(suankiYil - dogumYili);
// }

// yasHesapla(1992);
// yasHesapla(1967);
// yasHesapla(1985);
// yasHesapla(1897);


function emekliligeKacYilKaldi(dogumYili, isim)
{
    let suankiYil = new Date().getFullYear();
    let yas = suankiYil - dogumYili;
    let kalan_sene= (65 - yas);

    if(kalan_sene > 0)
    {
        console.log(`${isim} emekli olmanıza ${kalan_sene} yıl kaldı`)
    }else{
       console.log("zaten emekli oldunuz"); 
    }  
}


emekliligeKacYilKaldi(1952,"Atakan");