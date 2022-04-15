/**
 * Author:    Sara Christensen
 * Created:   4.15.2022
 **/
 function birthDate(){
   // var year=document.getElementById("year").value;
   var month=document.getElementById("month").value;
   var day=document.getElementById("day").value;
   var starArray=["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
   // var numbers=[0,1,2,3,4,5,6,7,8,9,10,11];
   var url;
   console.log(url)
   // var element=document.getElementById("horoscope");
   var star=[];
   if (year===""||month===""||day===""){
     alert("The information is incomplete!");
   }
   else{
   // for (var i in numbers){
   // if(numbers[i]===year%12){
   //   animal=animals[i];
   //   degree=rotation[i];
   //   }
   // }
   if( (month ==3 && 20<day < 22)||(month==4 && day<20) ){
   star= starArray[0];
     url"../img/aries.png";
   }
   else if ( (month ==4 && 19 < day )||(month==5 && day<20) ){
   star= starArray[1];
     url="../img/taurus.png";
   }
   else if ( (month ==5 && 20 < day )||(month==6 && day<21) ){
   star= starArray[2];
     url="../img/gemini.png";
   }
   else if ( (month ==6 && 20 < day )||(month==7 && day<23) ){
   star= starArray[3];
     url="../img/cancer.png";
   }
   else if ( (month ==7 && 22 < day )||(month==8 && day<23) ){
   star= starArray[4];
     url="../img/leo.png";
   }
   else if ( (month ==8 && 22 < day )||(month==9 && day<23) ){
   star= starArray[5];
     url="../img/virgo.png";
   }
   else if ( (month ==9 && 22 < day )||(month==10 && day<23) ){
   star= starArray[6];
     url="../img/libra.png";
   }
   else if ( (month ==10 && 22 < day )||(month==11 && day<22) ){
   star= starArray[7];
     url="../img/scorpio.png";
   }
   else if ( (month ==11 && 21 < day )||(month==12 && day<22) ){
   star= starArray[8];
     url="../img/sagittarius.png";
   }
   else if ( (month ==12 && 21 < day )||(month==1 && day<20) ){
   star= starArray[9];
     url="../img/capricorn.png";
   }
   else if ( (month ==1 && 19 < day )||(month==2 && day<19) ){
   star= starArray[10];
     url="../img/aquarius.png";
   }
   else if ( (month ==2 && 18 < day )||(month==3 && day<21) ){
   star= starArray[11];
     url="../img/pisces.png";
   }

   document.getElementById("display").innerHTML= star;
   document.getElementById("zodiac").src=url;
 }
 }

// button click event
document.getElementById("button").onclick = function() {
  birthDate()
  console.log(birthDate())
};
