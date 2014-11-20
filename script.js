// load jquery always
$(function() {



var tortoise, hare, km;

function Animal(name, speed, focus) {
  this.name = name;
  this.speed = speed;
  this.focus = focus;
  this.position = 0;
  this.run = function() {
    if (Math.random() * 10 < this.focus) {
      this.position = this.position + this.speed;
    }
    return this.position;
  }
}

// name, speed, focus
tortoise = new Animal("PaleGreen", 1, 10);
hare = new Animal("Pink", 4, 2);

km = 20;
i = 0;

while (hare.position < km && tortoise.position < km) {
  hare.run();
  tortoise.run();
  i++;
  //jquery update existing status line, two race div spans, and the final result message

$("body").append('<p>'+i +'</p>');


  //document.write("<div class=\"progress-bar " + hare.name + "\"><span style=\"width:" + (hare.position * 5) +  "%\"></span></div>" + "<div class=\"progress-bar " + tortoise.name + "\"><span style=\"width:" + (tortoise.position * 5) +  "%\"></span></div>");

   if ((hare.position == km) || (tortoise.position == km)) {
     var message;
     if (hare.position == km) {
       message = hare.name;
     } else {
       message = tortoise.name;
      }

//jquery-ify the results
  $("#race>span").html(function() {
    return message;
  });
 


});

};
});
