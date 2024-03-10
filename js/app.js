var c = document.getElementById("c1");
var ctx = c.getContext("2d");

ctx.save();

// NW
ctx.translate(185, 240);
ctx.rotate(-Math.PI / 4);
ctx.font = "400 20px Bahnschrift";
ctx.fillStyle = "#000";
ctx.fillText("enhances", 0, 0);
ctx.restore();
ctx.setTransform(1, 0, 0, 1, 0, 0);

ctx.translate(355, 365);
ctx.rotate(-Math.PI / 4);
ctx.fillStyle = "#f6b092";
ctx.fillRect(-50, -200, 120, 120);
ctx.restore();
ctx.setTransform(1, 0, 0, 1, 0, 0);

// NE
ctx.translate(440, 170);
ctx.rotate(Math.PI / 4);
ctx.rotate(0);
ctx.font = "400 20px Bahnschrift";
ctx.fillStyle = "#000";
ctx.fillText("reverses into", 0, 0);
ctx.restore();
ctx.setTransform(1, 0, 0, 1, 0, 0);

ctx.translate(290, 315);
ctx.rotate(Math.PI / 4);
ctx.fillStyle = "#C7E1BA";
ctx.fillRect(0, -200, 120, 120);
ctx.restore();
ctx.setTransform(1, 0, 0, 1, 0, 0);

// SW
ctx.translate(170, 470);
ctx.rotate(Math.PI / 4);
ctx.font = "400 20px Bahnschrift";
ctx.fillStyle = "#000";
ctx.fillText("retrieves", 0, 0);
ctx.restore();
ctx.setTransform(1, 0, 0, 1, 0, 0);

ctx.translate(370, 280);
ctx.rotate(Math.PI / 4);
ctx.fillStyle = "#f6b092";
ctx.fillRect(-30, 120, 120, 120);
ctx.restore();
ctx.setTransform(1, 0, 0, 1, 0, 0);

// SE
ctx.translate(470, 530);
ctx.rotate(-Math.PI / 4);
ctx.rotate(0);
ctx.font = "400 20px Bahnschrift";
ctx.fillStyle = "#000";
ctx.fillText("obsolesces", 0, 0);
ctx.restore();
ctx.setTransform(1, 0, 0, 1, 0, 0);

ctx.translate(490, 570);
ctx.rotate(-Math.PI / 4);
ctx.fillStyle = "#C7E1BA";
ctx.fillRect(0, -200, 120, 120);
ctx.restore();
ctx.setTransform(1, 0, 0, 1, 0, 0);
