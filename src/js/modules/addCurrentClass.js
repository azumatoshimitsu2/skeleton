export default function(){

  //現在のパスの .nav-main 内のリンクに .current を追加　.throwgh-current があるものは除く
  let path = location.pathname

  $('.nav-main a').each(function() {
    if($(this).attr('href') == path) {
		if(!$(this).hasClass('throwgh-current')) {
    		$(this).addClass('current');
    	}
    }
  });
}