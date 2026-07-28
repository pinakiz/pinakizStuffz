/* Runs on every page. Builds the sidebar nav (and, on the home
   page, the article cards) from ARTICLES in articles-data.js. */

const SECTION_LABEL = { blog: 'Blog', paper: 'Paperself' };

function bySection(section){
  return ARTICLES.filter(a => a.section === section);
}

function currentFile(){
  const path = location.pathname.split('/').pop();
  return path || 'index.html';
}

function renderNav(){
  const here = currentFile();
  ['blog', 'paper'].forEach(section => {
    const container = document.getElementById('nav-' + section);
    if(!container) return;
    const list = bySection(section);
    if(!list.length){
      container.innerHTML = '<div class="empty-note" style="padding:4px 0; font-size:12.5px;">Nothing here yet</div>';
      return;
    }
    container.innerHTML = list.map(a => {
      const active = a.url === here ? ' active' : '';
      return `<a class="nav-link sub${active}" href="${a.url}">${a.title}</a>`;
    }).join('');
  });
}

function renderCards(section, containerId){
  const container = document.getElementById(containerId);
  if(!container) return;
  const list = bySection(section).slice(0, 3);
  if(!list.length){
    container.innerHTML = `<div class="empty-note">No ${SECTION_LABEL[section].toLowerCase()} entries yet`;
    return;
  }
  container.innerHTML = list.map(a => `
    <a class="entry-card" href="${a.url}">
      <div>
        <div class="entry-title">${a.title}</div>
        <div class="entry-meta">${a.excerpt}</div>
      </div>
      <span class="entry-tag">${a.tag}</span>
    </a>
  `).join('');
  container.querySelectorAll('.entry-card').forEach((card, i) => {
    setTimeout(() => card.classList.add('revealed'), 100 + i * 90);
  });
}

function goToLatest(section){
  const list = bySection(section);
  if(list.length) window.location.href = list[0].url;
}

function toggleSidebar(){
  document.getElementById('shell').classList.toggle('collapsed');
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderCards('blog', 'blog-cards');
  renderCards('paper', 'paper-cards');
});
