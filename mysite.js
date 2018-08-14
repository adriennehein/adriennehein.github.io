function initMap() {
  // The location of Uluru
  var sandiego = {lat: 32.7456, lng: -117.1294};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: sandiego});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: sandiego, map: map});
}

$(".open").on("click", function(e){
  $(".modal-overlay, .modal, .modal-content").addClass("active");
})

$(".close").on("click", function() {
  $(".modal-content, .modal, .modal-overlay").removeClass("active");
})


var arcGen = d3.arc();
var data = arcGen({
  startAngle: 1.5 * Math.PI,
  endAngle: 0.5 * Math.PI,
  innerRadius: 0,
  outerRadius: 400
});

 d3.select("g").append("path").attr("width", 900).attr("height", 500).attr("fill", "teal").attr('d', data);

 const container = document.createElement('div');

 const section = document.getElementById('semicircle');

 section.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.punkapi.com/v2/beers/', true);
request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(beer => {
      console.log(beer.name);
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = beer.name;

      const p = document.createElement('p');
      p.textContent = beer.tagline;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);

    })
  } else {
    console.log("error");
  }
};

request.send();

//
// var modal = (function(){
//   var method = {},
//       $overlay,
//       $modal,
//       $content,
//       $close;
//
//   method.center = function () {
//     var top, left;
//
//     top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
//     left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;
//
//     $modal.css({
//       top:top + $(window).scrollTop(),
//       left:left + $(window).scrollLeft()
//     });
//   };
//   method.open = function (settings) {
//     $content.empty().append(settings.content);
//
//     $modal.css({
//       width: settings.width || 'auto',
//       height: settings.height || 'auto'
//     });
//
//     method.center();
//     $(window).bind('resize.modal', method.center);
//
//     $modal.show();
//     $overlay.show();
//   };
//   method.close = function () {
//     $modal.hide();
//     $overlay.hide();
//     $content.empty();
//     $(window).unbind('resize.modal');
//
//   };
//
//   return method;
// }());
//
// $overlay = $('<div id="overlay"></div>');
// $modal = $('<div id="modal"></div>');
// $content = $('<div id="content"></div>');
// $close = $('<a href="#" id="close"></a>');
//
// $modal.hide();
// $overlay.hide();
// $modal.append($content, $close);
//
// $(document).ready(function(){
//   $('#info').append($overlay, $modal);
//   $('#info').click(function(){
//     modal.open({content: $("<p>Howdy</p>"), width: "500px", height: "200px"});
//   })
//
//   $close.click(function(e){
//     e.preventDefault();
//     method.close();
//   });
//
// });
