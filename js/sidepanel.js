function initSidepanel() {
  var items = document.querySelectorAll('.cc-sidepanel-item');
  if (!items.length) {
    console.warn('No sidepanel items found');
    return;
  }

  // attach click handlers
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
      // build a slug from the exact button text
      var key = this
        .textContent
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');  // strip any punctuation

      showSection(key);

      // update “active” state
      for (var j = 0; j < items.length; j++) {
        items[j].classList.remove('active');
      }
      this.classList.add('active');
    });
  }

  // kick‐off on the first panel
  items[0].click();
}

function showSection(key) {
  // match any element whose class list contains “cc-section-…”
  var sections = document.querySelectorAll('[class*="cc-section-"]');
  for (var i = 0; i < sections.length; i++) {
    var sec = sections[i];
    if (sec.classList.contains('cc-section-' + key)) {
      sec.classList.remove('hidden');
    } else {
      sec.classList.add('hidden');
    }
  }
}

document.addEventListener('DOMContentLoaded', initSidepanel);
