function loadAssets(baseUrl, version, assets) {
  var head = document.head;
  var fullPath = baseUrl + '@' + version + '/';

  assets.css.forEach(function(file) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = fullPath + 'css/' + file;
    head.appendChild(link);
  });

  assets.js.forEach(function(file) {
    var script = document.createElement('script');
    script.src = fullPath + 'js/' + file;
    script.defer = true;
    head.appendChild(script);
  });
}

// Example usage
loadAssets(
  'https://cdn.jsdelivr.net/gh/scyppan/CharmsCheck-Gameplay-and-Mechanics-page',
  'a25.5.20.002',
  {
    css: ['main.css', 'sidepanel.css'],
    js: ['sidepanel.js', 'inject.js']
  }
);