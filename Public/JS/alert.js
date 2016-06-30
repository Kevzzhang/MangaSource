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

var opts = {
"closeButton": true,
"debug": false,
"positionClass": "toast-bottom-left",
"onclick": null,
"showDuration": "300",
"hideDuration": "1000",
"timeOut": "5000",
"extendedTimeOut": "1000",
"showEasing": "swing",
"hideEasing": "linear",
"showMethod": "fadeIn",
"hideMethod": "fadeOut"
// "closeButton": true,
// "debug": false,
// "positionClass": "toast-bottom-right",
// "onclick": null,
// "showDuration": "300",
// "hideDuration": "1000",
// "timeOut": "5000",
// "extendedTimeOut": "1000",
// "showEasing": "swing",
// "hideEasing": "linear",
// "showMethod": "fadeIn",
// "hideMethod": "fadeOut"
};