

  $(function () {

    // Display current date in the header
    var today = dayjs();
    $('#currentDay').text(today.format("MMM D, YYYY"));
  
    // Load any saved events from local storage
    $(".time-block").each(function() {
      var id = $(this).attr("id");
      var savedEvent = localStorage.getItem(id);
  
      if (savedEvent !== null) {
        $(this).children(".description").val(savedEvent);
      }
    });
  
    // Color code time blocks based on current time
    function colorCode() {
      var currentHour = dayjs().hour();
    
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
    
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    colorCode();
  
    // Save button event listener
    $(".saveBtn").click(function() {
      var timeBlock = $(this).parent();
      var hour = timeBlock.attr("id");
      var eventText = timeBlock.children(".description").val();
  
      localStorage.setItem(hour, eventText);
    });
  });
  
  