$(function(){
    console.log("A")
    $(".eat").on("click",function(event){
      console.log("b")
  
      var id = $(this).data("id");
      var devoured = {devoured:true}
      $.ajax("/api/burgers/"+id, {
        type:"PUT",
        data: devoured
      }).then(function(){
        location.reload();
      })
    })
    $(".create-form").on("submit",function(event){
      event.preventDefault();
      console.log("a")
      var newBurger = {
        name:$("#burger").val().trim()
      }
      $.ajax("/api/burgers",{
        type:"POST",
        data:newBurger
      }).then(function(){
        location.reload();
      })
    })
  })