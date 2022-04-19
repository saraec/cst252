
///
var url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
// var apiKey = "7e57c9440bb09a28a4281dc3c389b983";

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
       // Insert the output in the output div
       $("#output").html(data);
   });
    }

      // $("#output").html("<h3>" + thisData.title);
      // $("#output").append("<img src=" + fullUrl + ">");
