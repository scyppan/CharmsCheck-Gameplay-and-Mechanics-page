function loadSnippets(baseUrl, version) {
  return new Promise(resolve => {
    const target = document.querySelector('main');
    if (!target) {
      console.error('<main> element not found');
      return resolve();
    }

    const fileUrls = htmlfiles.map(file =>
      baseUrl + '@' + version + '/html/' + file + '.html'
    );

    function insertNext(i) {
      if (i >= fileUrls.length) return resolve();
      fetch(fileUrls[i])
        .then(r => r.text())
        .then(html => {
          const section = document.createElement('section');
          section.innerHTML = html;
          target.appendChild(section);
          insertNext(i + 1);
        })
        .catch(() => insertNext(i + 1));
    }

    insertNext(0);
  });
}