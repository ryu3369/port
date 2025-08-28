// 各コンポーネントを読み込む関数
function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

window.addEventListener('DOMContentLoaded', () => {
  loadComponent('header', 'components/header.html');
  loadComponent('hero', 'components/hero.html');
  loadComponent('skills', 'components/skills.html');
  loadComponent('profile', 'components/profile.html');
  loadComponent('portfolio', 'components/portfolio.html');
  loadComponent('contact', 'components/contact.html');
  loadComponent('footer', 'components/footer.html');
});
