

///
var url = "https://xkcd.com/info.0.json";

$("#activate").click(getAjax);

// use a jQuery AJAX call to fetch output from the numbers API
function getAjax() {
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request
      url: url,
      // The data to send (will be converted to a query string)
     //   data: {
     //     api_key: apiKey
     // },
      // Whether this is a POST or GET request
      type: "GET",
  })

  .done(function(data) {
       console.log(data);
    // define variables for object values
       var title = data.title;
       var img = data.img;
       var alt = data.alt;
       // Insert the output in the output div
       $("#output").html("<h2>" + title + "</h2>");
       $("#output").append("<img src=" + img + ">");
        $("#output").append("<p>" + alt + "</p>");
   });
    }
