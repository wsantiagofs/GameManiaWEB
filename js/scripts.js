var btn_1 = document.querySelector(".drop_desktop_icon button")
var btn_2 = document.querySelector(".drop_desktop button")
var btn_3 = document.querySelector(".drop_mobile button")

btn_1.addEventListener("click", function(){
    this.classList.toggle("active");
})

btn_2.addEventListener("click", function(){
    this.classList.toggle("active");
})

btn_3.addEventListener("click", function(){
    this.classList.toggle("active");
})

// Slider do produto
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
