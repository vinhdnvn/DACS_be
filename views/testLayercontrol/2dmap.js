 // Searching
 L.Control.geocoder().addTo(map);
 // Current Location
 L.control.locate().addTo(map);

function button(label, container)
{
                var btn = L.DomUtil.create('button', '', container);
                btn.setAttribute('type', 'bu    tton');
                btn.innerHTML = label;
                return btn;
}

var control = L.Routing.control(
{
  router: L.routing.osrmv1(
   {
  serviceUrl: LRM.osmServiceUrl
}),
routeWhileDragging: true,
plan: new (L.Routing.Plan.extend({
   createGeocoders: function() {
       var container = L.Routing.Plan.prototype.createGeocoders.call(this),
           reverseButton = button('&#8593;&#8595;', container);

       L.DomEvent.on(reverseButton, 'click', function() {
           var waypoints = this.getWaypoints();
           this.setWaypoints(waypoints.reverse());
       }, this);

       return container;
   }
}))([
  
], {
   geocoder: L.Control.Geocoder.nominatim(),
   routeWhileDragging: true
})
}).on('routingerror', function(e) {
try {
   map.getCenter();
} catch (e) {
} handleError(e);
})
.addTo(map);

map.on('click', function(e) {
var marker
var container = L.DomUtil.create('div'),
   startBtn = button('Start', container),
   destBtn = button('Go', container);
   resBtn=button('Reset', container);
   startBtn.className = "startBtn";
   destBtn.className = "destBtn";
   resBtn.className = "resBtn";

L.DomEvent.on(startBtn, 'click', function() {
   control.spliceWaypoints(0, 1, e.latlng);
   map.closePopup();
});

L.DomEvent.on(destBtn, 'click', function() {
   control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
   map.closePopup();
});
L.DomEvent.on(resBtn,'click',function(){
 map.closePopup();
 
 location.reload();
})

L.popup()
   .setContent(container)
   .setLatLng(e.latlng)
   .openOn(map);
});

// searching JSON 
var data = VKU;
var featuresLayer = new L.GeoJSON(data, {
         style: function(feature) {
             return {color: feature.properties.color };
         },
         onEachFeature: function(feature, marker) {
             marker.bindPopup('<h4 style="color:'+feature.properties.color+'">'+ feature.properties.name +'</h4>');
         }
     });





 var searchControl = new L.Control.Search({
     layer: featuresLayer,
     propertyName: 'name',
     marker: false,
 
 });

 searchControl.on('search:locationfound', function(e) {
     
 
     if(e.layer._popup)
         e.layer.openPopup();

 }).on('search:collapsed', function(e) {

     featuresLayer.eachLayer(function(layer) {	
         featuresLayer.resetStyle(layer);
     });	
 });
 
 map.addControl( searchControl ); 


