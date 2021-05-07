function initc1(api){
  elClick('a0', function () {
		setVisibilityGroup(api, 'vertebrae', 'a0')
		api.gotoAnnotation(0, { preventCameraAnimation: false, preventCameraMove: false });
  });
  
  
  elClick('a1', function () {
		setVisibilityGroup(api, 'vertebrae', 'a1')
    api.gotoAnnotation(1, { preventCameraAnimation: false, preventCameraMove: false });
   });
  
	elClick('a2', function () {
		setVisibilityGroup(api, 'vertebrae', 'a2')
    api.gotoAnnotation(2, { preventCameraAnimation: false, preventCameraMove: false });
  });
  
  elClick('a3', function () {
		setVisibilityGroup(api, 'vertebrae', 'a3')
    api.gotoAnnotation(3, { preventCameraAnimation: false, preventCameraMove: false });
	});

	elClick('a4', function () {
		setVisibilityGroup(api, 'vertebrae', 'a4')
    api.gotoAnnotation(4, { preventCameraAnimation: false, preventCameraMove: false });
  });

	elClick('a5', function () {
		setVisibilityGroup(api, 'vertebrae', 'a5')
    api.gotoAnnotation(5, { preventCameraAnimation: false, preventCameraMove: false });
  });
	
  elClick('a6', function () {
		setVisibilityGroup(api, 'vertebrae', 'a6')
    api.gotoAnnotation(6, { preventCameraAnimation: false, preventCameraMove: false });
  });
  
	elClick('a7', function () {
		setVisibilityGroup(api, 'vertebrae', 'a7')
    api.gotoAnnotation(7, { preventCameraAnimation: false, preventCameraMove: false });
  });
  
	elClick('a8', function () {
		setVisibilityGroup(api, 'vertebrae', 'a8')
    api.gotoAnnotation(8, { preventCameraAnimation: false, preventCameraMove: false });
  });

	elClick('a9', function () {
		setVisibilityGroup(api, 'vertebrae', 'a9')
    api.gotoAnnotation(9, { preventCameraAnimation: false, preventCameraMove: false });
  });

	elClick('a10', function () {
		setVisibilityGroup(api, 'vertebrae', 'a10')
    api.gotoAnnotation(10, { preventCameraAnimation: false, preventCameraMove: false });
  });

	elClick('a11', function () {
		setVisibilityGroup(api, 'vertebrae', 'a11')
    api.gotoAnnotation(11, { preventCameraAnimation: false, preventCameraMove: false });
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
