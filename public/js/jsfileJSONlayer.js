var controlLayers = L.control.layers().addTo(map);
$.getJSON("/public/js/floor1.json", function (geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function (feature) {
      var fill = "gray";
      if (feature.properties.room === "class") {
        fill = "red";
      }
      if (feature.properties.room === "wc") {
        fill = "#009999";
      }
      if (feature.properties.room === "costume") {
        fill = "#999933";
      }
      if (feature.properties.room === "teacher") {
        fill = "#FF6600";
      }
      if (feature.properties.room === "door") {
        fill = "#0033FF";
      }
      if (feature.properties.room === "ladder") {
        fill = "#00CC00";
      }
      if (feature.properties.room === "equipment") {
        fill = "#006699";
      }

      return {
        fillColor: fill,
        weight: 2,
        color: "#666",
        fillOpacity: 1,
      };
    },
    onEachFeature: function (feature, layer) {
      if (feature.properties.room === "class") {
        layer.bindPopup(
          "<h1> Phòng dạy học sinh viên  tầng 1 </h1>" +
            '<img style="width :100%; height: 100%;"  src="./img/student.jpg"></img>'
        );
      }
      if (feature.properties.room === "wc") {
        layer.bindPopup(
          "<h1> Phòng vệ sinh  </h1> <p> Phòng vệ sinh tầng 1</p>" +
            ' <img style="width :100%; height: 100%;"  src="./img/wc.jpg"></img>'
        );
      }
      if (feature.properties.room === "costume") {
        layer.bindPopup(
          "<h1> Phòng trang phục tầng 1 </h1> <p> Đây là phòng trang phục</p>" +
            '<img style="width :100%; height: 100%;"  src="./img/ptrangphiuc.jpg"></img>'
        );
      }
      if (feature.properties.room === "door") {
        layer.bindPopup(
          "<h1> Cửa ra vào khu A tầng 1 </h1><p> cửa ra vào</p>" +
            ' <img style="width :100%; height: 100%;"  src="./img/door.jpg"></img>'
        );
      }
      if (feature.properties.room === "equipment") {
        layer.bindPopup(
          "<h1> Phòng thiết bị  tầng 1</h1> <p> Đây là phòng thiết bị</p>" +
            '<img style="width :100%; height: 100%;"  src="./img/thietbi.jpg"></img>'
        );
      }
      if (feature.properties.room === "ladder") {
        layer.bindPopup(
          "<h1> Cầu thang tầng 1 </h1> " +
            '<img style="width :100%; height: 100%;"  src="./img/ladder.jpg"></img>'
        );
      }
      if (feature.properties.room === "teacher") {
        layer.bindPopup(
          "<h1> Phòng giảng viên A.109  </h1> " +
            '  <img style="width :100%; height: 100%;"  src="./img/teacher.jpg"></img>'
        );
      }
      if (feature.properties.room === "hop") {
        layer.bindPopup(
          "<h1> Phòng họp  tầng 1</h1> " +
            '<img style="width :100%; height: 100%;"  src="./img/hop1.jpg"></img>'
        );
      }
    },
  });

  controlLayers.addOverlay(geojsonLayer, "K.Floor 1");
});
// ===========================them layer tang moi
$.getJSON("/public/js/floor2.json", function (geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function (feature) {
      var fill = "gray";
      if (feature.properties.room === "class") {
        fill = "#00FFFF";
      }
      if (feature.properties.room === "hop") {
        fill = "#0099CC";
      }
      if (feature.properties.room === "lithuyet") {
        fill = "#993300";
      }
      if (feature.properties.room === "wc") {
        fill = "#008080";
      }

      if (feature.properties.room === "ladder") {
        fill = "#808080";
      }
      if (feature.properties.room === "equipment") {
        fill = "#FFFFCC";
      }
      return {
        fillColor: fill,
        weight: 2,
        color: "#333399",
        fillOpacity: 1,
      };
    },
    onEachFeature: function (feature, layer) {
      if (feature.properties.room === "class") {
        layer.bindPopup(
          "<h1> Phòng dạy học sinh viên  tầng 2 </h1>" +
            '<img style="width :100%; height: 100%;"  src="./img/hoc2.jpg"></img>'
        );
      }
      if (feature.properties.room === "wc") {
        layer.bindPopup(
          "<h1> Phòng vệ sinh  </h1> <p> Phòng vệ sinh tầng 2</p>" +
            ' <img style="width :100%; height: 100%;"  src="./img/wc2.jpg"></img>'
        );
      }
      if (feature.properties.room === "lithuyet") {
        layer.bindPopup(
          "<h1> Phòng học lí thuyết tầng 2 </h1>" +
            '<img style="width :100%; height: 100%;"  src="./img/lithuyet2.jpg"></img>'
        );
      }

      if (feature.properties.room === "equipment") {
        layer.bindPopup(
          "<h1> Phòng thiết bị tầng 2 </h1> <p> Đây là phòng thiết bị</p>" +
            '<img style="width :100%; height: 100%;"  src="./img/thietbi2.jpg"></img>'
        );
      }
      if (feature.properties.room === "ladder") {
        layer.bindPopup(
          "<h1> Cầu thang tầng 2 </h1> " +
            '<img style="width :100%; height: 100%;"  src="./img/ladder2.jpg"></img>'
        );
      }
      if (feature.properties.room === "hop") {
        layer.bindPopup(
          "<h1> Phòng họp tầng 2 </h1> " +
            '  <img style="width :100%; height: 100%;"  src="./img/hop2.jpg"></img>'
        );
      }
    },
  });
  controlLayers.addOverlay(geojsonLayer, "K.Floor 2");
});

