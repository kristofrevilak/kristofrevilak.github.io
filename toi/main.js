let $start_h = $('.start-h');
let $start_t = $('.start-t');
let $start_box = $('.four-logo');
let $start_g = $('.start-graphic');


let $explore_btn = $('.explore-btn');
let $explore_text = $('.explore-text');
let $exploring_btn = $('.exploring');
let $explore_btn_ciara = $('.ciara');


let $img1 = $(".four-logo-img img");
let $img2 = $(".all-single-logo img");


let $trust_h = $('.trust-header');


let $thinking = $(".thinking .turn");
let $profit = $(".profit .norm");
let $science = $(".science .norm");
let $results = $(".results .turn");


let $decide_btn = $('.decide-btn');
let $playas_btn = $('.playas');


let $expand_div = $('.expand-div');
let $expand_arr = $('.member-arrow img');
let $expand_content = $('.member-expand-content');
let $expand_sipka = $("")

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
		let change_img_tween = TweenMax.to(imgg,.1,{
			ease: Power4.ease,
			attr:{src:"arrow_up.png"}
		});
		let display_text_tween = TweenMax.to($("#" + e.currentTarget.id).next().next(),.1,{
			ease: Power4.easeOut,
			css:{display:"block"}
		});
		if( screen.width >= 750 ){
			let display_box_tween = TweenMax.set(blue_box,{autoAlpha: 1, display:'block'});
		}
			
	} else{
		let change_img_tween = TweenMax.to(imgg,.1,{
			ease: Power2.ease,
			attr:{src:"arrow_down.png"}
		});
		let hide_text_tween = TweenMax.to($("#" + e.currentTarget.id).next().next(),.1,{
			ease: Power4.easeOut,
			css:{display:"none"}
			
	});;
		if( screen.width >= 750 ){
			let display_box_tween = TweenMax.set(blue_box,{autoAlpha: 0, display:'none'});
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
		let displaying = ()=>{
			
			ele.addClass("active");
			$(".bullets-change ul").hide();
			$("#" + data_id).css("display","block");
		}
		$(".active").removeClass("active");
		let nheight = $('*[data-id="af0"]').offset().top;
		let heightt = Math.ceil($('*[data-id=' + data_id + ']').offset().top - nheight) + 30;
		console.log(heightt);
		
		let move_arrow_tween = TweenMax.to($single_fact_arr,.6,{
			css:{
				top: heightt,
			},
			onComplete: displaying
		});
		
		
	}
});

$expand_btn.click((e)=>{
	e.preventDefault();
	let data_id = $(e.currentTarget).attr("data-id");
	let ele = $('*[data-id=' + data_id + ']');
	let arrow = ele[0].children[1];
	
	if(!ele.hasClass("activated")){
		let completed = ()=>{
			ele.addClass("activated");
		
			$("#" + data_id).css("display","block");
		}
		let arrow_tween = TweenMax.to(arrow,.3,{
			css:{
				ease: Power4.easeInOut,
				transform: "rotate(90deg)"
			},
			onComplete: completed
		})
	
	}else{
		let completed = ()=>{
			ele.removeClass("activated");
			$("#" + data_id).css("display","none");
		}
		let arrow_tween = TweenMax.to(arrow,.3,{
			css:{
				ease: Power4.easeInOut,
				transform: "rotate(0deg)"	
			}, 
			force3D:false,
			onComplete: completed
		})
		
	}
});

$explore_btn.mouseenter((e)=>{
	e.preventDefault();
	let explore_btn_hover_tween = TweenMax.to($explore_btn_ciara,.4,{
		ease: Power1.easeInOut,
		css: {marginTop: 30}
	});
	let explore_btn_text_hover_tween = TweenMax.to($explore_text,.3,{
		ease: Power1.easeInOut,
		css: {top: -5}
	});
}).mouseleave((e)=>{
	e.preventDefault();
	let explore_btn_hover_tween = TweenMax.to($explore_btn_ciara,.2,{
		ease: Power1.easeInOut,
		css: {marginTop: 10}
	});
	let explore_btn_text_hover_tween = TweenMax.to($explore_text,.3,{
		ease: Power1.easeInOut,
		css: {top: 0}
	});
});


// $img1.mouseenter((e)=>{
// 	e.preventDefault();
// 	let live_tween = TweenMax.to($img1,1,{
// 		ease: Power3.easeIn,
// 		css: {
// 			filter: "none"
// 		}
// 	})
// }).mouseleave((e)=>{
// 	e.preventDefault();
// 	let live_tween = TweenMax.to($img1,1,{
// 		ease: Power3.easeIn,
// 		css: {
// 			filter: "grayscale(100%)"
// 		}
// 	})
// });

// $img2.mouseenter((e)=>{
// 	e.preventDefault();
// 	let live_tween = TweenMax.to($img2,1,{
// 		ease: Power3.easeIn,
// 		css: {
// 			filter: "none"
// 		}
// 	})
// }).mouseleave((e)=>{
// 	e.preventDefault();
// 	let live_tween = TweenMax.to($img2,1,{
// 		ease: Power3.easeOut,
// 		css: {
// 			filter: "grayscale(100%)"
// 		}
// 	})
// });

$( document ).ready(() => {
	let start_h_tween = TweenMax.to($start_h,1,{
		ease: Power1.easeInOut,
		css: {opacity: 1}
	});
	let start_t_tween = TweenMax.to($start_t,1,{
		ease: Power1.easeInOut,
		css: {opacity: 1}
	});
	let thinking_tween = TweenMax.to($thinking,1,{
		ease: Power4. easeIn,
		delay: .3,
		css: {
			opacity: 1,
			left: "5%"
		}
	})
	let results_tween = TweenMax.to($results,1,{
		ease: Power4. easeIn,
		delay: .8,
		css: {
			opacity: 1,
			left: 0
		}
	})
	let profit_tween = TweenMax.to($profit,1,{
		ease: Power4. easeIn,
		delay: 1.3,
		css: {
			opacity: 1,
			right: "15%"
		}
	})
	let science_tween = TweenMax.to($science,1,{
		ease: Power4. easeIn,
		delay: 1.8,
		css: {
			opacity: 1,
			right: "5%"
		}
	})
	
	let start_b_tween = TweenMax.to($start_box,1,{
		ease: Power4. easeIn,
		delay: 2.5,
		css: {opacity: 1}
	});
	let start_g_tween = TweenMax.to($start_g,1,{
		ease: Power1.easeInOut,
		css: {opacity: 1}
	});
	let trust_h_tween = TweenMax.to($trust_h,1,{
		ease: Power1.easeInOut,
		delay: 2.75,
		css: {opacity: 1}
	});
	let explore_btn_tween = TweenMax.to($explore_btn,1,{
		ease: Power1.easeInOut,
		delay: 3.5,
		css: {
			opacity: 1,
			marginTop: -50
		}
	});
});