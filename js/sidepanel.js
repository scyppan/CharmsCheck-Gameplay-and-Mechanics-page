const sidepanelMap = new Map([
  ['Intro',                      { key: 'Intro',                      id: 'cc-section-intro',                     filename: 'intro' }],
  ['Overview',                   { key: 'Overview',                   id: 'cc-section-overview',                  filename: 'overview' }],
  ['Attributes',                 { key: 'Attributes',                 id: 'cc-section-attributes',               filename: 'attributes' }],
  ['Rolling and Resolution',     { key: 'Rolling and Resolution',     id: 'cc-section-rolling-and-resolution',   filename: 'rolling' }],
  ['Abilities',                  { key: 'Abilities',                  id: 'cc-section-abilities',                 filename: 'abilities' }],
  ['Blood Status',               { key: 'Blood Status',               id: 'cc-section-blood-status',              filename: 'bloodstatus' }],
  ['Characteristic Development', { key: 'Characteristic Development', id: 'cc-section-characteristic-development',filename: 'characteristicdevelopment' }],
  ['Characteristics',            { key: 'Characteristics',            id: 'cc-section-characteristics',            filename: 'characteristics' }],
  ['Parental',                   { key: 'Parental',                   id: 'cc-section-parental',                  filename: 'parental' }],
  ['Traits',                     { key: 'Traits',                     id: 'cc-section-traits',                     filename: 'traits' }],
  ['Skills',                     { key: 'Skills',                     id: 'cc-section-skills',                     filename: 'skills' }]
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
      showSection(key);
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // activate the first panel
  const firstKey = items[0].textContent.trim();
  showSection(firstKey);
  items[0].classList.add('active');
}

function showSection(key) {console.log(key);
  const entry = sidepanelMap.get(key);console.log(entry);
  if (!entry) {
    console.warn('No section mapped for key:', key);
    return;
  }

  // hide all snippet wrappers
  const wrappers = document.querySelectorAll('main > section');
  wrappers.forEach(w => w.classList.add('hidden'));

  // find index via filename
  const idx = htmlfiles.indexOf(entry.filename);
  if (idx === -1) {
    console.warn('Filename not in htmlfiles:', entry.filename);
    return;
  }

  // show the matching wrapper
  wrappers[idx].classList.remove('hidden');
}
