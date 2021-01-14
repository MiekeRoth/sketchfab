var version = '1.9.0';
var uid = 'ae1e1024819b48b6af331fbbd6db2eac';
var iframe = document.getElementById('api-frame');
var client = new window.Sketchfab(version, iframe);
client.init(uid, {
  autostart: 1,
  preload: 1,
  annotation: 0, // Usage: Setting to [1 – 100] will automatically load that annotation when the viewer starts.
  annotations_visible: 0, // Usage: Setting to 0 will hide annotations by default.
  autospin: 0, // Usage: Setting to any other number will cause the model to automatically spin around the z-axis after loading.
  autostart: 1, // Usage: Setting to 1 will make the model load immediately once the page is ready, rather than waiting for a user to click the Play button.
  cardboard: 0, // Usage: Start the viewer in stereoscopic VR Mode built for Google Cardboard and similar devices.
  camera: 1, // Usage: Setting to 0 will skip the initial animation that occurs when a model is loaded, and immediately show the model in its default position.
  preload: 1, // Usage: Setting to 1 will force all resources (textures) to download before the scene is displayed.
  ui_stop: 0, // Usage: Setting to 0 will hide the "Disable Viewer" button in the top right so that users cannot stop the 3D render once it is started.
  transparent: 0, // Usage: Setting to 1 will make the model's background transparent
  ui_animations: 0, // Usage: Setting to 0 will hide the animation menu and timeline.
  ui_annotations: 0, // Usage: Setting to 0 will hide the Annotation menu.
  ui_controls: 1, // Usage: Setting to 0 will hide all the viewer controls at the bottom of the viewer (Help, Settings, Inspector, VR, Fullscreen, Annotations, and Animations).
  ui_fullscreen: 1, // Usage: Setting to 0 will hide the Fullscreen button.
  ui_general_controls: 1, // Usage: Setting to 0 will hide main control buttons in the bottom right of the viewer (Help, Settings, Inspector, VR, Fullscreen).
  ui_help: 0, // Usage: Setting to 0 will hide the Help button.
  ui_hint: 1, // Usage: Setting to 0 will always hide the viewer hint animation ("click & hold to rotate"). Setting to 1 will show the hint the first time per browser session (using a cookie). Setting to 2 will always show the hint.
  ui_infos: 0, // Usage: Setting to 0 will hide the model info bar at the top of the viewer.
  ui_inspector: 0, // Usage: Setting to 0 will hide the inspector button.
  ui_settings: 0, // Usage: Setting to 0 will hide the Settings button.
  ui_vr: 0, // Usage: Setting to 0 will hide the View in VR button.
  ui_watermark_link: 0, // Usage: Setting to 0 remove the link from the Sketchfab logo watermark.
  ui_color: '00a8c0', // Usage: Setting to a hexidecimal color code (without the #) or a HTML color name will change the color of the viewer loading bar.
  ui_watermark: 0, // Usage: Setting to 0 remove the Sketchfab logo watermark.
  success: function(api){
    api.start();
    api.addEventListener('viewerready', function(){
      initc1(api);
    });
  },
  error: function(err){
    console.error('Houston we have a problem.', err);
  }
});


