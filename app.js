/* Rahman ve Rahim Olan Allahın ismi ile 
    Kralımız Olan Allahın Selamı Desteği Üzerimize Olsun 
    
    Yeni Barkod Kodu alan arkadaşlar bu uygulama size verilen 8 haneli kod ile binlerce ürününüzü ototmatik güncelleme işlemi yapacağız
*/
const request = require("request"); // WEB SERVİS KÜTÜPHANESİ 
const cheerio       = require('cheerio'); // BACKEND JQUERY GİBİ ÇALIŞAN KÜTÜPHANE 
const fs = require("fs")
let kod = 868200510000;

let ekle = 1000
let saniye = 1;

for(let x =0; x < ekle; x++  ){
       
        setTimeout(()=>{

            console.log(x)


const urlogren = new Promise((resolve,reject)=>{

    request.post({
        url:"http://gs1.tobb.org.tr/HesapGtin13.php",
        form:{Gtin13Numara:kod + x}
    
    },(e,d,r)=>{
    
       let gurl  = d.caseless.dict.location
        
        resolve(gurl)
    })
    
});


urlogren.then((url)=>{

       // console.log(url)


        request.get({
            url:"http://gs1.tobb.org.tr/"+url,
        },(e,r,body)=>{
        
                //console.log(body)
                let $ = cheerio.load(body);
        
        
                let arr = []
                let barkod = $('form[action="HesapGtin13.php"]').find(".col-sm-3 > input ").each((i,d)=>{
                    arr.push($(d).val())
                    
                });
                let barkods = arr[1] + "\n ";
                console.log(barkods)
                    fs.appendFile("barkod.txt",barkods,(e)=>{


                    })
                })


});


        },x*saniye * 1000)

}



