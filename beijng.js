window.onload =function(){
	var box = document.getElementById('bgbox');
		function Ball(){
			this.dom = null;
			
			this.init();//初始化
			
		}
		Ball.prototype.init = function(){
			this.dom = document.createElement('div');
			box.appendChild(this.dom)
			this.dom.className = 'ball';
			do{
			this.speed = getRandom(-4,4);//水平的增速
			this.speed1 = getRandom(-4,4);
		}while(this.speed == 0 && this.speed1 == 0);
			this.r = getRandom(0,255);
			this.g = getRandom(0,255);
			this.b = getRandom(0,255);
			this.dom.style.background ='rgb('+this.r+','+this.g+','+this.b+')';
			//设定半径
			this.r = this.dom.offsetWidth/2;
			//设定小球圆心x，y的值
			this.x = getRandom(this.r,box.offsetWidth-this.r);
			this.y = getRandom(this.r,box.offsetHeight-this.r);

			this.dom.style.left = this.x - this.r + 'px';
			this.dom.style.top = this.y - this.r + 'px';
			this.update();
		}
		Ball.prototype.update = function(){
			var  self = this
			this.timer =setInterval(function(){self.x += self.speed;
			self.y+=self.speed1;
			//是否碰左右壁
			if (self.x<self.r||self.x>box.offsetWidth-self.r) {
				self.remove()
				clearInterval(self.timer);
				self.init();
				}
			//是否碰上下壁
			if (self.y<self.r || self.y>box.offsetHeight-self.r)
			 {self.remove()
			 	clearInterval(self.timer);
			 	self.init();

			 }
				//反应到dom身上
			self.dom.style.left = self.x - self.r + 'px';
			self.dom.style.top = self.y - self.r + 'px';},200)
			
		}
		Ball.prototype.remove=function(){
			box.removeChild(this.dom);
		}
		

		function getRandom(min,max){
			return Math.floor(Math.random()*(max-min+1)+min);
		}
	 for (var i = 0; i < 20; i++) {
		 new Ball();
	}}
	