// tang 3
$.getJSON("/public/js/floor3.json", function (geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function (feature) {
      var fill = "gray";
      if (feature.properties.room === "class") {
        fill = "#00AA00";
      }
      if (feature.properties.room === "wc") {
        fill = "#FF00FF";
      }
      if (feature.properties.room === "hop") {
        fill = "#660000";
      }
      if (feature.properties.room === "lithuyet") {
        fill = "#6600FF";
      }

      if (feature.properties.room === "ladder") {
        fill = "#006699";
      }
      if (feature.properties.room === "equipment") {
        fill = "#CC6600";
      }
      return {
        fillColor: fill,
        weight: 2,
        color: "#333399",
        fillOpacity: 1,
      };
    },
    onEachFeature: function (feature, layer) {
      if (feature.properties.room === "class") {
        layer.bindPopup(
          "<h1> Phòng dạy học sinh viên tầng 3  </h1>" +
            '<img style="width :100%; height: 100%;"  src="./img/hoc3.jpg"></img>'
        );
      }
      if (feature.properties.room === "wc") {
        layer.bindPopup(
          "<h1> Phòng vệ sinh  </h1> <p> Phòng vệ sinh tầng 3</p>" +
            ' <img style="width :100%; height: 100%;"  src="./img/wc3.jpg"></img>'
        );
      }
      if (feature.properties.room === "lithuyet") {
        layer.bindPopup(
          "<h1> Phòng học lí thuyết tầng 3 </h1>" +
            '<img style="width :100%; height: 100%;"  src="./img/lithuyet3.jpg"></img>'
        );
      }

      if (feature.properties.room === "equipment") {
        layer.bindPopup(
          "<h1> Phòng thiết bị tầng 3 </h1> <p> Đây là phòng thiết bị</p>" +
            '<img style="width :100%; height: 100%;"  src="./img/thietbi3.jpg"></img>'
        );
      }
      if (feature.properties.room === "ladder") {
        layer.bindPopup(
          "<h1> Cầu thang tầng 3 </h1> " +
            '<img style="width :100%; height: 100%;"  src="./img/ladder3.jpg"></img>'
        );
      }
      if (feature.properties.room === "hop") {
        layer.bindPopup(
          "<h1> Phòng họp tầng 3 </h1> " +
            '  <img style="width :100%; height: 100%;"  src="./img/hop3.jpg"></img>'
        );
      }
    },
  });
  controlLayers.addOverlay(geojsonLayer, "K.Floor 3");
});

// ================================Layer Map=============================

var grayscale = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
var osm = L.tileLayer("//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 22,
  attribution: "Map data &copy; OpenStreetMap contributors",
}).addTo(map);
googleSat = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
});
Terrain = L.tileLayer(
  "http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
Road = L.tileLayer("https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
});

controlLayers.addBaseLayer(osm, "OSM");
controlLayers.addBaseLayer(grayscale, "GrayScale");
controlLayers.addBaseLayer(googleSat, "Satelite");
controlLayers.addBaseLayer(Terrain, "Terrain");
controlLayers.addBaseLayer(Road, "Road");
