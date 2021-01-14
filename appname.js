function initc1(api){
  elClick('a0', function () {
    api.gotoAnnotation(0, { preventCameraAnimation: false, preventCameraMove: false });
    api.show(20, function() {console.log('showed node', 20);});
    api.show(3, function() {console.log('showed node', 3);});
    api.hide(37, function() {console.log('hid node', 37);});
	api.hide(54, function() {console.log('hid node', 54);});
	api.hide(71, function() {console.log('hid node', 71);});
	api.hide(88, function() {console.log('hid node', 88);});
	api.hide(105, function() {console.log('hid node', 105);});
	api.hide(122, function() {console.log('hid node', 122);});
	api.hide(139, function() {console.log('hid node', 139);});
	api.hide(156, function() {console.log('hid node', 156);});
	api.hide(173, function() {console.log('hid node', 173);});
	api.hide(190, function() {console.log('hid node', 190);});	  
  });
  
  
  elClick('a1', function () {
    api.gotoAnnotation(1, { preventCameraAnimation: false, preventCameraMove: false });
    api.show(20, function() {console.log('showed node', 20);});
    api.hide(3, function() {console.log('hid node', 3);});
	api.hide(37, function() {console.log('hid node', 37);});
	api.hide(54, function() {console.log('hid node', 54);});
	api.hide(71, function() {console.log('hid node', 71);});
	api.hide(88, function() {console.log('hid node', 88);});
	api.hide(105, function() {console.log('hid node', 105);});
	api.hide(122, function() {console.log('hid node', 122);});
	api.hide(139, function() {console.log('hid node', 139);});
	api.hide(156, function() {console.log('hid node', 156);});
	api.hide(173, function() {console.log('hid node', 173);});
	api.hide(190, function() {console.log('hid node', 190);});	  
   });
  
	elClick('a2', function () {
    api.gotoAnnotation(2, { preventCameraAnimation: false, preventCameraMove: false });
	api.hide(20, function() {console.log('hid node', 20);});
    api.hide(3, function() {console.log('hid node', 3);});
	api.show(37, function() {console.log('hid node', 37);});
	api.hide(54, function() {console.log('showed node', 54);});
	api.hide(71, function() {console.log('hid node', 71);});
	api.hide(88, function() {console.log('hid node', 88);});
	api.hide(105, function() {console.log('hid node', 105);});
	api.hide(122, function() {console.log('hid node', 122);});
	api.hide(139, function() {console.log('hid node', 139);});
	api.hide(156, function() {console.log('hid node', 156);});
	api.hide(173, function() {console.log('hid node', 173);});
	api.hide(190, function() {console.log('hid node', 190);});	  
   	api.hideAnnotation(0, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(1, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(2, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(3, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(4, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(5, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(6, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(7, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
  });
  
  elClick('a3', function () {
    api.gotoAnnotation(3, { preventCameraAnimation: false, preventCameraMove: false });
    api.hide(20, function() {console.log('hid node', 20);});
    api.hide(3, function() {console.log('hid node', 3);});
	api.hide(37, function() {console.log('hid node', 37);});
	api.show(54, function() {console.log('hid node', 54);});
	api.hide(71, function() {console.log('showed node', 71);});
	api.hide(88, function() {console.log('hid node', 88);});
	api.hide(105, function() {console.log('hid node', 105);});
	api.hide(122, function() {console.log('hid node', 122);});
	api.hide(139, function() {console.log('hid node', 139);});
	api.hide(156, function() {console.log('hid node', 156);});
	api.hide(173, function() {console.log('hid node', 173);});
	api.hide(190, function() {console.log('hid node', 190);});	  
    api.hideAnnotation(0, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(1, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(2, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(3, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(4, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(5, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(6, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(7, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	});

	elClick('a4', function () {
    api.gotoAnnotation(4, { preventCameraAnimation: false, preventCameraMove: false });
    api.hide(20, function() {console.log('hid node', 20);});
    api.hide(3, function() {console.log('hid node', 3);});
	api.hide(37, function() {console.log('hid node', 37);});
	api.hide(54, function() {console.log('hid node', 54);});
	api.show(71, function() {console.log('hid node', 71);});
	api.hide(88, function() {console.log('showed node', 88);});
	api.hide(105, function() {console.log('hid node', 105);});
	api.hide(122, function() {console.log('hid node', 122);});
	api.hide(139, function() {console.log('hid node', 139);});
	api.hide(156, function() {console.log('hid node', 156);});
	api.hide(173, function() {console.log('hid node', 173);});
	api.hide(190, function() {console.log('hid node', 190);});	  
	api.hideAnnotation(0, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(1, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(2, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(3, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(4, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(5, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(6, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(7, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
  });

	elClick('a5', function () {
    api.gotoAnnotation(5, { preventCameraAnimation: false, preventCameraMove: false });
    api.hide(20, function() {console.log('hid node', 20);});
    api.hide(3, function() {console.log('hid', 3);});
	api.hide(37, function() {console.log('hid node', 37);});
	api.hide(54, function() {console.log('hid node', 54);});
	api.hide(71, function() {console.log('hid node', 71);});
	api.show(88, function() {console.log('showed node', 88);});
	api.hide(105, function() {console.log('hid node', 105);});
	api.hide(122, function() {console.log('hid node', 122);});
	api.hide(139, function() {console.log('hid node', 139);});
	api.hide(156, function() {console.log('hid node', 156);});
	api.hide(173, function() {console.log('hid node', 173);});
	api.hide(190, function() {console.log('hid node', 190);});	  
   	api.hideAnnotation(0, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(1, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(2, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(3, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(4, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(5, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(6, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(7, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
  });
	
  elClick('a6', function () {
    api.gotoAnnotation(6, { preventCameraAnimation: false, preventCameraMove: false });
	api.hide(20, function() {console.log('hid node', 20);});
    api.hide(3, function() {console.log('hid node', 3);});
	api.hide(37, function() {console.log('hid node', 37);});
	api.hide(54, function() {console.log('hid node', 54);});
	api.hide(71, function() {console.log('hid node', 71);});
	api.hide(88, function() {console.log('hid node', 88);});
	api.show(105, function() {console.log('showed node', 105);});
	api.hide(122, function() {console.log('hid node', 122);});
	api.hide(139, function() {console.log('hid node', 139);});
	api.hide(156, function() {console.log('hid node', 156);});
	api.hide(173, function() {console.log('hid node', 173);});
	api.hide(190, function() {console.log('hid node', 190);});	  
  	api.hideAnnotation(0, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(1, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(2, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(3, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(4, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(5, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(6, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(7, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
  });
  
	elClick('a7', function () {
    api.gotoAnnotation(7, { preventCameraAnimation: false, preventCameraMove: false });
	api.hide(20, function() {console.log('hid node', 20);});
    api.hide(3, function() {console.log('hid node', 3);});
	api.hide(37, function() {console.log('hid node', 37);});
	api.hide(54, function() {console.log('hid node', 54);});
	api.hide(71, function() {console.log('hid node', 71);});
	api.hide(88, function() {console.log('hid node', 88);});
	api.hide(105, function() {console.log('hid node', 105);});
	api.show(122, function() {console.log('showed node', 122);});
	api.hide(139, function() {console.log('hid node', 139);});
	api.hide(156, function() {console.log('hid node', 156);});
	api.hide(173, function() {console.log('hid node', 173);});
	api.hide(190, function() {console.log('hid node', 190);});	  
   	api.hideAnnotation(0, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(1, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(2, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(3, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(4, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(5, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(6, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(7, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
  });
  
	elClick('a8', function () {
    api.gotoAnnotation(8, { preventCameraAnimation: false, preventCameraMove: false });
	api.hide(20, function() {console.log('hid node', 20);});
    api.hide(3, function() {console.log('hid node', 3);});
	api.hide(37, function() {console.log('hid node', 37);});
	api.hide(54, function() {console.log('hid node', 54);});
	api.hide(71, function() {console.log('hid node', 71);});
	api.hide(88, function() {console.log('hid node', 88);});
	api.hide(105, function() {console.log('hid node', 105);});
	api.hide(122, function() {console.log('hid node', 122);});
	api.show(139, function() {console.log('showed node', 139);});
	api.hide(156, function() {console.log('hid node', 156);});
	api.hide(173, function() {console.log('hid node', 173);});
	api.hide(190, function() {console.log('hid node', 190);});	  
 	api.hideAnnotation(0, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(1, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(2, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(3, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(4, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(5, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(6, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(7, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
  });
	elClick('a9', function () {
    api.gotoAnnotation(9, { preventCameraAnimation: false, preventCameraMove: false });
 	api.hide(20, function() {console.log('hid node', 20);});
    api.hide(3, function() {console.log('hid node', 3);});
	api.hide(37, function() {console.log('hid node', 37);});
	api.hide(54, function() {console.log('hid node', 54);});
	api.hide(71, function() {console.log('hid node', 71);});
	api.hide(88, function() {console.log('hid node', 88);});
	api.hide(105, function() {console.log('hid node', 105);});
	api.hide(122, function() {console.log('hid node', 122);});
	api.hide(139, function() {console.log('hid node', 139);});
	api.show(156, function() {console.log('showed node', 156);});
	api.hide(173, function() {console.log('hid node', 173);});
	api.hide(190, function() {console.log('hid node', 190);});	  
	api.hideAnnotation(0, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(1, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(2, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(3, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(4, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(5, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(6, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(7, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
  });
	elClick('a10', function () {
    api.gotoAnnotation(10, { preventCameraAnimation: false, preventCameraMove: false });
  api.hide(20, function() {console.log('hid node', 20);});
    api.hide(3, function() {console.log('hid node', 3);});
		
	api.hide(37, function() {console.log('hid node', 37);});
	api.hide(54, function() {console.log('hid node', 54);});
	api.hide(71, function() {console.log('hid node', 71);});
	api.hide(88, function() {console.log('hid node', 88);});
	api.hide(105, function() {console.log('hid node', 105);});
	api.hide(122, function() {console.log('hid node', 122);});
	api.hide(139, function() {console.log('hid node', 139);});
	api.hide(156, function() {console.log('hid node', 156);});
	api.show(173, function() {console.log('showed node', 173);});
	api.hide(190, function() {console.log('hid node', 190);});	  
 	api.hideAnnotation(0, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(1, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(2, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(3, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(4, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(5, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(6, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(7, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
  });
	elClick('a11', function () {
    api.gotoAnnotation(11, { preventCameraAnimation: false, preventCameraMove: false });
  	api.hide(20, function() {console.log('hid node', 20);});
    api.hide(3, function() {console.log('hid node', 3);});
	api.hide(37, function() {console.log('hid node', 37);});
	api.hide(54, function() {console.log('hid node', 54);});
	api.hide(71, function() {console.log('hid node', 71);});
	api.hide(88, function() {console.log('hid node', 88);});
	api.hide(105, function() {console.log('hid node', 105);});
	api.hide(122, function() {console.log('hid node', 122);});
	api.hide(139, function() {console.log('hid node', 139);});
	api.hide(156, function() {console.log('hid node', 156);});
	api.hide(173, function() {console.log('hid node', 173);});
	api.show(190, function() {console.log('showed node', 190);});	  
   	api.hideAnnotation(0, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(1, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(2, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(3, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(4, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(5, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(6, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
	api.hideAnnotation(7, function(err, index) {if(!err) {console.log('Hiding annotation', index + 1);}});
  });

  
  
  api.getSceneGraph(function (err, result) {
    if (err) {
      console.log('Error getting nodes');
      return;
    }
    console.log(result);
  });
  
  api.getCameraLookAt(function (err, camera) {
    api.createAnnotation(
      [-0.167144215216577174, -3.867954799445659, 0.8214845269137563],
      [0.1229991557663267, -3.5779795878788656, -0.5151466147866559],
      camera.position,
      camera.target,
      'mytitle1',
      'mytext1 (https://image)[image]', 
      function (index) {
        console.log('added hotspot: ' + index);
      }
    );

    api.createAnnotation(
      [-0.16144215216577174, -3.867954799445659, 0.8214845269137563],
      [0.1229991557663267, -3.5779795878788656, -0.5151466147866559],
      camera.position,
      camera.target,
      'mytitle2',
      'mytext2 (https://image)[image]',
      function (indexCreated) {
        console.log('added hotspot: ' + indexCreated);
        api.removeAnnotation(indexCreated);
      }
    );

    api.getAnnotation(1, function (err, annotation) {
      console.log(annotation);
    });
  });  
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("a0").click();
