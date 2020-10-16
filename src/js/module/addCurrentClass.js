export default function () {

  //現在のパスの .nav-main 内のリンクに .current を追加　.throwgh-current があるものは除く
  const path = location.pathname
  const mainLink = document.querySelectorAll('.nav a');

  mainLink.forEach( (v, i) => {
    if (v.getAttribute('href') == path) {
      if (!v.classList.contains('throwgh')) {
        v.classList.add('is-current');
      }
    }
  });

}
