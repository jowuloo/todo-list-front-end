$(document).ready(function() {
  // Strike through todo when its checkbox is clicked
  $("ol").on("click", "input[type=checkbox]", function(){
    $(this).closest("li").toggleClass("completed-todo")
  })
})