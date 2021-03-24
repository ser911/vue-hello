const app = new Vue(
{
  el: "#target",
  data:{
  message: "Hi there!",
   name: "Sergio",
   surname: "Marretta",
   age: "30",
   colorChange: "red"

 },

 methods: {
  colorClass: function(){
  if (this.colorChange == "red") {
    this.colorChange = "blue";
  } else {
     this.colorChange ="red"
  }
}

 }

}
);
