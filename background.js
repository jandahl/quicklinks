chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('quicklinks.htm', {
    'width': 400,
    'height': 500
  });
});
