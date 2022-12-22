var hoitruong = L.icon({
    iconUrl: './img/marker/hoitruong.png',
    iconSize:     [30, 30], 
  });
  var dormitory = L.icon({
    iconUrl: './img/marker/dormitory.png',
    iconSize:     [30, 30], 
  });
  var khuhoc = L.icon({
    iconUrl: './img/marker/khuhoc.png',
    iconSize:     [35, 35], 
  });
  var lab = L.icon({
    iconUrl: './img/marker/lab.png',
    iconSize:     [35, 35], 
  });
  var phongdanang = L.icon({
    iconUrl: './img/marker/phongdanang.png',
    iconSize:     [35, 35], 
  });
  var soccer = L.icon({
    iconUrl: './img/marker/soccer.png',
    iconSize:     [35, 35], 
  });
  var sport = L.icon({
    iconUrl: './img/marker/sport.png',
    iconSize:     [35, 35], 
  });
  var tennis = L.icon({
    iconUrl: './img/marker/tennis-ball.png',
    iconSize:     [35, 35], 
  });
  var university = L.icon({
    iconUrl: './img/marker/university.png',
    iconSize:     [35, 35], 
  });
  var library = L.icon({
    iconUrl: './img/marker/library.png',
    iconSize:     [35, 35], 
  });
  var quansu = L.icon({
    iconUrl: './img/marker/base.png',
    iconSize:     [35, 35], 
  });
  var parking = L.icon({
    iconUrl: './img/marker/parking.png',
    iconSize:     [35, 35], 
  });
  
  
  
  var hoitruong =L.marker([15.97499,108.25147],{icon: hoitruong}).addTo(map).bindPopup("<h1>Hội trường tròn Việt-Hàn  </h1>"+'<a href="map3d.html">   <img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/hoitruongtron.jpg"></img> </a>');

  var danang = L.marker([15.97577,108.25158],{icon: phongdanang}).addTo(map).bindPopup("<h1>Nhà Đa Năng trường Việt-Hàn  </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/nhadanang.jpg"></img>');

  
  var tennis = L.marker([15.97651,108.25153],{icon: tennis}).addTo(map).bindPopup("<h1>Sân tennis trường Việt-Hàn  </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/tennis.jpg"></img>');
  
  var soccer =L.marker([15.97716,108.25152],{icon: soccer}).addTo(map).bindPopup("<h1>Sân đá bóng trường Việt-Hàn  </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/football.jpg"></img>');
  
  
  var university =L.marker([15.97512,108.25355],{icon: university}).addTo(map).bindPopup("<h1>Cổng trường  Việt-Hàn  </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/congtruong.jpg"></img>');
  
  
  var khuhoc1 =L.marker([15.97462,108.25228],{icon: khuhoc}).addTo(map).bindPopup("<h1>Khu học lí thuyết  A </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/2dKhuA.jpg"></img>');
  
  
  var khuhoc2 =L.marker([15.97460,108.25303],{icon: khuhoc}).addTo(map).bindPopup("<h1 >Khu B học thực hành</h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/2dKhuB.jpg"></img>');
  
  
  var khuhoc3 =L.marker([15.97426,108.25304],{icon: khuhoc}).addTo(map).bindPopup("<h1 >Khu C giảng đường  </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/2dKhuC.jpg"></img>');
  
  
  var lab =L.marker([15.97510,108.25175],{icon: lab}).addTo(map).bindPopup("<h1>Tòa nhà hành chính </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/khu hanh chinh.jpg"></img>');
  
  
  var dormitory1 =L.marker([15.97328,108.25189],{icon: dormitory}).addTo(map).bindPopup("<h1>Khu Kí Túc xá sinh viên  </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/kytucxa.jpg"></img>');
  
  
  var library =L.marker([15.97444,108.25146],{icon: library}).addTo(map).bindPopup("<h1>Thư viện trường Việt -Hàn  </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/thuvien.jpg"></img>');
  
  
  var khuhoc4 =L.marker([15.97559,108.25223],{icon: khuhoc}).addTo(map).bindPopup("<h1>Khu D trường Việt- Hàn  </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/khuD.jpg"></img>');
  
  
  var khuhoc5 =L.marker([15.97561,108.25299],{icon: khuhoc}).addTo(map).bindPopup("<h1>Khu E trường Việt- Hàn  </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/khuE.jpg"></img>');
  
  
  var dormitory2 =L.marker([15.97600,108.25299],{icon: dormitory}).addTo(map).bindPopup("<h1>Khu nhà dịch cho sinh viên </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/phongdichvu.jpg"></img>');
  
  
  var sport =L.marker([15.97688,108.25236],{icon: sport}).addTo(map).bindPopup("<h1> Sân chạy điền kinh   </h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/2dDienKinh.jpg"></img>');
  
  var quansu =L.marker([15.97533,108.25042],{icon: quansu}).addTo(map).bindPopup("<h1> Khu Học GDQP-Quân sự</h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/2dQuanSu.jpg"></img>');
  
  var parking =L.marker([15.97392,108.25353],{icon: parking}).addTo(map).bindPopup("<h1> Khu giữ xe sinh viên</h1>"+'<img style="width :100%; height: 100%;"  src="./imgmain/imgIndoor/2dGiuXe.jpg"></img>');
  