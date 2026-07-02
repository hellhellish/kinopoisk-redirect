function addButton() {

  if (window.location.hostname.includes('ss')) return;

  const btn = document.createElement('button');
  btn.className = 'kss-redirect-btn';
  btn.title = 'Смотреть';

  const img = document.createElement('img');
  img.src = chrome.runtime.getURL('icon.png');
  img.style.width = '28px';
  img.style.height = '28px';
  btn.appendChild(img);

  btn.addEventListener('click', () => {
    const newUrl = window.location.href.replace('kino', 'ss');
    window.location.href = newUrl;
  });

  document.body.appendChild(btn);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addButton);
} else {
  addButton();
}