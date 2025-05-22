const sidepanelMap = new Map([
  ['Intro',                      { key: 'Intro',                      id: 'cc-section-intro',                     filename: 'intro' }],
  ['Overview',                   { key: 'Overview',                   id: 'cc-section-overview',                  filename: 'overview' }],
  ['Attributes',                 { key: 'Attributes',                 id: 'cc-section-attributes',               filename: 'attributes' }],
  ['Rolling and Resolution',     { key: 'Rolling and Resolution',     id: 'cc-section-rolling',                  filename: 'rolling' }],
  ['Abilities',                  { key: 'Abilities',                  id: 'cc-section-abilities',                filename: 'abilities' }],
  ['Blood Status',               { key: 'Blood Status',               id: 'cc-section-blood-status',             filename: 'bloodstatus' }],
  ['Characteristic Development', { key: 'Characteristic Development', id: 'cc-section-characteristic-development', filename: 'characteristicdevelopment' }],
  ['Characteristics',            { key: 'Characteristics',            id: 'cc-section-characteristics',           filename: 'characteristics' }],
  ['Parental',                   { key: 'Parental',                   id: 'cc-section-parental',                  filename: 'parental' }],
  ['Traits',                     { key: 'Traits',                     id: 'cc-section-traits',                    filename: 'traits' }],
  ['Skills',                     { key: 'Skills',                     id: 'cc-section-skills',                    filename: 'skills' }]
]);

function initSidepanel() {
  const items = document.querySelectorAll('.cc-sidepanel-item');
  if (!items.length) {
    console.warn('No sidepanel items found');
    return;
  }

  items.forEach(item => {
    item.addEventListener('click', () => {
      const label = item.textContent.trim();
      showSection(label);
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  items[0].click();
}

function showSection(label) {
  const entry = sidepanelMap.get(label);
  if (!entry) {
    console.warn('No section mapped for label:', label);
    return;
  }

  document.querySelectorAll('[id^="cc-section-"]').forEach(sec => {
    sec.classList.toggle('hidden', sec.id !== entry.id);
  });
}
