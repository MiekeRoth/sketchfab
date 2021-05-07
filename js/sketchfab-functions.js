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
      if(err) console.log(err)
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