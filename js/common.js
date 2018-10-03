/* 스크롤시 menubar Toggle */
$('.menu-bar').each(function() {
	$(function( $ ) {
		$(function() {
			$( window ).scroll(function() {
				$('.menu-bar').addClass('hide');
				clearTimeout( $.data( this, "scrollCheck" ) );
				$.data( this, "scrollCheck", setTimeout(function() {
					$('.menu-bar').removeClass('hide');
				}, 400) );
			});
		});
	});
})

// 상세화면 상단탭바 스크롤에따라 색상변경
function detail_header() {
	scl = $(window).scrollTop();
	var culate_scl = 100 - scl;
	var $btnBLK = $('.header-btnBLK');
	var $btnWHITE = $('.header-btnWHITE');
	if($(window).scrollTop()>=100) {
		$('.detail-header').addClass('fixed').css('background-color','rgba(255,255,255,1)');
		$btnBLK.css('opacity','1');
		$btnWHITE.css('opacity','0');
	} else if($(window).scrollTop()>0){
		$('.detail-header').addClass('fixed').css('background-color','rgba(255,255,255,0.'+scl+')');
		$btnBLK.css('opacity',(scl/100));
		$btnWHITE.css('opacity',(culate_scl/100));
	} else {
		$('.detail-header').removeClass('fixed').css('background-color','rgba(255,255,255,0)');
		$btnBLK.css('opacity','0');
		$btnWHITE.css('opacity','1');
	}
}
// Tab간 컨텐츠 이동
var tab_scl,scl;
function tab_position() {
	scl = $(window).scrollTop();
	if(scl > tab_scl ) {
		$('.tab').addClass('tab-fixed');
	} else {
		$('.tab').removeClass('tab-fixed');
	}
}
$('.tab').each(function() {
	tab_scl = $('.tab').offset().top;
	$(".tab ul li a").click(function () {
		$(".tab li").removeClass("active");
		$(this).parent().addClass("active");
		$(".tab_content").hide()
		var activeTab = $(this).attr("rel");
		$('#'+activeTab).fadeIn()
	});
});
 $(window).resize(function () {
    tab_scl = $('.tab').offset().top;
 });
// 스크롤시에 Tab버튼 상단으로이동	
tab_position();
//detail_header();
$(window).scroll(function(){
	tab_position();
	//if ($(".detail-header").length >0) detail_header();
})

// 모바일공유 팝업
function share_show() {
	$('.bg-overlay').stop().show().animate({opacity: 1}, 300);
	$('.mobile-share').stop().show().animate({opacity: 1}, 300);
}
function share_hide() {
	$('.bg-overlay').stop().animate({opacity: 0}, 300).hide();
	$('.mobile-share').stop().show().animate({opacity: 0}, 300).hide();;
}

// 앱 다운로드 팝업
function appinstall_show(txt) {
	$('.bg-overlay').stop().show().animate({opacity: 1}, 300);
	$('.mobile-app-install').css('bottom','0');
	$('#app_txt').html(txt);
}
function appinstall_hide() {
	$('.bg-overlay').stop().animate({opacity: 0}, 300).hide();
	$('.mobile-app-install').css('bottom','-400px');
}
$('.bg-overlay').each(function() {
	$('.bg-overlay').click(function(){
		appinstall_hide();
		share_hide();
	});
});

// text-header 스크롤에 따라 이동
if ($('.text-header').length > 0) {
	$('.list-type-1').css('padding-top',$('.text-header').height()+'px')
}