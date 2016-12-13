var stage = new createjs.Stage("gameView");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", stage);
var gameView = new createjs.Container();
stage.addChild(gameView);
function startGame(){
    n = 2;
    addRect();
}
function addRect() {
    var cl = parseInt(Math.random()*100);
    var rectCl = cl*(n-1)/n;
    console.log(rectCl,cl);
    var color = "#" + cl + cl + cl;
    var Rectcolor = "#" + rectCl + rectCl + rectCl;
    var x = parseInt(Math.random() * n);
    var y = parseInt(Math.random() * n);
    for (var indexX = 0; indexX < n; indexX++) {
        for (var indexY = 0; indexY < n; indexY++) {
            var r = new Rect(n,color,Rectcolor);
            gameView.addChild(r);
            r.x = indexX;
            r.y = indexY;
            if (r.x == x && r.y == y) {
                r.setRectType(2);
            }
            r.x = indexX * (500 / n);
            r.y = indexY * (500 / n);
            if (r.getRectType() == 2) {
                r.addEventListener("click",clickRect)
            }
        }
    }
}
function clickRect() {
    if (n < 10) {
        ++n;
    }
    gameView.removeAllChildren();
    addRect();
}
startGame();