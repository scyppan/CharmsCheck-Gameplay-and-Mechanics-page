const sidepanelMap = new Map([
    ['Intro', { key: 'Intro', id: 'cc-section-intro', filename: 'intro' }],
    ['Overview', { key: 'Overview', id: 'cc-section-overview', filename: 'overview' }],
    ['Attributes', { key: 'Attributes', id: 'cc-section-attributes', filename: 'attributes' }],
    ['Rolling', { key: 'Rolling and Resolution', id: 'cc-section-rolling', filename: 'rolling' }],
    ['Abilities', { key: 'Abilities', id: 'cc-section-abilities', filename: 'abilities' }],
    ['Blood Status', { key: 'Blood Status', id: 'cc-section-blood-status', filename: 'bloodstatus' }],
    ['Characteristic Development', {
        key: 'Character Development',
        id: 'cc-section-character-development',
        filename: 'characterdevelopment'
    }],
    ['Characteristics', { key: 'Characteristics', id: 'cc-section-characteristics', filename: 'characteristics' }],
    ['Parental', { key: 'Parental', id: 'cc-section-parental', filename: 'parental' }],
    ['Traits', { key: 'Traits', id: 'cc-section-traits', filename: 'traits' }],
    ['Skills', { key: 'Skills', id: 'cc-section-skills', filename: 'skills' }]
]);

function getSnippetByKey(key) {
  for (const entry of sidepanelMap.values()) {
    if (entry.key === key) {
      return document.getElementById(entry.id)
    }
  }
  console.warn('No snippet found for key:', key)
  return null
}

function initSidepanel() {
  const items = document.querySelectorAll('.cc-sidepanel-item');
  if (!items.length) {
    console.warn('No sidepanel items found');
    return;
  }

  items.forEach(function(item) {
    item.addEventListener('click', function() {
      const label = item.textContent.trim();
      const entry = sidepanelMap.get(label);
      if (!entry) {
        console.warn('Unmapped label:', label);
        return;
      }

      showSection(entry.key);

      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  items[0].click();
}

function showSection(key) {
  const entry = Array.from(sidepanelMap.values()).find(e => e.key === key);
  if (!entry) {
    console.warn('No section mapped for key:', key);
    return;
  }

  const sections = document.querySelectorAll('[id^="cc-section-"]');
  sections.forEach(sec => {
    sec.classList.toggle('hidden', sec.id !== entry.id);
  });
}

// this function receives baseUrl and version as arguments
function initMain(baseUrl, version) {
    loadAssets(baseUrl, version)
    loadSnippets(baseUrl, version)
    initSidepanel()
}