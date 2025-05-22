const version ='a25.5.22.003'

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

loadAssets(
  'https://cdn.jsdelivr.net/gh/scyppan/CharmsCheck-Gameplay-and-Mechanics-page',
  version,
  {
    css: ['main.css', 'sidepanel.css'],
    js: ['sidepanel.js', 'inject.js']
  }
);


loadRepoSnippets({
  targetSelector: 'main',
  repo:    'scyppan/CharmsCheck-Gameplay-and-Mechanics-page',
  version: version,
  files:   ['intro', 'overview', 'attributes', 'rolling', 'abilities',
    'bloodstatus', 'characteristicdevelopment', 'characteristics',
    'parental', 'traits', 'skills']
});