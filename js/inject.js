function loadSnippets(baseUrl, version) {
  const target = document.querySelector('main')
  if (!target) {
    console.error('<main> element not found')
    return
  }

  const fileUrls = htmlfiles.map(function(file) {
    return baseUrl + '@' + version + '/html/' + file + '.html'
  })

  function insertNext(i) {
    if (i >= fileUrls.length) return

    fetch(fileUrls[i])
      .then(function(r) { return r.text() })
      .then(function(html) {
        const section = document.createElement('section')
        section.innerHTML = html
        target.appendChild(section)
        insertNext(i + 1)
      })
      .catch(function(err) {
        console.error('Loading failed:', fileUrls[i], err)
        insertNext(i + 1)
      })
  }

  insertNext(0)
}