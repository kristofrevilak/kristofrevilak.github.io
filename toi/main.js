let $start_h = $('.start-h');
let $start_t = $('.start-t');
let $start_box = $('.start-box');
let $start_g = $('.start-graphic');


let $explore_btn = $('.explore-btn');
let $exploring_btn = $('.exploring');
let $explore_btn_ciara = $('.ciara');


let $decide_btn = $('.decide-btn');
let $playas_btn = $('.playas');


let $expand_div = $('.expand-div');
let $expand_arr = $('.member-arrow img');
let $expand_content = $('.member-expand-content');

let $single_fact = $(".single-fact");
let $single_fact_arr = $(".academy-arrow")[0];

let $expand_btn = $(".expand");


$exploring_btn.click((e)=>{
	e.preventDefault();
	$('html,body').animate({
		scrollTop: $(".welcome-container").offset().top
}, 'slow');
});

$decide_btn.click((e)=>{
	e.preventDefault();
	$('html,body').animate({
		scrollTop: $(".value-container").offset().top
}, 'slow');
});

$playas_btn.on("click",(e)=>{
	e.preventDefault();
	$('html,body').animate({
		scrollTop: $(".team-container").offset().top
}, 'slow');
});

$expand_div.click((e)=>{
	e.preventDefault();
	let imgg = $("#" + e.currentTarget.id)[0].childNodes[3].childNodes[1];
	let blue_box = $("#" + e.currentTarget.id).parent().parent().parent().next().children()[1];
	if(imgg.attributes.src.nodeValue == "arrow_down.png"){
		let change_img_tween = TweenMax.set(imgg,{attr:{src:"arrow_up.png"}});
		let display_text_tween = TweenMax.set($("#" + e.currentTarget.id).next().next(),{css:{display:"block"}});
		if( screen.width >= 750 ){
			let display_box_tween = TweenMax.set(blue_box,{css:{display:"block"}});
		}
			
	} else{
		let change_img_tween = TweenMax.set(imgg,{attr:{src:"arrow_down.png"}});
		let hide_text_tween = TweenMax.set($("#" + e.currentTarget.id).next().next(),{css:{display:"none"}});
		if( screen.width >= 750 ){
			let display_box_tween = TweenMax.set(blue_box,{css:{display:"none"}});
		}
			
	}

	// let start_h_tween = TweenMax.to($start_h,1,{
	// 	ease: Power1.easeInOut,
	// 	css: {opacity: 1}
	// });
});

$single_fact.click((e)=>{
	e.preventDefault();
	let data_id = $(e.currentTarget).attr("data-id");
	let ele = $('*[data-id=' + data_id + ']');
	if(!ele.hasClass("active")){
		$(".active").removeClass("active");
		ele.addClass("active");
		let nheight = $('*[data-id="af0"]').offset().top;
		let heightt = Math.ceil($('*[data-id=' + data_id + ']').offset().top - nheight) + 20;
		$(".bullets-change ul").hide();
		$("#" + data_id).css("display","block");
	}
});

$expand_btn.click((e)=>{
	e.preventDefault();
	let data_id = $(e.currentTarget).attr("data-id");
	let ele = $('*[data-id=' + data_id + ']');
	if(!ele.hasClass("activated")){
		ele.addClass("activated");
		$("#" + data_id).css("display","block");
	}else{
		ele.removeClass("activated");
		$("#" + data_id).css("display","none");
	}
});

$explore_btn.mouseenter((e)=>{
	e.preventDefault();
	let explore_btn_hover_tween = TweenMax.to($explore_btn_ciara,.4,{
		ease: Power1.easeInOut,
		css: {marginTop: 30}
	});
}).mouseleave((e)=>{
	e.preventDefault();
	let explore_btn_hover_tween = TweenMax.to($explore_btn_ciara,.2,{
		ease: Power1.easeInOut,
		css: {marginTop: 10}
	});
});


$( document ).ready(() => {
	let start_h_tween = TweenMax.to($start_h,1,{
		ease: Power1.easeInOut,
		css: {opacity: 1}
	});
	let start_t_tween = TweenMax.to($start_t,1,{
		ease: Power1.easeInOut,
		css: {opacity: 1}
	});
	let start_b_tween = TweenMax.to($start_box,1,{
		ease: Power4. easeIn,
		delay: .5,
		css: {opacity: 1}
	});
	let start_g_tween = TweenMax.to($start_g,1,{
		ease: Power1.easeInOut,
		css: {opacity: 1}
	});
	let explore_btn_tween = TweenMax.to($explore_btn,1,{
		ease: Power1.easeInOut,
		delay: 1,
		css: {
			opacity: 1,
			marginTop: -50
		}
	});
});