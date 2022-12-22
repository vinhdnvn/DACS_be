var map = L.map('map', {
    'center': [15.97511,108.25222],
    'zoom': 19  ,
    'layers': [
      L.tileLayer(LRM.tileLayerUrl, {
   
        attribution: 'Map data &copy; OpenStreetMap contributors'
    })
    ]
  });

  var controlLayers = L.control.layers().addTo(map);
  
  $.getJSON('./GeoJSOn file js/floor1.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
       var fill = "gray";
        if(feature.properties.room === 'class')
        {
               fill ='red';
       }
        if(feature.properties.room === 'wc')
        {
               fill ='#009999';
                
        }
        if(feature.properties.room === 'costume')
        {
               fill ='#999933';
                
        }
        if(feature.properties.room === 'teacher')
        {
               fill ='#FF6600';
                
        }
        if(feature.properties.room === 'door')
        {
               fill ='#0033FF';
                
        }
        if(feature.properties.room === 'ladder')
        {
               fill ='#00CC00';
                
        }
        if(feature.properties.room === 'equipment')
        {
               fill ='#006699';
                
        }
        

        return {
              fillColor : fill,
              weight: 2,
              color: '#666',
              fillOpacity: 1
        }
      },
      onEachFeature: function(feature, layer){
        if(feature.properties.name ==='room101')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.101 tầng 1 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a101.jpg"></img>')
        } 
        if(feature.properties.name ==='room102')
        {
          layer.bindPopup("<h1> Phòng họp A.102 tầng 1 khu A</h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a102.jpg"></img>')
        } 
        if(feature.properties.name ==='room103')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.103 tầng 1 khu A</h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a103.jpg"></img>')
        } 
        if(feature.properties.name ==='room104')
        {
          layer.bindPopup("<h1> Phòng họp A.104 tầng 1 khu A</h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a104.jpg"></img>')
        } 
        if(feature.properties.name ==='room105')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.105 tầng 1 khu A</h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a105.jpg"></img>')
        } 
        if(feature.properties.name ==='room106')
        {
          layer.bindPopup("<h1> Phòng họp A.106 tầng 1 khu A</h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a106.jpg"></img>')
        } 
        if(feature.properties.name ==='room107')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.107 tầng 1 khu A</h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a107.jpg"></img>')
        } 
        if(feature.properties.name ==='room108')
        {
          layer.bindPopup("<h1> Văn phòng đạo tạo kĩ sư dạy tiếng Nhật A.108 tầng 1 khu A</h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a108.jpg"></img>')
        } 
        if(feature.properties.name ==='room109')
        {
          layer.bindPopup("<h1> Phòng giảng viên A.109 tầng 1 khu A</h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a109.jpg"></img>')
        } 
        if(feature.properties.name ==='room110')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.110 tầng 1 khu A</h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a110.jpg"></img>')
        } 
        if(feature.properties.name ==='room111')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.111 tầng 1 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a111.jpg"></img>')
        } 
        if(feature.properties.name ==='room112')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.112 tầng 1 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a112.jpg"></img>')
        } 
        if(feature.properties.name ==='room113')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.113 tầng 1 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a113.jpg"></img>')
        } 
        if(feature.properties.name ==='room114')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.114 tầng 1 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a114.jpg"></img>')
        } 
        if(feature.properties.name=== 'costumes'){
          layer.bindPopup("<h1> Phòng trang phục tầng 1 </h1> <p> Đây là phòng trang phục</p>"+'<img style="width :100%; height: 100%;"  src="../imgmain/imgIndoor/phongtrangphuc.jpg"></img>');
        }
        if(feature.properties.room=== 'wc'){
          layer.bindPopup("<h1> Phòng vệ sinh  </h1> <p> Phòng vệ sinh tầng 1</p>" +' <img style="width :100%; height: 100%;"  src="./img/wc.jpg"></img>');
        }
        
        if(feature.properties.room=== 'door'){
          layer.bindPopup("<h1> Cửa ra vào khu A tầng 1 </h1>"+' <img style="width :100%; height: 100%;"  src="./img/door.jpg"></img>');
        }
        if(feature.properties.room=== 'equipment'){
          layer.bindPopup("<h1> Phòng thiết bị  tầng 1</h1> <p> Đây là phòng thiết bị</p>" +'<img style="width :100%; height: 100%;"  src="./img/thietbi.jpg"></img>');
        }
        if(feature.properties.room === 'ladder')
        {
          layer.bindPopup("<h1> Cầu thang tầng 1 </h1> "+'<img style="width :100%; height: 100%;"  src="./img/ladder.jpg"></img>');
        }    
        if(feature.properties.room=== 'teacher'){
          layer.bindPopup("<h1> Phòng giảng viên A.109  </h1> "+ 
          '  <img style="width :100%; height: 100%;"  src="./img/teacher.jpg"></img>');
        }
       
      },
      
    });
    controlLayers.addOverlay(geojsonLayer, 'A.Floor 1');
  });

  // ===========================them layer tang moi
  $.getJSON('./GeoJSOn file js/floor2.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        var fill = "gray";
        if(feature.properties.room === 'class')
        {
               fill ='#00FFFF';
              
                
        }
        if(feature.properties.room === 'hop')
        {
               fill ='#0099CC';
              
                
        }
        if(feature.properties.room === 'lithuyet')
        {
               fill ='#993300';
              
                
        }
        if(feature.properties.room === 'wc')
        {
               fill ='#008080';
                
        }
      
    
  
        if(feature.properties.room === 'ladder')
        {
               fill ='#808080';
                
        }
        if(feature.properties.room === 'equipment')
        {
               fill ='#FFFFCC';
                
        }
        return {
          fillColor : fill,
          weight: 2,
          color: '#333399',
          fillOpacity: 1
        }
      },
      onEachFeature: function(feature, layer){
        if(feature.properties.name ==='room201')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.201 tầng 2 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a201.jpg"></img>')
        } 
        if(feature.properties.name ==='room202')
        {
          layer.bindPopup("<h1> Phòng họp A.202 tầng 2 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a202.jpg"></img>')
        } 
        if(feature.properties.name ==='room203')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.203 tầng 2 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a203.jpg"></img>')
        } 
        if(feature.properties.name ==='room204')
        {
          layer.bindPopup("<h1> Phòng họp A.204 tầng 2 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a204.jpg"></img>')
        } 
        if(feature.properties.name ==='room205')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.205 tầng 2 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a205.jpg"></img>')
        } 
        if(feature.properties.name ==='room206')
        {
          layer.bindPopup("<h1> Phòng họp A.206 tầng 2 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a206.jpg"></img>')
        } 
        if(feature.properties.name ==='room207')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.207 tầng 2 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a207.jpg"></img>')
        } 
        if(feature.properties.name ==='room208')
        {
          layer.bindPopup("<h1> Phòng họp A.208 tầng 2 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a208.jpg"></img>')
        } 
        if(feature.properties.name ==='room209')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.209 tầng 2 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a209.jpg"></img>')
        } 
        if(feature.properties.name ==='room210')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.210 tầng 2 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a210.jpg"></img>')
        } 
        if(feature.properties.name ==='room211')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.211 tầng 2 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a211.jpg"></img>')
        } 
        if(feature.properties.name ==='room212')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.212 tầng 2 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a212.jpg"></img>')
        } 
        if(feature.properties.name ==='room213')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.213 tầng 2 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a213.jpg"></img>')
        } 
        if(feature.properties.name ==='room214')
        {
          layer.bindPopup("<h1> Phòng dạy học sinh viên A.214 tầng 2 khu A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/a214.jpg"></img>')
        }
     if(feature.properties.room=== 'wc'){
        layer.bindPopup("<h1> Phòng vệ sinh  </h1> <p> Phòng vệ sinh tầng 2</p>" +' <img style="width :100%; height: 100%;"  src="./img/wc2.jpg"></img>');
      }
      if(feature.properties.room=== 'lithuyet'){
        layer.bindPopup("<h1> Phòng học lí thuyết tầng 2 </h1>"+'<img style="width :100%; height: 100%;"  src="./img/lithuyet2.jpg"></img>');
      }
      
      if(feature.properties.room=== 'equipment'){
        layer.bindPopup("<h1> Phòng thiết bị tầng 2 </h1> <p> Đây là phòng thiết bị</p>" +'<img style="width :100%; height: 100%;"  src="./img/thietbi2.jpg"></img>');
      }
      if(feature.properties.room === 'ladder')
      {
        layer.bindPopup("<h1> Cầu thang tầng 2 </h1> "+'<img style="width :100%; height: 100%;"  src="./img/ladder2.jpg"></img>');
      }    
     
    }
    });
   
    controlLayers.addOverlay(geojsonLayer, 'A.Floor 2');
  });
  
  // tang 3
  $.getJSON('./GeoJSOn file js/floor3.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        var fill = "gray";
        if(feature.properties.room === 'class')
        {
               fill ='#00AA00';
              
                
        }
        if(feature.properties.room === 'wc')
        {
               fill ='#FF00FF';
                
        }
        if(feature.properties.room === 'hop')
        {
               fill ='#660000';
              
                
        }
        if(feature.properties.room === 'lithuyet')
        {
               fill ='#6600FF';
        }
      
        if(feature.properties.room === 'ladder')
        {
               fill ='#006699';
                
        }
        if(feature.properties.room === 'equipment')
        {
               fill ='#CC6600';
                
        }
        return {
          fillColor : fill,
          weight: 2,
          color: '#333399',
          fillOpacity: 1
        }
      },
      onEachFeature: function(feature, layer){
        
        if(feature.properties.room ==='class')
           {
             layer.bindPopup("<h1> Phòng dạy học sinh viên tầng 3  </h1>"+'<img style="width :100%; height: 100%;"  src="./img/hoc3.jpg"></img>')
          }
      if(feature.properties.room=== 'wc'){
        layer.bindPopup("<h1> Phòng vệ sinh  </h1> <p> Phòng vệ sinh tầng 3</p>" +' <img style="width :100%; height: 100%;"  src="./img/wc3.jpg"></img>');
      }
      if(feature.properties.room=== 'lithuyet'){
        layer.bindPopup("<h1> Phòng học lí thuyết tầng 3 </h1>"+'<img style="width :100%; height: 100%;"  src="./img/lithuyet3.jpg"></img>');
      }
      
      if(feature.properties.room=== 'equipment'){
        layer.bindPopup("<h1> Phòng thiết bị tầng 3 </h1> <p> Đây là phòng thiết bị</p>" +'<img style="width :100%; height: 100%;"  src="./img/thietbi3.jpg"></img>');
      }
      if(feature.properties.room === 'ladder')
      {
        layer.bindPopup("<h1> Cầu thang tầng 3 </h1> "+'<img style="width :100%; height: 100%;"  src="./img/ladder3.jpg"></img>');
      }    
      if(feature.properties.room=== 'hop'){
        layer.bindPopup("<h1> Phòng họp tầng 3 </h1> "+ 
        '  <img style="width :100%; height: 100%;"  src="./img/hop3.jpg"></img>');
      }
    }
    });

    controlLayers.addOverlay(geojsonLayer, 'A.Floor 3');
  });
  // khu B tang 1
  $.getJSON('./GeoJSOn file js/khuBtang1.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        var fill = "gray";
        if(feature.properties.room === 'class')
        {
               fill ='#FFCC99';
              
                
        }
        if(feature.properties.room === 'wc')
        {
               fill ='#FFCCFF';
                
        }
        if(feature.properties.room === 'hop')
        {
               fill ='#33CC66';
              
                
        }
        if(feature.properties.room === 'lithuyet')
        {
               fill ='#FF9900';
              
                
        }
      
    
  
        if(feature.properties.room === 'ladder')
        {
               fill ='#EEE8AA';
                
        }
        if(feature.properties.room === 'equipment')
        {
               fill ='#A0522D';
                
        }
        return {
          fillColor : fill,
          weight: 2,
          color: '#333399',
          fillOpacity: 1
        }
      },
      onEachFeature: function(feature, layer){
        if(feature.properties.name ==='tearoom')
        {
          layer.bindPopup("<h1> Phòng trà  B.201 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b101.jpg"></img>')
        }
        if(feature.properties.name ==='roomB101')
        {
          layer.bindPopup("<h1> Phòng thực hành B.201 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b101.jpg"></img>')
        }
        
        if(feature.properties.name ==='roomB102')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.202 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b102.jpg"></img>')
        }
        
        if(feature.properties.name ==='roomB103')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.203 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b103.jpg"></img>')
        }
        if(feature.properties.name ==='roomB104')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.204 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b104.jpg"></img>')
        }
        if(feature.properties.name ==='roomB105')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.205 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b105.jpg"></img>')
        }
        if(feature.properties.name ==='roomB106')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.206 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b106.jpg"></img>')
        }
        if(feature.properties.name ==='roomB107')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.207 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b107.jpg"></img>')
        }
        if(feature.properties.name ==='roomB108')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.208 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b108.jpg"></img>')
        }
        if(feature.properties.name ==='roomB109')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.209 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b109.jpg"></img>')
        }
        if(feature.properties.name ==='roomB110')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.210 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b110.jpg"></img>')
        }
        if(feature.properties.name ==='roomB111')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.211 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b110.jpg"></img>')
        }
        if(feature.properties.name ==='ladder2')
        {
          layer.bindPopup("<h1> Cầu thang tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/cauthanggiuakhuB.jpg"></img>')
        }
        if(feature.properties.name ==='ladder1')
        {
          layer.bindPopup("<h1> Cầu thang tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/cauthangkhuB.jpg"></img>')
        }
        if(feature.properties.name ==='ladderB3')
        {
          layer.bindPopup("<h1> Cầu thang tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/cauthangkhuB.jpg"></img>')
        }
      
      
    }
    });

    controlLayers.addOverlay(geojsonLayer, 'B.Floor 1');
  });
  //khu B tang 2
  $.getJSON('./GeoJSOn file js/khuBtang2.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        var fill = "gray";
        if(feature.properties.room === 'class')
        {
               fill ='#2F4F4F';
              
                
        }
        if(feature.properties.room === 'wc')
        {
               fill ='#FAF0E6';
                
        }
        if(feature.properties.room === 'hop')
        {
               fill ='#A0522D';
              
                
        }
        if(feature.properties.room === 'lithuyet')
        {
               fill ='#FF9900';
              
                
        }
      
    
  
        if(feature.properties.room === 'ladder')
        {
               fill ='#FFEFDB';
                
        }
        if(feature.properties.room === 'equipment')
        {
               fill ='#A0522D';
                
        }
        return {
          fillColor : fill,
          weight: 2,
          color: '#333399',
          fillOpacity: 1
        }
      },
      onEachFeature: function(feature, layer){
        if(feature.properties.name ==='tearoom')
        {
          layer.bindPopup("<h1> Phòng trà  B.201 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b101.jpg"></img>')
        }
        if(feature.properties.name ==='roomB101')
        {
          layer.bindPopup("<h1> Phòng thực hành B.201 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b101.jpg"></img>')
        }
        
        if(feature.properties.name ==='roomB102')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.202 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b102.jpg"></img>')
        }
        
        if(feature.properties.name ==='roomB103')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.203 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b103.jpg"></img>')
        }
        if(feature.properties.name ==='roomB104')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.204 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b104.jpg"></img>')
        }
        if(feature.properties.name ==='roomB105')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.205 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b105.jpg"></img>')
        }
        if(feature.properties.name ==='roomB106')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.206 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b106.jpg"></img>')
        }
        if(feature.properties.name ==='roomB107')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.207 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b107.jpg"></img>')
        }
        if(feature.properties.name ==='roomB108')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.208 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b108.jpg"></img>')
        }
        if(feature.properties.name ==='roomB109')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.209 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b109.jpg"></img>')
        }
        if(feature.properties.name ==='roomB110')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.210 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b110.jpg"></img>')
        }
        if(feature.properties.name ==='roomB111')
        {
          layer.bindPopup("<h1> Phòng thực hành  B.211 tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/b110.jpg"></img>')
        }
        if(feature.properties.name ==='ladder2')
        {
          layer.bindPopup("<h1> Cầu thang tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/cauthanggiuakhuB.jpg"></img>')
        }
        if(feature.properties.name ==='ladder1')
        {
          layer.bindPopup("<h1> Cầu thang tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/cauthangkhuB.jpg"></img>')
        }
        if(feature.properties.name ==='ladderB3')
        {
          layer.bindPopup("<h1> Cầu thang tầng 1 khu B </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/cauthangkhuB.jpg"></img>')
        }
      
      
    }
    });

    controlLayers.addOverlay(geojsonLayer, 'B.Floor 2');
  });

  //Khu C
  $.getJSON('./GeoJSOn file js/khu3tang1.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        var fill = "gray";
        if(feature.properties.room === 'class')
        {
               fill ='#E6E6FA';
              
                
        }
        if(feature.properties.room === 'wc')
        {
               fill ='#F0F8FF';
                
        }
        if(feature.properties.room === 'teacher')
        {
               fill ='#668B8B';
                
        }
        if(feature.properties.room === 'amphitheater')
        {
               fill ='#836FFF';
                
        }
        if(feature.properties.room === 'equipment')
        {
               fill ='#27408B';
                
        }
        if(feature.properties.room==='technical')
        {
fill='#C1FFC1';
        }
        return {
          fillColor : fill,
          weight: 2,
          color: '#333399',
          fillOpacity: 1
        }
      },
      onEachFeature: function(feature, layer){
        if(feature.properties.name ==='roomC101')
        {
          layer.bindPopup("<h1> Phòng học C.101 tầng 1 khu C </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/c101.jpg"></img>')
        }
        if(feature.properties.name ==='roomC102')
        {
          layer.bindPopup("<h1> Phòng kĩ thuật 1 tầng 1 khu C </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/wc2khuc.jpg"></img>')
        }
        if(feature.properties.name ==='wc2')
        {
          
          layer.bindPopup("<h1> Phòng vệ sinh nam tầng 1 khu C </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/wc2khuc.jpg"></img>')
        }
        if(feature.properties.name ==='wc1')
        {
          
          layer.bindPopup("<h1> Phòng vệ sinh  nữ tầng 1 khu C </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/wckhuC.jpg"></img>')
        }
        if(feature.properties.name ==='technicalroom1')
        {
          layer.bindPopup("<h1> Phòng thiết bị  tầng 1 khu C </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/thietbikhuC.jpg"></img>')
        }
        if(feature.properties.name ==='technicalroom')
        {
          layer.bindPopup("<h1> Phòng thiết bị  tầng 1 khu C </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/thietbikhuC.jpg"></img>')
        }
        if(feature.properties.name ==='ladder2')
        {
          layer.bindPopup("<h1>Cầu thang  tầng 1 khu C </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/cauthangtang1khua.jpg"></img>')
        }
        if(feature.properties.name ==='ladder1')
        {
          layer.bindPopup("<h1>Cầu thang  tầng 1 khu C </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/cauthangkhuC.jpg"></img>')
        }
        if(feature.properties.name ==='roomC103')
        {
          layer.bindPopup("<h1> Phòng cất giữ sản phẩm  C.103 tầng 1 khu C </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/c103.jpg"></img>')
        }
        if(feature.properties.name ==='roomC104')
        {
          layer.bindPopup("<h1> Phòng học C.104 tầng 1 khu C </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/c104.jpg"></img>')
        }
        if(feature.properties.name ==='roomC105')
        {
          layer.bindPopup("<h1> Phòng học C.202 tầng 1 khu C </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/c202.jpg"></img>')
        }
        if(feature.properties.name ==='roomC106')
        {
          layer.bindPopup("<h1> Phòng học C.106 tầng 1 khu C </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/c106.jpg"></img>')
        }   
        if(feature.properties.name ==='roomC107')
        {
          layer.bindPopup("<h1> Phòng học C.107 tầng 1 khu C </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/c107.jpg"></img>')
        }     
      
    }
    });

    controlLayers.addOverlay(geojsonLayer, 'C.Floor 1');
  });
  //san tennis
  $.getJSON('./GeoJSOn file js/tennis.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        var fill = "gray";
        if(feature.properties.room === 'sport')
        {
               fill ='#94AAD6';}
      return {
          fillColor : fill,
          weight: 2,
          color: '#333399',
          fillOpacity: 1
        }},
      onEachFeature: function(feature, layer){
        if(feature.properties.name ==='tennis')
        {
          layer.bindPopup("<h1> Sân chơi thể thao Tennis </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/tennis.jpg"></img>')
        }}
    });controlLayers.addOverlay(geojsonLayer, 'Tennis');
  });
  //football
  $.getJSON('./GeoJSOn file js/football.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        var fill = "gray";
        if(feature.properties.room === 'sport')
        {
               fill ='#79378B';}
      return {
          fillColor : fill,
          weight: 2,
          color: '#333399',
          fillOpacity: 1
        }},
      onEachFeature: function(feature, layer){
        if(feature.properties.name ==='football')
        {
          layer.bindPopup("<h1> Sân thể thao bóng đá </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/football.jpg"></img>')
        }}
    });controlLayers.addOverlay(geojsonLayer, 'Football');
  });
  //khuD
  $.getJSON('./GeoJSOn file js/khuD.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        var fill = "gray";
        if(feature.properties.room === 'area')
        {
               fill ='#B7B7B7';}
      return {
          fillColor : fill,
          weight: 2,
          color: '#333399',
          fillOpacity: 1
        }},
      onEachFeature: function(feature, layer){
        if(feature.properties.name ==='khuD')
        {
          layer.bindPopup("<h1> Khu D trường Việt-Hàn </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/khuD.jpg"></img>')
        }}
    });controlLayers.addOverlay(geojsonLayer, 'D Area');
  });
  //khuE
  $.getJSON('./GeoJSOn file js/khuE.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        var fill = "gray";
        if(feature.properties.room === 'area')
        {
               fill ='#dc4e41';
              }
      return {
          fillColor : fill,
          weight: 2,
          color: '#333399',
          fillOpacity: 1
        }},
      onEachFeature: function(feature, layer){
        if(feature.properties.name ==='khuE')
        {
          layer.bindPopup("<h1> Khu E trường Việt-Hàn </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/khuE.jpg"></img>')
        }}
    });controlLayers.addOverlay(geojsonLayer, 'E Area');
  });
  //phong dich vu
  $.getJSON('./GeoJSOn file js/phongdichvu.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        var fill = "gray";
        if(feature.properties.room === 'area')
        {
               fill ='#000000 / #ff9900';
              }
      return {
          fillColor : fill,
          weight: 2,
          color: '#333399',
          fillOpacity: 1
        }},
      onEachFeature: function(feature, layer){
        if(feature.properties.name ==='phongdichvu')
        {
          layer.bindPopup("<h1> Khu phòng dịch vụ trường Việt-Hàn </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/phongdichvu.jpg"></img>')
        }}
    });controlLayers.addOverlay(geojsonLayer, 'Service rooms');
  });
  //toa nha hành chính
  $.getJSON('./GeoJSOn file js/khuhanhchinh.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        var fill = "gray";
        if(feature.properties.name === '1')
        {
               fill ='#FFFBD1';
              }
              if(feature.properties.name === '2')
              {
                     fill ='#AFD788';
                    }
                    
        if(feature.properties.name === '3')
        {
               fill ='#98D0B9';
              }
              
        if(feature.properties.name === '4')
        {
               fill ='#00A6AD';
              }
              if(feature.properties.name === '5')
        {
               fill ='#205AA7';
              }
              if(feature.properties.name === '6')
        {
               fill ='#511F90';
              }
      return {
          fillColor : fill,
          weight: 2,
          color: '#333399',
          fillOpacity: 1
        }}
     
    });controlLayers.addOverlay(geojsonLayer, 'Administrative building');
  });
  //khu quan su
  $.getJSON('./GeoJSOn file js/quansu.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        var fill = "gray";
        if(feature.properties.room === 'area')
        {
               fill ='#66FF99';}
      return {
          fillColor : fill,
          weight: 2,
          color: '#333399',
          fillOpacity: 1
        }},
      onEachFeature: function(feature, layer){
        if(feature.properties.name ==='quansu')
        {
          layer.bindPopup("<h1> Khoa giáo dục và quốc phòng an ninh </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/tennis.jpg"></img>')
        }}
    });controlLayers.addOverlay(geojsonLayer, 'Defense and Security Edu');
  });
  // khu da nang 
  $.getJSON('./GeoJSOn file js/khudanang.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        var fill = "gray";
        if(feature.properties.room === 'area')
        {
               fill ='#FF9966';}
      return {
          fillColor : fill,
          weight: 2,
          color: '#333399',
          fillOpacity: 1
        }},
      onEachFeature: function(feature, layer){
        if(feature.properties.name ==='danang')
        {
          layer.bindPopup("<h1> Khu nhà đa năng trường Việt-Hàn </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/nhadanang.jpg"></img>')
        }}
    });controlLayers.addOverlay(geojsonLayer, 'Multipurpose Area');
  });
  //ki tuc xa
  $.getJSON('./GeoJSOn file js/kitucxa.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        var fill = "gray";
        if(feature.properties.room === 'area')
        {
               fill ='#996600';}
      return {
          fillColor : fill,
          weight: 2,
          color: '#333399',
          fillOpacity: 1
        }},
      onEachFeature: function(feature, layer){
        if(feature.properties.name ==='kitucxa')
        {
          layer.bindPopup("<h1> Khu nhà đa năng trường Việt-Hàn </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/kytucxa.jpg"></img>')
        }}
    });controlLayers.addOverlay(geojsonLayer, 'Dormitory');
  });
    //khu dien kinh
    $.getJSON('./GeoJSOn file js/sandienkinh.json', function (geojson) {
      var geojsonLayer = L.geoJson(geojson, {
        style: function (feature) {
          var fill = "gray";
          if(feature.properties.room === 'area')
          {
                 fill ='#6633FF';}
        return {
            fillColor : fill,
            weight: 2,
            color: '#333399',
            fillOpacity: 1
          }},
        onEachFeature: function(feature, layer){
          if(feature.properties.name ==='khungoi')
          {
            layer.bindPopup("<h1> Sân điền kinh trường Việt-Hàn </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/kytucxa.jpg"></img>')
          }}
      });controlLayers.addOverlay(geojsonLayer, 'Sport');
    });
     //Thu vien
     $.getJSON('./GeoJSOn file js/thuvien.json', function (geojson) {
      var geojsonLayer = L.geoJson(geojson, {
        style: function (feature) {
          var fill = "gray";
          if(feature.properties.room === 'area')
          {
                 fill ='#6633FF';}
        return {
            fillColor : fill,
            weight: 2,
            color: '#333399',
            fillOpacity: 1
          }},
        onEachFeature: function(feature, layer){
          if(feature.properties.name ==='thuvien')
          {
            layer.bindPopup("<h1> Khu thư viện trường Việt-Hàn  </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/kytucxa.jpg"></img>')
          }}
      });controlLayers.addOverlay(geojsonLayer, 'Library');
    });
    //hoi truong tron
    $.getJSON('./GeoJSOn file js/hoitruongtron.json', function (geojson) {
      var geojsonLayer = L.geoJson(geojson, {
        style: function (feature) {
          var fill = "gray";
          if(feature.properties.room === 'area')
          {
                 fill ='#6633FF';}
        return {
            fillColor : fill,
            weight: 2,
            color: '#333399',
            fillOpacity: 1
          }},
        onEachFeature: function(feature, layer){
          if(feature.properties.name ==='hoi truong tron')
          {
            layer.bindPopup("<h1> Khu thư viện trường Việt-Hàn  </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/kytucxa.jpg"></img>')
          }}
      });
      controlLayers.addOverlay(geojsonLayer, 'Meeting-room');
    });
  
  


  // ================================Layer Map=============================
 
  var grayscale = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
 });
 var osm = L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 22,
  attribution: "Map data &copy; OpenStreetMap contributors"

 }).addTo(map);
 googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
   maxZoom: 20,
   subdomains:['mt0','mt1','mt2','mt3']
 });
 Terrain = L.tileLayer('http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}',{
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3']
});
Road =L.tileLayer('https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}',{
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3']
});
 
 controlLayers.addBaseLayer(osm, 'OSM');
 controlLayers.addBaseLayer(grayscale, 'GrayScale');
controlLayers.addBaseLayer(googleSat,'Satelite');
controlLayers.addBaseLayer(Terrain, 'Terrain');
controlLayers.addBaseLayer(Road, 'Road')
  
 
// Test


// Searching file JSON
$( "#leaflet-control-layers-overlays label" ).prop( "checked", true );