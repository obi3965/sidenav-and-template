
//get the modal element
var modal = document.getElementById('simpleModal');
//get open modal button
var modalBtn = document.querySelector('.register');
//get close button
var closeBtn = document.querySelector('.closeBtn');

//listen for click
    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    function openModal(){
     modal.style.display = 'block';
    }


    function closeModal(){
     modal.style.display = 'none';
    }



//change the text color countinusly

function changeColor() {
      var textColor = document.querySelector(".logo-link");

      if(textColor.style.color == "black")
      textColor.style.color = "purple";
      else if(textColor.style.color == "purple")
      textColor.style.color = "deeppink";
      else textColor.style.color = "purple";

  }

 window.setInterval(changeColor,1000);



 //we can store them into the variable

 let pageTitle_1 = "obaidullah obi";
 let pageTitle_2 = "portfolio page"
 let page = document.getElementById("title").innerHTML = pageTitle_1 + '<br> ' + pageTitle_2;



