
// Flex panel gallery
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


// Skill tabs

let tabContent = document.querySelectorAll('.tabgroup');
let tabLinks = document.querySelectorAll('.tab');

// Set first tab as active
window.onload = function() {
    tabContent[0].style.display = "flex";
    tabLinks[0].className = "tab active";
};

function openTab(e, tab) {
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  for (i=0; i<tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(tab).style.display = "flex";
  e.currentTarget.className += " active";
}


// Google map API
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.7157, lng: -117.1611},
    zoom: 13,
    disableDefaultUI: true,
    draggable: false
});
}
