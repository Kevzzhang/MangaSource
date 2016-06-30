// showAlert

$('#submit').click(function(event) {
   event.preventDefault();
 
   $.ajax(this.href, {
      success: function(data) {
      //    $('#message').html($(data).find('#main *'));
      
      //    $('#notification-bar').text('The page has been successfully loaded');
         $('#message').text('<strong>Success!</strong> New Book Inserted!');
         $(".alert[hidden='hidden']")[0].attr("hidden", "");
      },
      error: function() {
      //    $('#notification-bar').text('An error occurred');
         $('#message').text('<strong>Error!</strong>');
      }
   });
});