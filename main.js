const cssfiles   = ['main.css', 'sidepanel.css']
const jsfiles    = ['inject.js', 'sidepanel.js']
const htmlfiles  = [
  'intro','overview','attributes','rolling','abilities',
  'bloodstatus','development','characteristics',
  'parental','traits','skills'
]

function loadAssets(baseUrl, version) {
  return new Promise((resolve, reject) => {
    const head = document.head;
    const fullPath = baseUrl + '@' + version + '/';
    const total = cssfiles.length + jsfiles.length;
    let loaded = 0;

    function checkDone() {
      if (++loaded === total) resolve();
    }

    if (total === 0) return resolve();

    cssfiles.forEach(function(file) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = fullPath + 'css/' + file;
      link.onload = checkDone;
      link.onerror = reject;
      head.appendChild(link);
    });

    jsfiles.forEach(function(file) {
      const script = document.createElement('script');
      script.src = fullPath + 'js/' + file;
      script.defer = true;
      script.onload = checkDone;
      script.onerror = reject;
      head.appendChild(script);
    });
  });
}

// initMain now awaits both
async function initMain(baseUrl, version) {
  await loadAssets(baseUrl, version);
  await loadSnippets(baseUrl, version);
  initSidepanel();
}