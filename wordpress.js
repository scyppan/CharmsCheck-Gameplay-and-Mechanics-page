const version = 'a25.5.22.003'
const baseUrl = 'https://cdn.jsdelivr.net/gh/scyppan/CharmsCheck-Gameplay-and-Mechanics-page';

document.addEventListener('DOMContentLoaded', function () {

  var mainScript = document.createElement('script')
  mainScript.src   = baseUrl + '@' + version + '/main.js'
  mainScript.defer = true
  mainScript.onload = function() {
    initMain(baseUrl, version)
  }
  document.head.appendChild(mainScript)
})