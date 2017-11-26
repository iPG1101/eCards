export class Record {
	on(a,b){
		this.disc.addEventListener(a,b.bind(this));
		return this;
	}
	animate(){
		if(this.disc.getAttribute('animating')=='true'){
			this.r+=10;
			this.disc.style.transform = 'rotate('+this.r+'deg)';
			if(this.audio.paused) {
				this.audio.play();
			}
		} else {
			if(!this.audio.paused) this.audio.pause();
			this.disc.style.transform = 'rotate(0deg)';
		}
		setTimeout(this.animate.bind(this), 75);
	};
	appendTo(elem, style){
		let es = document.querySelectorAll(elem);
		for(var e of es) {
			this.disc.style.width = this.disc.style.height = style.size + 'vw';
			e.appendChild(this.disc);
		}
		for(var i in style) {
			this.disc.style[i] = style[i];
		}
		return this;
	}
	constructor(songName){
		this.animating = false;
		this.r = 0;
		this.disc = new Image();
		this.disc.src = './files/images/yellow_sub_record.png';
		this.audio = new Audio();
		this.audio.src = './files/audio/'+songName+'.mp3';
		this.disc.style.width = this.disc.style.height = '10vw'; 
		this.disc.style.position = 'relative';
		this.disc.style.top = '1.5%';
		this.animate();
	}
}