// NAVBAR

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".netflix-navbar").css("background" , "#0C0C0C");
        }
  
        else{
            $(".netflix-navbar").css("background" , "transparent");  	
        }
    });

  })

// CARD

function position(id){
  var card = document.getElementsByClassName('card')[id];
  console.log(id)
}

// DROPDOWN TOGGLE GENRES

var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle-genres'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})