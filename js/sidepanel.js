function initSidepanel() {
  const sidepanelMap = new Map([
    ['Intro',    { id: 'cc-section-intro' }],
    ['Overview', { id: 'cc-section-overview' }],
    ['Attributes', { id: 'cc-section-attributes' }],
    ['Rolling',  { id: 'cc-section-rolling' }],
    ['Abilities', { id: 'cc-section-abilities' }],
    ['Blood Status', { id: 'cc-section-blood-status' }],
    ['Characteristic Development', { id: 'cc-section-characteristic-development' }],
    ['Characteristics', { id: 'cc-section-characteristics' }],
    ['Parental', { id: 'cc-section-parental' }],
    ['Traits',   { id: 'cc-section-traits' }],
    ['Skills',   { id: 'cc-section-skills' }]
  ])

  const items = document.querySelectorAll('.cc-sidepanel-item')
  if (!items.length) {
    console.warn('No sidepanel items found')
    return
  }

  items.forEach(function(item) {
    item.addEventListener('click', function() {
      const label = item.textContent.trim()
      const entry = sidepanelMap.get(label)
      if (!entry) {
        console.warn('Unmapped label:', label)
        return
      }

      showSection(entry.id)
      items.forEach(i => i.classList.remove('active'))
      item.classList.add('active')
    })
  })

  items[0].click()
}

function showSection(targetId) {
  const sections = document.querySelectorAll('[id^="cc-section-"]')
  sections.forEach(function(sec) {
    sec.classList.toggle('hidden', sec.id !== targetId)
  })
}

// this function receives baseUrl and version as arguments
function initMain(baseUrl, version) {
  loadAssets(baseUrl, version)
  loadSnippets(baseUrl, version)
  initSidepanel()
}