//Uygulama Fonksiyonlar

//1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yazınız.

// function kelimeYazdir(kelime, adet)
// {
//     for(let i=1; i<=adet; i++)
//     {
//         console.log(kelime);
//     }
// }

// kelimeYazdir("Yusuf", 15)

//2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

// function alanCevreHesapla(kisa, uzun)
// {
//     let alan = kisa*uzun;
//     let cevre = (kisa + uzun) * 2;

//     return `alan: ${alan}, çevre: ${cevre}`
// }

// console.log(alanCevreHesapla(13,27));

//3- Yazı tura oyununu fonksiyon olarak yazınız.

// function yaziTuraAt()
// {
//     let random = Math.random(); //0-1

//     if(random < 0.5)
//     {
//         console.log("yazı");
//     }else{
//         console.log("tura")
//     }

//     console.log(random);
// }

// yaziTuraAt();

//4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

// function tamBolenleriBul(sayi)
// {
//     let sayilar = [];
//     for(let i=1; i<=sayi; i++)
//     {
//         if(sayi % i == 0)
//         {
//            sayilar.push(i); 
//         }   
//     }
//     return sayilar;

// }

// console.log(tamBolenleriBul(24));

//5-Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function toplam()
{   
    let sonuc = 0;    

    for(let i=0; i<arguments.length; i++)
    {
       sonuc += arguments[i];
    }

    return sonuc;
    
}

console.log(toplam(10,20,30,40));

console.log(toplam(10,20,30,40,50,60,70));
