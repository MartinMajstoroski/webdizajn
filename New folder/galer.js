function myFunction() {
    var person = prompt("Please enter your name", " ");
    if (person != null) {
      newFunction() = person ;
    }
  }

  const demoId = document.getElementById(person);
 
      var titles = [];
      var titleInput = document.getElementById("title");
      var imeInput = document.getElementById("ime");
      var messageBox = document.getElementById("display");
      function Allow()
      {
      if (!user.title.value.match(/[a-zA-Z]$/) && user.title.value !="")
      {
      user.title.value="";
      
      alert("Please Enter only alphabets");
      }
      window.location.reload()
      }
      function insert () {
        var k="Ime: ";
      titles.push(k + titleInput.value);
      titles.push(imeInput.value);
      clearAndShow();
      }
      function clearAndShow ()
      {
      titleInput.value = "";
      imeInput.value = "";
      messageBox.innerHTML = "";
      messageBox.innerHTML += titles.join("<br/> ") + "<br/>";
      }
    