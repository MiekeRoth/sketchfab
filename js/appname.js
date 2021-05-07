function initc1(api){
  // elClick('a0', function () {
  //   tabClick(api, 'a0')
  // });
  
  // elClick('a1', function () {
  //   tabClick(api, 'a1')
  //  });
  
	// elClick('a2', function () {
  //   tabClick(api, 'a2')
  // });
  
  // elClick('a3', function () {
  //   tabClick(api, 'a3')
	// });

	// elClick('a4', function () {
  //   tabClick(api, 'a4')
  // });

	// elClick('a5', function () {
  //   tabClick(api, 'a5')
  // });
	
  // elClick('a6', function () {
  //   tabClick(api, 'a6')
  // });
  
	// elClick('a7', function () {
  //   tabClick(api, 'a7')
  // });
  
	// elClick('a8', function () {
  //   tabClick(api, 'a8')
  // });

	// elClick('a9', function () {
  //   tabClick(api, 'a9')
  // });

	// elClick('a10', function () {
  //   tabClick(api, 'a10')
  // });

	// elClick('a11', function () {
  //   tabClick(api, 'a11')
  // });

	// elClick('a12', function () {
  //   tabClick(api, 'a12')
  // });

  // generic alternative
  const elementNames = ['a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12']
  elementNames.forEach(name => {
    elClick(name, function () {
      tabClick(api, name)
    });
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
