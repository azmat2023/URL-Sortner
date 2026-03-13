// Copy short URL to clipboard
const link = document.querySelector('div a');

if (link) {
  // Copy button banana
  const copyBtn = document.createElement('button');
  copyBtn.textContent = 'Copy';
  copyBtn.classList.add('copy-btn');

  // link ke andar wrap karo
  link.style.display = 'flex';
  link.style.alignItems = 'center';
  link.style.justifyContent = 'space-between';
  link.style.gap = '10px';

  const urlText = document.createElement('span');
  urlText.textContent = link.textContent.trim();
  link.textContent = '';
  link.appendChild(urlText);
  link.appendChild(copyBtn);

  copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(urlText.textContent.trim()).then(() => {
      copyBtn.textContent = 'Copied!';
      copyBtn.style.opacity = '0.7';
      setTimeout(() => {
        copyBtn.textContent = 'Copy';
        copyBtn.style.opacity = '1';
      }, 2000);
    });
  });
}
