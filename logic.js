
var score = 0;
if(80 <= score) { 
  console.log("good");
} else if(60 <= score) {
  console.log("soso...");
} else {
  console.log("bad");
}

// switch
var signal = "red";
switch (signal) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("slow down.");
    break;
  case "green":
    console.log("go");
    break;
}

(function(name) {
 console.log("hello " + name);
 })("Tom");
