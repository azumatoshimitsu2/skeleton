function addARIACurrent () {

  //.nav-main 内の現在のページのリンクに @aria-current を追加　.js-throwgh があるものは除く
  const path = location.pathname
  const mainLink = document.querySelectorAll('.l-nav__list a');

  [].forEach.call(mainLink, el => {
    if (el.getAttribute('href') == path) {
      if (!el.classList.contains('js-throwgh')) {
        el.setAttribute('aria-current', 'page');
      }
    }
  });
}

export {addARIACurrent};
