 let meter = document.getElementById('meter');
 let kilometer = document.getElementById('kilometer');
 let centimeter = document.getElementById('centimeter');
// let input = document.getElementById('input');


function meterToOthers(val){
    kilometer.value = val/1000;
    centimeter.value=val/0.01;
}

function kilometerToOthers(val){
    centimeter.value = val*100000;
    meter.value=val*1000;
}

function centimeterToOthers(val){
    kilometer.value = val/100000;
    meter.value=val/100;
}

function convertToOthers(convertFrom,value){
    switch(convertFrom){
       case 'meter' : meterToOthers(parseFloat(value));
       break;

case 'kilometer' : kilometerToOthers(parseFloat(value));
       break;
       
       case 'centimeter' : centimeterToOthers(parseFloat(value));

       break;
       
    }
}
//     meter.addEventListener('input', function(){
//         let m = this.value;
//         let km= m/12;
//         // if(!Number.isInteger(f)){
//         //     f=f.toFixed(2);
//         // }
//         kilometer.value= km;
    
// });
