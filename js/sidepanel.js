const sidepanelMap = new Map([
  ['Intro', { key: 'Intro', id: 'cc-section-intro', filename: 'intro' }],
  ['Overview', { key: 'Overview', id: 'cc-section-overview', filename: 'overview' }],
  ['Attributes', { key: 'Attributes', id: 'cc-section-attributes', filename: 'attributes' }],
  ['Rolling and Resolution', { key: 'Rolling and Resolution', id: 'cc-section-rolling-and-resolution', filename: 'rolling' }],
  ['Abilities', { key: 'Abilities', id: 'cc-section-abilities', filename: 'abilities' }],
  ['Blood Status', { key: 'Blood Status', id: 'cc-section-blood-status', filename: 'bloodstatus' }],
  ['Character Development', { key: 'Character Development', id: 'cc-section-development', filename: 'development' }],
  ['Characteristics', { key: 'Characteristics', id: 'cc-section-characteristics', filename: 'characteristics' }],
  ['Parental', { key: 'Parental Values', id: 'cc-section-parental', filename: 'parental' }],
  ['Traits', { key: 'Traits', id: 'cc-section-traits', filename: 'traits' }],
  ['Skills', { key: 'Skills', id: 'cc-section-skills', filename: 'skills' }]
]);

function initSidepanel() {
  const items = document.querySelectorAll('.cc-sidepanel-item');
  if (!items.length) {
    console.warn('No sidepanel items found');
    return;
  }

  items.forEach(item => {
    item.addEventListener('click', () => {
      const key = item.textContent.trim();
      console.log('initSidepanel clicked key:', key);
      showSection(key);
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  const firstKey = items[0].textContent.trim();
  console.log('initSidepanel initial key:', firstKey);
  showSection(firstKey);
  items[0].classList.add('active');
}

function showSection(key) {
  console.log('showSection key:', key);
  const entry = sidepanelMap.get(key);
  console.log('mapped entry:', entry);

  if (!entry) {
    console.warn('No section mapped for key:', key);
    return;
  }

  // hide all sections
  document.querySelectorAll('[id^="cc-section-"]').forEach(div => {
    div.classList.add('hidden');
  });

  // reveal the target
  const targetDiv = document.getElementById(entry.id);
  if (!targetDiv) {
    console.warn('Element not found for id:', entry.id);
    return;
  }
  console.log('revealing section:', entry.id);
  targetDiv.classList.remove('hidden');
}