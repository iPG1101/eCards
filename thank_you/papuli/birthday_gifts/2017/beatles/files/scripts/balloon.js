export class Balloon {
	show(){
		this.html.style.position = 'absolute';
		this.html.style.right = this.x + '%';
		this.html.style.top = this.y + '%';
		this.y += this.velY / 4;
		this.x += this.velX * 8;
		this.velX += this.velXModifer;
		/*
			Sorry about any confusion, but I consider Y=0 the top.
			This is because of my years of JavaScript/Canvas programming,
			and thats how they made it work *\(*v*)/* (*shrug*)
		*/
	}
	onclick(){
		this.audio.play();
	}
	update(){
		if(this.velX < 0.1) this.velXModifer += 0.05;
		else if(this.velX > 0.1) this.velXModifier -= 0.05;
		if(this.y < -20) {
			this.y += 130;
			this.velY = Math.random() * -2 - 1;
			this.x = Math.floor(Math.random()*100);
		}
	}
	constructor(src){
		let imageSource = src || ((arr)=>{
			return arr[Math.floor(Math.random()*arr.length)];
		})(["./files/images/blue_meanie.png", "./files/images/get_back.png", "./files/images/yellow_submarine.png"]);
		let audioSource = ((arr, imageSource)=>{
			return (arr[imageSource][Math.floor(Math.random()*arr[imageSource].length)]);
		})({
			"./files/images/blue_meanie.png": ["./files/audio/nowhere_man.mp3"],
			"./files/images/get_back.png": ["./files/audio/hope_passed_audition.mp3"],
			"./files/images/yellow_submarine.png": ["./files/audio/hole_in_pocket.mp3"]
		}, imageSource);
		this.audio = new Audio();
		this.audio.src = audioSource;
		this.audio.pause();
		this.x = Math.random()*100;
		this.y = 110 + Math.random() * 10;
		this.velY = Math.random() * -2 - 1;
		this.velX = Math.random() * 2 - 1;
		this.velXModifier = 1;
		this.image = imageSource;
		this.html = document.createElement('div');
		this.html.class = 'balloon';
		this.html.onclick = this.onclick.bind(this);
		this.html.id = (()=>{
			let id = "";
			while(id.length < 8){
				id += String.fromCharCode(Math.floor(Math.random()*52)+65);
				/*
					I used this to generate a unique ID (Ok, odds say it'll probably be unique).
					Let's figure out how many times each ID will appear:
						52 possible characters, 
						8 characters,
						Would that be 52^8? Calculator says 5.345972853*(10^13) in that case.
						Or 8^52? 9.134385233*(10^46)
					It's... unlikely.
					If you are reading this and my logic is wrong, let me know:
					 	iPG1101@aol.com
					  Thanks!

					 And while you're here, if you want explanation how something works,
					 email me at the same email adress (preferable line number and/or function or classname/file)
				*/
			}
			return id;
		})();
		this.html.style.backgroundColor = "rgb("+(()=>{
			let a = [];
			while(a.length<4){
				a.push(Math.floor(Math.random()*255));
			}
			return a.join(", ");
		})()+")";
		this.size = Math.floor(Math.random()*96+64) + 'pt';
		this.html.style.width = this.html.style.height = this.size;
		this.html.style['background-size'] = this.size + ' ' + this.size;
		this.html.style['border-radius'] = '25%';
		this.html.style.display = 'inline-block';
		this.html.style.backgroundColor = "#777";
		this.html.style.backgroundImage = "url("+this.image+")";
		this.string = {
			//
		};
		document.body.appendChild(this.html);
	}
}