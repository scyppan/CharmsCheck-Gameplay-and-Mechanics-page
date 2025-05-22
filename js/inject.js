function loadHtmlSnippets(targetSelector, fileUrls, wrapperTagName) {
  var target = document.querySelector(targetSelector);
  var wrapperTag = wrapperTagName || 'section';

  function insertNext(index) {
    if (index >= fileUrls.length) return;

    fetch(fileUrls[index])
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        var wrapper = document.createElement(wrapperTag);
        wrapper.innerHTML = html;
        target.appendChild(wrapper);
        insertNext(index + 1);
      })
      .catch(function(error) {
        console.error('Error loading', fileUrls[index], error);
        insertNext(index + 1);
      });
  }

  insertNext(0);
}

function loadRepoSnippets(options) {
  var repo    = options.repo;
  var version = options.version;
  var folder  = options.folder || 'html';
  var target  = options.targetSelector;
  var files   = options.files;
  var wrapper = options.wrapperTagName;

  var baseUrl = 'https://cdn.jsdelivr.net/gh/'
              + repo + '@' + version + '/' + folder;
  var urls = files.map(function(name) {
    return baseUrl + '/' + name + '.html';
  });

  loadHtmlSnippets(target, urls, wrapper);
}

loadRepoSnippets({
  targetSelector: 'main',
  repo:    'scyppan/CharmsCheck-Gameplay-and-Mechanics-page',
  version: 'a25.5.20.004',
  files:   ['intro', 'overview', 'attributes', 'rolling', 'abilities',
    'bloodstatus', 'characteristicdevelopment', 'characteristics',
    'parental', 'traits', 'skills']
});