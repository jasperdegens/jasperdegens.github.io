function startGame(){sprites=new Image;sprites.src="assets/frogger_sprites.png";deadFrogSprite=new Image;deadFrogSprite.src="assets/dead_frog.png";$(sprites).load(function(){return});$(deadFrogSprite).load(function(){canvas=$("#game")[0];if(canvas.getContext){init();ctx=canvas.getContext("2d");runGame();eventListener()}else{alert("Your browser doesn't support the game. Sorry!")}})}function init(){initVariables();initObjects();initClickDivs()}function initVariables(){timeInterval=40;score=0;highScore=100;ifNewHighScore=false;seconds=30;time=seconds*(1e3/timeInterval);level=1;numLives=5;numHome=0;movePause=0;deathPause=0;isUpArrow=false;clickOn=false}function initObjects(){initFrogger();initVehicles();initLogs();initFly();initInlets();initBadlands();initFrogsHome()}function initFrogger(){frogger=new frog(directions.up);frogger.reset()}function initVehicles(){vehicles=new Array;vehicles.push(vehicleLibrary.pink);vehicles.push(vehicleLibrary.white);vehicles.push(vehicleLibrary.yellow);vehicles.push(vehicleLibrary.tank);vehicles.push(vehicleLibrary.truck)}function initLogs(){logs=new Array;logs.push(logLibrary.longRight);logs.push(logLibrary.shortLeft);logs.push(logLibrary.mediumRight);logs.push(logLibrary.longLeft);logs.push(logLibrary.shortRight)}function initInlets(){inlets=new Array;inlets[0]={y:70,width:30,height:30,num:5,xCoords:new Array};for(i=0;i<inlets[0].num;i++){inlets[0].xCoords[i]=12+i*85}}function initBadlands(){badlands=new Array;badlands[0]={y:0,width:35,height:95,num:4,xCoords:new Array};for(i=0;i<badlands[0].num;i++){badlands[0].xCoords[i]=52+i*85}}function initFly(){fly=new Array;fly[0]={y:80,width:16,height:16,num:1,isActive:Math.floor(Math.random()*100)==1,intervalsActive:Math.floor(Math.random()*10)*3+100,xCoords:new Array};if(fly[0].isActive){fly[0].xCoords[0]=18+Math.floor(Math.random()*5)*85}else{fly[0].xCoords[0]=-1e3}}function initFrogsHome(){frogsHome=new Array}function initClickDivs(){initClickDiv("Play");initClickDiv("Submit")}function initClickDiv(e){if(document.getElementById("click"+e)!=null){return}var t=document.createElement("div");t.id="click"+e;document.getElementById("game_div").appendChild(t)}function getLocalStorage(e){for(key in localStorage){if(key==e){return localStorage[key]}}return 0}function drawGame(){drawWater();drawRoad();drawRoadside(277);drawRoadside(486);drawHeader();drawFooter();drawMovingObjects(vehicles);drawMovingObjects(logs);drawFrogsHome();drawFly()}function drawWater(){ctx.fillStyle="#191970";ctx.fillRect(0,0,width,290)}function drawRoad(){ctx.fillStyle="#000000";ctx.fillRect(0,283,width,282)}function drawRoadside(e){ctx.drawImage(sprites,0,120,399,34,0,e,399,34)}function drawHeader(){ctx.drawImage(sprites,0,0,399,110,0,0,399,110)}function drawFooter(){ctx.fillStyle="#00FF00";ctx.font="20px Arial";ctx.fillText("Level "+level,95,545);ctx.font="14px Arial";ctx.fillText("Score: "+score+"                    High Score: "+highScore,2,563);for(i=0;i<numLives;i++){ctx.drawImage(sprites,10,335,20,20,i*12,535,12,12)}drawTimer()}function drawTimer(){var e=time/1e3*timeInterval*4;ctx.fillStyle="#00FF00";ctx.fillRect(399-e,545,399,565)}function drawMovingObjects(e){for(i=0;i<e.length;i++){for(j=0;j<e[i].num;j++){ctx.drawImage(sprites,e[i].spriteX,e[i].spriteY,e[i].width,e[i].height,e[i].xCoords[j],e[i].y,e[i].width,e[i].height)}}}function drawFrog(e){ctx.drawImage(sprites,e.spriteX,e.spriteY,e.width,e.height,e.x,e.y,e.width,e.height)}function drawMovingFrog(){ctx.drawImage(sprites,frogger.spriteJumpX,frogger.spriteJumpY,frogger.jumpWidth,frogger.jumpHeight,frogger.jumpX,frogger.jumpY,frogger.jumpWidth,frogger.jumpHeight)}function drawDeadFrog(){ctx.drawImage(deadFrogSprite,5,4,18,24,deadFrog.x,deadFrog.y,18,24)}function drawDeadFrogMsg(){ctx.fillStyle="#00FF00";ctx.fillRect(45,207,300,150);ctx.fillStyle="#000000";ctx.fillRect(55,216,280,130);ctx.fillStyle="#00FF00";ctx.font="36px Arial";ctx.fillText("Frogger has died",60,290)}function drawFly(){ctx.drawImage(sprites,140,235,fly[0].width,fly[0].height,fly[0].xCoords[0],fly[0].y,fly[0].width,fly[0].height)}function drawFrogsHome(){for(i=0;i<frogsHome.length;i++){drawFrog(frogsHome[i].homeFrog)}}function drawGameOver(){ctx.fillStyle="#00FF00";ctx.fillRect(45,197,300,170);ctx.fillStyle="#000000";ctx.fillRect(55,206,280,150);ctx.fillStyle="#00FF00";ctx.font="36px Arial";ctx.fillText("Game Over",105,245);ctx.font="18px Arial";ctx.fillText("Submit Score",147,320);ctx.fillText("Play Again",160,345);if(isNewHighScore){ctx.fillStyle="#FFFFFF";ctx.fillText("New high score: "+highScore,115,285)}}function objectArray(e,t,n,r,s,o,u,a){this.spriteX=e;this.spriteY=t;this.width=n;this.height=r;this.y=s;this.num=o;this.speed=u;this.direction=a;this.xCoords=new Array;if(this.direction==directions.left){this.startX=Math.floor(Math.random()*(width/this.num));for(i=0;i<this.num;i++){this.xCoords[i]=this.startX+i*(width/this.num+this.width)}}else{this.startX=Math.floor(Math.random()*(width/this.num));for(i=0;i<this.num;i++){this.xCoords[i]=this.startX+i*(width/this.num+this.width)}}}function frog(e,t,n){this.direction=e;if(this.direction==directions.left){this.x=t-colSize/2;this.y=n;this.jumpX=this.x+colSize/4;this.jumpY=this.y;this.spriteX=81;this.spriteY=337;this.spriteJumpX=112;this.spriteJumpY=338;this.width=18;this.height=23;this.jumpWidth=25;this.jumpHeight=22}else if(this.direction==directions.up){this.x=t;this.y=n-laneSize;this.jumpX=this.x;this.jumpY=this.y+laneSize/2;this.spriteX=12;this.spriteY=367;this.spriteJumpX=45;this.spriteJumpY=365;this.width=23;this.height=17;this.jumpWidth=22;this.jumpHeight=25}else if(this.direction==directions.right){this.x=t+colSize/2;this.y=n;this.jumpX=this.x-colSize/4;this.jumpY=this.y;this.spriteX=14;this.spriteY=333;this.spriteJumpX=45;this.spriteJumpY=335;this.width=17;this.height=23;this.jumpWidth=25;this.jumpHeight=22}else if(this.direction==directions.down){this.x=t;this.y=n+laneSize;this.jumpX=this.x;this.jumpY=this.y-laneSize/2;this.spriteX=81;this.spriteY=370;this.spriteJumpX=114;this.spriteJumpY=366;this.width=23;this.height=17;this.jumpWidth=22;this.jumpHeight=25}this.reset=function(){this.x=187;this.y=490;this.direction=directions.up}}function runGame(){setInterval(function(){if(time>0){if(deathPause>0){runDeath()}else if(movePause>0){runMove()}else{runRegular()}}else{runEndGame()}},timeInterval)}function runDeath(){drawGame();drawDeadFrog();drawDeadFrogMsg();deathPause--}function runMove(){update();drawGame();drawMovingFrog();movePause--}function runRegular(){update();drawGame();drawFrog(frogger)}function runEndGame(){drawGame();deadFrog={x:frogger.x,y:frogger.y};drawDeadFrog();clickOn=true;time=0;if(score>highScore){highScore=score;localStorage["highScore"]=highScore;isNewHighScore=true}drawGameOver()}function update(){updateMovingObjects(vehicles);updateMovingObjects(logs);updateFly();if(isHome()){updateHome()}else{if(isCollisionDeath()){updateCollisionDeath()}else if(isUpArrow){score+=10;isUpArrow=false}}time--}function updateMovingObjects(e){for(i=0;i<e.length;i++){for(j=0;j<e[i].num;j++){if(e[i].direction==directions.left){if(e[i].xCoords[j]<=0-e[i].width){e[i].xCoords[j]=399+e[i].width}else{e[i].xCoords[j]-=e[i].speed}}else{if(e[i].xCoords[j]>=399+e[i].width){e[i].xCoords[j]=0-e[i].width}else{e[i].xCoords[j]+=e[i].speed}}}}}function updateFly(){if(fly[0].isActive){if(fly[0].intervalsActive==0){fly[0].isActive=false}else{fly[0].intervalsActive--;drawFly()}}else{initFly()}}function isCollisionWith(e,t){var n,r;for(i=0;i<e.length;i++){r=frogger.y>=e[i].y&&frogger.y<=e[i].y+e[i].height||frogger.y+frogger.height>=e[i].y&&frogger.y<=e[i].y+e[i].height;for(j=0;j<e[i].num;j++){n=frogger.x>=e[i].xCoords[j]&&frogger.x<=e[i].xCoords[j]+e[i].width||e[i].xCoords[j]>=frogger.x&&e[i].xCoords[j]<=frogger.x+frogger.width;if(n&&r){if(t){moveFrogWith(e[i])}return true}}}return false}function moveFrogWith(e){if(e.direction==directions.left){frogger.x-=e.speed}else{frogger.x+=e.speed}}function isHome(){return isCollisionWith(inlets,false)&&!isCollisionWith(frogsHome,false)&&!isCollisionWith(badlands,false)}function isCollisionDeath(){return isCollisionWith(vehicles,false)||frogger.y<262&&(!isCollisionWith(logs,true)||frogger.x<=0||frogger.x+frogger.width>=399||isCollisionWith(badlands,false))}function updateCollisionDeath(){deadFrog={x:frogger.x,y:frogger.y};numLives--;gameOver=numLives<=0;isUpArrow=false;if(gameOver){runEndGame()}else{frogger.reset();deathPause=50;movePause=0}}function updateHome(){score+=50+Math.round(time*(timeInterval/1e3));numHome++;if(fly[0].isActive&&isCollisionWith(fly,false)){score+=200;fly[0].isActive=false;fly[0].intervalsActive=0}updateFrogsHome();frogger.reset();if(numHome%5==0){score+=1e3;increaseLevel()}}function updateFrogsHome(){var e;if(frogger.x<=95){e=15}else if(frogger.x<=178){e=100}else if(frogger.x<=265){e=185}else if(frogger.x<=348){e=270}else{e=355}frogsHome.push({homeFrog:new frog(directions.up,e,114),num:1,xCoords:new Array,y:72,width:23,height:17});frogsHome[frogsHome.length-1].xCoords[0]=frogsHome[frogsHome.length-1].homeFrog.x}function increaseLevel(){level++;initObjects();increaseSpeed(vehicles);increaseSpeed(logs)}function increaseSpeed(e){for(i=0;i<e.length;i++){e[i].speed++}}function eventListener(){$(document).keydown(function(e){var t={left:37,up:38,right:39,down:40};if(deathPause==0){if(e.which==t.left||e.keyCode==t.left){frogger=new frog(directions.left,frogger.x,frogger.y);movePause=2}else if(e.which==t.up||e.keyCode==t.up){frogger=new frog(directions.up,frogger.x,frogger.y);movePause=2;isUpArrow=true}else if(e.which==t.right||e.keyCode==t.right){frogger=new frog(directions.right,frogger.x,frogger.y);movePause=2}else if((e.which==t.down||e.keyCode==t.down)&&frogger.y<485){frogger=new frog(directions.down,frogger.x,frogger.y);movePause=2}else{return}}else{return}e.preventDefault()});$("#clickPlay").click(function(){if(clickOn){init()}})}var sprites,deadFrogSprite,canvas,ctx;var width=399,height=565;var timeInterval,laneSize=35,colSize=42;var score,highScore,isNewHighScore;var seconds,time,level;var numLives,gameOver,numHome;var frogger,deadFrog,vehicles,logs,fly;var inlets,badlands,frogsHome;var movePause,deathPause,isUpArrow,clickOn;var directions={left:"left",up:"up",right:"right",down:"down"};$(document).ready(function(){startGame()});var vehicleLibrary={pink:new objectArray(10,268,28,20,455,4,2,directions.left),white:new objectArray(46,264,28,24,420,3,1,directions.right),yellow:new objectArray(81,265,24,26,385,4,1,directions.left),tank:new objectArray(12,302,24,21,350,5,2,directions.right),truck:new objectArray(104,302,46,18,315,3,2,directions.left)};var logLibrary={shortRight:new objectArray(10,230,85,21,110,3,3,directions.right),shortLeft:new objectArray(10,230,85,21,215,3,3,directions.left),mediumRight:new objectArray(10,197,117,22,180,2,2,directions.right),mediumLeft:new objectArray(10,197,117,22,180,2,2,directions.left),longRight:new objectArray(10,166,180,22,250,2,3,directions.right),longLeft:new objectArray(10,166,180,22,145,2,3,directions.left)}