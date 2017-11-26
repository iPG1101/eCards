import {Balloon} from './balloon.js';
import {Record} from './record.js'

const balloons = new Array(16);

const animate = () => {
	for(const balloon of balloons) {
		balloon.show();
		balloon.update();
		/*
			Apparently using a 'with' statement here is "strictly forbidden"...
			Chrome throws the following (firefox and safari don't, but more universal is good.): 
			  Uncaught SyntaxError: Strict mode code may not include a with statement
		*/
	};
	setTimeout(animate, 1000/20);
};

window.onload = () => {
	for(var i = 0; i < balloons.length; i++){
		balloons[i] = new Balloon;
	}
	const me = (e)=>{
		e.target.style.width = e.target.style.height = '11.5%';
		e.target.setAttribute('animating', true);
		e.target.style.top = '1.5%';
	}, ml = (e)=>{
		e.target.style.width = e.target.style.height = '10%';
		e.target.setAttribute('animating', false);
		e.target.style.top = '0%'
	};
	new Record("im_only_sleeping").appendTo("center.thanks", {size: '10'}).on('mouseenter', me).on('mouseleave', ml);
	new Record("eleanor_rigby").appendTo("center.thanks", {size: '10'}).on('mouseenter', me).on('mouseleave', ml);
	new Record("within_without_you").appendTo("center.thanks", {size: '10'}).on('mouseenter', me).on('mouseleave', ml);
	animate();
};

/*
	This wouldn't be possible without:
		Great Uncle George, he introduced me to HTML5 on his old PowerBook... Mac OS X 10.6.8 FTW!
		W3Schools Online and Mozilla Dev. Network, which were important resources for me to learn HTML5/JS
*/