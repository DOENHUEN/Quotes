$(document).ready(function(){

  let quote = "";
  let result = $("#result");
  let refreshButton = $("#refreshButton")

  $.ajax({
    url : "https://thatsthespir.it/api",
    dataType : "json",
    timeout: 5000,
    success : function(data) {
      // storeQuote(quote,quote,data);

      quote = data["quote"];
      console.log(quote);
      result.html(quote);
    },
  });


  // source: http://api.jquery.com/ajaxError/#callback
  $( document ).ajaxError(function() {
    console.log('Er gaat iets fout');
    result.html("<img src='img.jpg'></img>");
  });

  refreshButton.on("click", function () {
    window.location.reload();
  })

  // function storeQuote (nameVariable, idAPI, data){
  //   nameVariable = data["idAPI"];
  //   console.log(nameVariable);
  // }

});
