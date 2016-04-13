function init(){
	document.getElementById("status").innerHTML = "init";	

	var canvas = document.getElementById("canvas");
	if(canvas.getContext) {
		var ctx = canvas.getContext("2d");
		
		// to fill a rectangle
		ctx.fillStyle="#FAEBD7";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// to fill another rectangle
		ctx.fillStyle="#AF002A";
		ctx.fillRect(100, 100, 50, 50);
		
		// to draw a canvas without filling it
		ctx.lineWidth = 5;
		ctx.strokeStyle = "#A4C639";
		ctx.strokeRect(120, 120, 50, 50);
		
		ctx.fillStyle="#00308F";
		// draw a circle with Path()
		ctx.beginPath();
		// args: x, y, radius, angle, PI, true (for counter clockwise)
		ctx.arc(200, 200, 50, 0, Math.PI*2, true);
		// actually filling the canvas
		ctx.fill();
		
		ctx.fillStyle = "#2b4eff";
		ctx.beginPath();
		ctx.moveTo(350, 200);
		ctx.lineTo(400, 50);
		ctx.lineTo(450, 200);
		ctx.lineTo(400, 250);
		ctx.closePath();
		
		ctx.lineWidth = 20;
		ctx.strokeStyle = "#D0FF14";
		ctx.beginPath();
		ctx.moveTo(350, 200);
		ctx.lineTo(400, 50);
		ctx.lineTo(450, 200);
		ctx.lineTo(400, 250);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
		
		var linGrad = ctx.createLinearGradient(300, 100, 500, 500);
		
		linGrad.addColorStop(0, "#D0FF14");
		linGrad.addColorStop(0.5, "#00308F");
		linGrad.addColorStop(1, "#D0FF14");
		//linGrad.addColorStop(1.5, "D0FF14");
		
		ctx.fillStyle = linGrad;
		ctx.fillRect(500, 20, 100, 120);
		
		// rgba: 100, 150, 120, 0.5 (opaque, opacity)
		ctx.fillStyle = "rgba(10, 150, 255, 0.5)";
		ctx.fillRect(620, 20, 100, 120);
		
		// create radio gradient
		var radGrad = ctx.createRadialGradient(275, 250, 5, 290, 260, 100);
		radGrad.addColorStop(0, "red");
		radGrad.addColorStop(1, "white");
		ctx.fillStyle = radGrad;
		ctx.arc(300, 300, 50, 0, Math.PI*2, true);
		ctx.fill();
		
		ctx.font = "bold 40px Arial";
		ctx.fillStyle = "#8DB600";
		ctx.fillText("Hello Marvin", 50, 50);
		
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;
		ctx.strokeText("Hello Marvin", 50, 50);
		
		ctx.shadowOffsetX = 2;
		ctx.shadowOffsetY = 2;
		ctx.shadowBlur = 3;
		ctx.shadowColor = "black";
		ctx.fillText("Hello Marvin", 50, 50);
		
		ctx.lineWidth = 20;
		ctx.strokeStyle = "purple";
		ctx.beginPath();
		ctx.moveTo(100, 200);
		ctx.lineCap = "butt";	// could be: "round", "square"
		ctx.lineTo(100, 300);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(300, 250, 50, 0, 3.14, true);
		ctx.stroke();
		
		ctx.strokeStyle = "red";
		ctx.beginPath();
		
		ctx.moveTo(30, 250);
		ctx.quadraticCurveTo(80, 350, 200, 350);
		ctx.stroke();
		
		ctx.strokeStyle = "blue";
		ctx.beginPath();
		ctx.moveTo(685, 350);
		ctx.bezierCurveTo(785, 350, 685, 200, 785, 200);
		ctx.stroke();
		ctx.closePath();

		ctx.strokeStyle = "red";
		//ctx.fillRect(200, 200, 100, 100);
		ctx.fillRect(600, 200, 100, 100);
		ctx.rotate(Math.PI/12);
		ctx.scale(0.5, 1);
		ctx.fillRect(1100, 50, 100, 100);
		//was: ctx.fillRect(500, 50, 100, 100);
		
	}
}

onload = init;