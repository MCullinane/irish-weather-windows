let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

$(document).ready(function(){

  $('input[type=radio][name=duration]').change(function() {
    swap_images_for_duration(this.value);
  });

});

// Select a new set of images based on the weather-window duration
function swap_images_for_duration(dur){

  dur_folder_name = "images/" + dur + "_hrs/";
  const Hs_vals = ["1.5", "2", "2.5"];
  const labelHs = ["1_5", "2", "2_5"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  // Change the header to show the new duration
  //$('#1_5_Jan').attr('src',"images/test.jpg");
  new_label = "Weather Window : Wind speed < 10.0 m/s, Duration > " + dur + " hours";
  $('#duration_label').text(new_label);

  // Change the images to be for the new duration
  for (let iHs = 0; iHs < Hs_vals.length; iHs ++){
    Hs_folder_name = "Hs_" + Hs_vals[iHs] + "_wind_10.0_hrs_" + dur + "/";
    folder_name = dur_folder_name + Hs_folder_name;

    for (let iMonth = 0; iMonth< months.length; iMonth ++){
      id = '#' + labelHs[iHs] + "_" + months[iMonth];
      filename = folder_name + "WeatherWindow__Hs_" + Hs_vals[iHs] + "_wind_10.0_hrs_" + dur + "_" + months[iMonth] + ".png";
      console.log(filename);
      $(id).attr('src',filename);
    }
  }
  

	

}