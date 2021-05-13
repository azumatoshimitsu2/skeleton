export default function () {

  //.nav 内の現在のページリンクに @aria-current を追加　.js-throwgh があるものは除く
  const path = location.pathname
  const mainLink = document.querySelectorAll('.nav a');

  mainLink.forEach( (v, i) => {
    if (v.getAttribute('href') == path) {
      if (!v.classList.contains('js-throwgh')) {
        v.setAttribute('aria-current', 'page');
      }
    }
  });

}
