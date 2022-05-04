

 function birthDate(){
   var month=document.getElementById("month").value;
   var day=document.getElementById("day").value;
   var starArray=["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
   var imagesArray=["img/aries.png", "img/Taurus.png", "img/gemini.png", "img/cancer.png", "img/Leo.png", "img/virgo.png", "img/libra.png","img/scorpio.png","img/Sagittarius.png","img/Capricorn.png","img/aquarius.png","img/pisces.png"];
   var url;
   var sign=[];
   var image =[];
   if (month===""||day===""){
     alert("Enter the month and date to get your results!");
   }
   else{
   if( (month ==3 && day >= 21)||(month==4 && day<=19) ){
   sign= starArray[0];
   image=imagesArray[0];
   }
   else if ( (month ==4 && day >= 20 )||(month==5 && day<=20) ){
   sign= starArray[1];
   image=imagesArray[1];
   }
   else if ( (month ==5 && day >= 21 )||(month==6 && day<=20) ){
   sign= starArray[2];
     image=imagesArray[2];
   }
   else if ( (month ==6 && day >= 21 )||(month==7 && day<=22) ){
   sign= starArray[3];
     image=imagesArray[3];
   }
   else if ( (month ==7 && day >= 23 )||(month==8 && day<=22) ){
   sign= starArray[4];
     image=imagesArray[4];
   }
   else if ( (month ==8 && day >= 23 )||(month==9 && day<=22) ){
   sign= starArray[5];
     image=imagesArray[5];
   }
   else if ( (month ==9 && day >= 23 )||(month==10 && day<=22) ){
   sign= starArray[6];
     image= imagesArray[6];
   }
   else if ( (month ==10 && day >= 23 )||(month==11 && day<=21) ){
   sign= starArray[7];
     image=imagesArray[7];
   }
   else if ( (month ==11 && day >= 22 )||(month==12 && day<=21) ){
   sign= starArray[8];
     image=imagesArray[8];
   }
   else if ( (month ==12 && day >= 22 )||(month==1 && day<=19) ){
   sign= starArray[9];
     image=imagesArray[9];
   }
   else if ( (month ==1 && day >= 20 )||(month==2 && day<=18) ){
   sign= starArray[10];
     image=imagesArray[10];
   }
   else if ( (month ==2 && day >= 19 )||(month==3 && day<=20) ){
   sign= starArray[11];
     image=imagesArray[11];
   }

 }

     $("#display").html(sign);
    $("#zodiac").attr("src", image);

         // horoscope variable
         var url = "https://ohmanda.com/api/horoscope/" + sign.toLowerCase();
         console.log(url);
         // use a jQuery AJAX call to fetch output from the numbers API
        function getAjax() {
            // Using the core $.ajax() method
            $.ajax({
            // The URL for the request
            url: url,
            // The data to send (will be converted to a query string)
             data: {
              sign: sign,
            },
            // Whether this is a POST or GET request
            type: "GET",
            // The type of data we expect back
            // dataType : "json",
            })
        // If the request succeeds
        .done(function( data ) {
        //alert("Success!");
        var horoscope = data.horoscope;
        console.log(data);
        /*  fullUrl = thisData.url; */
        // Insert the output in the output div
        /*
        $("#output").html("<h3>" + thisData.title); */
        $("#output").html("<p>" + horoscope + "</p>");
        })
        }

 }

 // button click event
  $("#button").click(function() {
   birthDate();
   console.log(birthDate());
   getAjax();
   console.log(getAjax());
 });
