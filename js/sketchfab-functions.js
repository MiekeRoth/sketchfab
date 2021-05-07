var store = {}

var getNodeMap = function(api) {
  api.getNodeMap(function(err, nodes) {
    if (!err) {
      store.nodemap = nodes
    }
  });  
}

var setVisibilityByNames = function(api, names, doShow) {
  let nodes = []
  // collect all objects which match the name
  for (let key in store.nodemap) {
    const node = store.nodemap[key]
    if (node.type === 'MatrixTransform') {
      if (names.includes(node.name)) {
        nodes.push(node)
      }
    }
  }
  // Show or hide them
  nodes.forEach(node => {
    if (doShow) {
      api.show(node.instanceID)
    }else {
      api.hide(node.instanceID)
    }
  });
}

var setVisibilityGroup = function(api, groupname, optionname) {
  // first hide all the objects which are used in the visibilitygroup
  visibilitygroups[groupname].options.forEach(option => {
    setVisibilityByNames(api, option.objectnames, false)
  });

  // then show the objects of a single option
  var mygroup = visibilitygroups.vertebrae.options.find(item => item.name === optionname)
    setVisibilityByNames(api, mygroup.objectnames, true)
}

var setAnnotationVisibility = function(api, annotationID, doShow) {
  if (doShow) {
		api.showAnnotation(annotationID, function(err, index) {
      if(err) console.log(err)
    });
    
  } else {
    api.hideAnnotation(annotationID, function(err, index) {
      if (err) console.log(err)
    });
  }
}

var hideAllAnnotations = function(api) {
  api.getAnnotationList(function(err, annotations) {
    if (!err) {
      for (let n = 0; n < annotations.length; n++) {
        setAnnotationVisibility(api, n, false)
      }
    }
  });
}

function getAnimations(api) {
  api.getAnimations((err, animations) => {
    if (err) console.log(err)
    store.animations = animations
  })
}

function setCurrentAnimationByUID(api, UID) {
  return new Promise ((resolve, reject) => {
    if (api) {
      api.setCurrentAnimationByUID(UID, err => {
        if (err) reject(err)
        resolve()
      })
    } else reject()
  })
}

function playAnimation(api, animationID) {
  setCurrentAnimationByUID(api, store.animations[animationID][0])
  .then(() => {
    // before starting the animation, reverse to the start
    api.seekTo(0.0, err => {
      if (err) console.log(err)
      api.play(err => {
        if (err) console.log(err)
      })
    });
  })
}

function pauseAnimation(api) {
  api.pause(err => {
    if (err) console.log(err)
  })
}

function tabClick(api, eventID) {
  // Each tab has similar actions. The specific data is just different. This click event
  // handles all actions based on a data object with a specific ID

  // get the bundle of data for this event
  const data = eventData.find(item => item.name === eventID)

  // execute the actions for this data bundle
  if (data.visibilitygroup && data.visibilityoption) setVisibilityGroup(api, data.visibilitygroup, data.visibilityoption)
  if (data.annotation !== null) api.gotoAnnotation(data.annotation, { preventCameraAnimation: false, preventCameraMove: false })
  if (data.animation != null) {
    playAnimation(api, data.animation)
  } else {
    pauseAnimation(api)
  }
}