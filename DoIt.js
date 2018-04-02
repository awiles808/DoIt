
$(function() {                                     // Getting the Document ready


    $("#listForm").on("submit", function(e){    //Grabbing the listForm(id=form).//Creating eventLister(.on)
        e.preventDefault();                     //Preventing
            console.log("Button is pushed");

        let inputValue = $("#inputbox").val();

    $('ol').append('<li>'+ inputValue + '</li>');

    $('#inputbox').val('');



    });



});





//we are grabbing the listForm, we made a event listenr to wait
// for a click
// using prevent default it is stopping it from refreshing.
// made a new variabile that os the text is that typed
// taking the text and making a list



//const form = document.getElementById("ToDoForm")


//form.addEventListener("submit", function(e) {
  //  e.preventDefault();

//  const inputValue = document.getElementById("inputbox").value;

//     let newElement = document.createElement("p");

//     newElement.innerHTML = inputValue;

// document.body.appendChild(newElement);

// document.getElementById("inputbox").value = "";


