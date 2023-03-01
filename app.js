//image slides
function showImg(image) {
  var expandImg = document.getElementById("expandedImg");
  var imgTxt = document.getElementById("imgtxt");

  expandImg.src = image.src;
  imgTxt.innerHTML = image.alt;
  expandImg.parentElement.style.display = "block";
}

//nav bar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
