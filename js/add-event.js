$(document).ready(function(){
	rollover();
	
	//************************
	//ロールオーバー
	function rollover() {
		$('img').bind('mouseover', function() {
			var src = $(this).attr('src').replace('-off', '-on');
			$(this).attr('src', src);
		});

		$('img').bind('mouseout', function() {
			var src = $(this).attr('src').replace('-on', '-off');
			$(this).attr('src', src);
		});
	};
});
