
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
window.onload = function() {
    tabContent = document.querySelectorAll('.tabgroup');
    tabLinks = document.querySelectorAll('.tab');

    tabContent[0].style.display = "flex";
    tabLinks[0].className = "tab active";
};

function openTab(e, tab) {
  var i, tabContent, tabLinks;

  tabContent = document.querySelectorAll('.tabgroup');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";

  }

  tabLinks = document.querySelectorAll('.tab');
  for (i=0; i<tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(tab).style.display = "flex";
  e.currentTarget.className += " active";

}
