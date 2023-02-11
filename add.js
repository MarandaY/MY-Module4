console.log ("Help")

//code for the introduction on the page, only a specific part is displayed.

let text = "This is a website to play around with JavaScript. Welcome! I've included a few features to test out various things.";
let part = text.slice(50);
document.getElementById("intro").innerHTML = part; 

// This is the code for the message based on the age you input.

function schooling() {
    let age = document.getElementById("age").value;
    let level;
    switch(age) {
        
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
            level = "in Elementary School.";
        break;

        case "11":
        case "12":
        case "13":
            level = "in Middle School.";
        break;

        case "14":
        case "15":
        case "16":
        case "17":
        case "18":
            level = "in High School.";
        break;
        default:
            level = "out of primary school.";
    }
    
    document.getElementById("response").innerHTML = `You would be ${level}`;
  }
  
  //code for the drawing fact, including turning a number into a string.
  
  x = 1 + 3;
  document.getElementById("fact").innerHTML = "The drawing I included to fill space took me " +
  x.toString() + " hours to make.";

//code for the sendoff message at the bottom, based on the current time.

  const hour = new Date().getHours(); 
  let greeting;
  if (hour < 17) {
    greeting = "Have a lovely rest of your day!";
  } else {
    greeting = "Have a wonderful night!";
  }

  document.getElementById("sendoff").innerHTML = greeting;