const cssfiles   = ['main.css', 'sidepanel.css']
const jsfiles    = ['inject.js', 'sidepanel.js']
const htmlfiles  = [
  'intro','overview','attributes','rolling','abilities',
  'bloodstatus','characteristicdevelopment','characteristics',
  'parental','traits','skills'
]

function loadAssets(baseUrl, version) {
  const head     = document.head
  const fullPath = baseUrl + '@' + version + '/'

  cssfiles.forEach(function(file) {
    const link      = document.createElement('link')
    link.rel        = 'stylesheet'
    link.href       = fullPath + 'css/' + file
    head.appendChild(link)
  })

  jsfiles.forEach(function(file) {
    const script    = document.createElement('script')
    script.src      = fullPath + 'js/' + file
    script.defer    = true
    head.appendChild(script)
  })
}

function initMain(baseUrl, version) {
  loadAssets(baseUrl, version)
  loadSnippets(baseUrl, version)
  initSidepanel()
}