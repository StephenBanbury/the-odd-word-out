(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  text-align:center\r\n}\r\n\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.column {\r\n  float: left;\r\n  padding: 10px;\r\n}\r\n\r\n.left {\r\n  width: 25%;\r\n}\r\n\r\n.right {\r\n  width: 75%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <!-- <div> -->\r\n    <!-- <h1>\r\n      {{ title }}\r\n    </h1> -->\r\n    <app-odd-word-out></app-odd-word-out>\r\n  <!-- </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'The Odd Word Out';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _odd_word_out_odd_word_out_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./odd-word-out/odd-word-out.component */ "./src/app/odd-word-out/odd-word-out.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _odd_word_out_odd_word_out_component__WEBPACK_IMPORTED_MODULE_4__["OddWordOutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/odd-word-out/odd-word-out.component.css":
/*!*********************************************************!*\
  !*** ./src/app/odd-word-out/odd-word-out.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* thead {\r\n    color: #337AB7\r\n} */\r\n/* #container {\r\n  display: block;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -50px;\r\n} */\r\n#card {\r\n  width: 650px;\r\n  height: 650px;\r\n  border: 3px solid #73AD21;\r\n}\r\n#card h1 {\r\n  color: red;\r\n}\r\n.center {\r\n  margin: auto;\r\n  display: block;\r\n  position: fixed;\r\n  margin-top: -325px;\r\n  margin-left: -325px;\r\n  top:50%;\r\n  left: 50%;\r\n  padding: 10px;\r\n}\r\n.ball {\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 3px solid #73AD21;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n.ball:hover {\r\n  width: 70px; \r\n  height: 70px; \r\n  font-size: 2.4em;\r\n  transition: all 0.5s;\r\n}\r\n/* @keyframes move {\r\n  0% {}\r\n  50% {\r\n    transform: translate(0px, 0px) rotate(360deg);\r\n    background: #000; \r\n    opacity: 0.2;\r\n    border-radius: 0;\r\n  }\r\n  100% {}\r\n} */\r\n.obstacle {\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n.flex-container {\r\n  display:flex;\r\n  align-items: center; /* Vertical center alignment */\r\n  justify-content: center; /* Horizontal center alignment */\r\n}"

/***/ }),

/***/ "./src/app/odd-word-out/odd-word-out.component.html":
/*!**********************************************************!*\
  !*** ./src/app/odd-word-out/odd-word-out.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Seek out words or phrases related to \"{{seedWord}}\". Avoid those that are unrelated.</h2>\r\n<span id=\"container\" (document:keydown)=\"onKeyDown($event)\" (document:keyup)=\"onKeyUp()\">\r\n  \r\n  <div #pixiContainer (click)=\"onMouseEvent($event)\"></div>\r\n\r\n  <!-- <div id=\"card\" class=\"center\" [style.background-color]=\"cardColor\" (click)=\"onMouseEvent($event)\">\r\n    <h1>{{message}}</h1>\r\n  </div> -->\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/odd-word-out/odd-word-out.component.ts":
/*!********************************************************!*\
  !*** ./src/app/odd-word-out/odd-word-out.component.ts ***!
  \********************************************************/
/*! exports provided: OddWordOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OddWordOutComponent", function() { return OddWordOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_object_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-object.model */ "./src/app/odd-word-out/player-object.model.ts");
/* harmony import */ var _shared_word_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/word-service */ "./src/app/shared/word-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OddWordOutComponent = /** @class */ (function () {
    function OddWordOutComponent(wordService) {
        //this.score = 0;
        // this.foundObject = 0;
        // this.hit = 0;
        // this.miss = 0;
        this.wordService = wordService;
        this.xMax = 800;
        this.yMax = 800;
        this.movementPaused = false;
        //public foundObject: number;
        //public hit: number;
        //public miss: number;
        //public score: number;
        this.cardColor = "lightyellow";
        this.players = Array();
        this.relatedWordNumber = 4;
        this.unrelatedWordNumber = 8;
        this.relatedWords = new Array();
        this.unrelatedWords = new Array();
        this.playerObjectNumber = 0;
        this.notRelatedNumber = 0;
        this.players = new Array();
    }
    OddWordOutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.seedWord = this.wordService.randomWord(1, "")[0];
        var unrelatedWords = this.wordService.randomWord(this.unrelatedWordNumber, this.seedWord);
        this.wordService.getThesaurus(this.seedWord).subscribe(function (thesaurus) {
            _this.setupGame(thesaurus, unrelatedWords);
        });
        this.keyPress = false;
        // PixiJS
        this.app = PIXI.Application;
        this.loader = PIXI.loader;
        this.resources = this.loader.resources;
        this.Sprite = PIXI.Sprite;
        this.text = PIXI.Text;
        this.player = PIXI.Sprite;
        this.app = new PIXI.Application({
            width: 800,
            height: 800,
            backgroundColor: 0x1099bb
        });
        this.pixiContainer.nativeElement.appendChild(this.app.view);
        this.loader
            .add("../../assets/images/boy1.jpg")
            .add("../../assets/images/boy2.jpg")
            .on("progress", this.handleLoadProgress)
            .on("load", this.handleLoadAsset)
            .on("error", this.handleLoadError)
            .load(this.setupPixi.bind(this));
    };
    OddWordOutComponent.prototype.handleLoadProgress = function (loader, resource) {
        console.log("loaded " + resource.url + ". Loading is " + loader.progress + "% complete.");
    };
    OddWordOutComponent.prototype.handleLoadAsset = function (loader, resource) {
        console.log("Asset loaded " + resource.name);
    };
    OddWordOutComponent.prototype.handleLoadError = function () {
        console.log("Load error");
    };
    OddWordOutComponent.prototype.setupGame = function (thesaurus, nonRelatedWords) {
        var _this = this;
        var nouns = thesaurus.noun.syn.slice(0, this.relatedWordNumber);
        console.log(nouns);
        this.newPlayerObject("myPlayer", this.seedWord, true, this.randomGenerator(1, this.xMax), this.randomGenerator(1, this.yMax), 0, 0);
        nouns.forEach(function (noun) {
            _this.newPlayerObject("otherPlayer", noun, true, _this.randomGenerator(1, _this.xMax), _this.randomGenerator(1, _this.yMax), _this.randomGenerator(-2, 2), _this.randomGenerator(-2, 2));
        });
        nonRelatedWords.forEach(function (word) {
            _this.newPlayerObject("otherPlayer", word, false, _this.randomGenerator(1, _this.xMax), _this.randomGenerator(1, _this.yMax), _this.randomGenerator(-2, 2), _this.randomGenerator(-2, 2));
        });
        this.players.forEach(function (obj) { return !obj.isRelated ? _this.notRelatedNumber++ : false; });
    };
    // TODO combine setupPixi and setupGame
    OddWordOutComponent.prototype.setupPixi = function () {
        var _this = this;
        var playerStyle = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 28,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'],
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440
        });
        var opponentStyle = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 24,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#66ff99'],
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: false,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440
        });
        for (var i = 0; i < this.players.length; i++) {
            var player = i === 0
                ? new this.Sprite(this.resources["../../assets/images/boy2.jpg"].texture)
                : new this.Sprite(this.resources["../../assets/images/boy1.jpg"].texture);
            player.id = this.players[i].id;
            player.x = this.players[i].xPos;
            player.y = this.players[i].yPos;
            player.vx = i === 0 ? 0 : this.players[i].xInc;
            player.vy = i === 0 ? 0 : this.players[i].yInc;
            player.isRelated = this.players[i].isRelated;
            player.isHit = this.players[i].isHit;
            this.app.stage.addChild(player);
            var text = new this.text(this.players[i].text, i === 0 ? playerStyle : opponentStyle);
            player.addChild(text);
            player.anchor.x = player.anchor.y = 0.5;
            text.anchor.x = text.anchor.y = 0.5;
        }
        this.player = this.app.stage.children[0];
        this.app.ticker.add(function (delta) { return _this.gameLoop(delta); });
    };
    OddWordOutComponent.prototype.gameLoop = function (delta) {
        this.play(delta);
    };
    OddWordOutComponent.prototype.play = function (delta) {
        var _this = this;
        // Move characters
        this.app.stage.children.forEach(function (child) {
            child.x += child.vx;
            child.y += child.vy;
            if (child.id > 0 && _this.collisionTest(_this.player, child)) {
                //console.log(`${this.player.text} hit ${child.text}: ${child.isRelated}`);
                if (child.isRelated) {
                    _this.app.stage.removeChild(child);
                    _this.relatedWords.push(child.text);
                }
                else {
                    _this.unrelatedWords.push(child.text);
                }
            }
            // Wrap around screen
            if (child.x > _this.app.renderer.screen.width) {
                child.x = _this.app.renderer.screen.x;
            }
            if (child.y > _this.app.renderer.screen.height) {
                child.y = _this.app.renderer.screen.y;
            }
            if (child.x < _this.app.renderer.screen.x) {
                child.x = _this.app.renderer.screen.width;
            }
            if (child.y < _this.app.renderer.screen.y) {
                child.y = _this.app.renderer.screen.height;
            }
        });
        // intertia - decrease velocity if no key is being pressed
        if (!this.keyPress) {
            if (Math.ceil(this.player.vx * 100) / 100 == -0.01) {
                this.player.vx = 0;
            }
            else {
                if (this.player.vx != 0) {
                    if (Math.ceil(this.player.vx * 100) / 100 >= 0) {
                        this.player.vx += -0.01;
                    }
                    else {
                        if (Math.floor(this.player.vx * 100) / 100 <= 0) {
                            this.player.vx += 0.01;
                        }
                    }
                }
            }
            if (Math.ceil(this.player.vy * 100) / 100 == -0.01) {
                this.player.vy = 0;
            }
            else {
                if (this.player.vy != 0) {
                    if (Math.ceil(this.player.vy * 100) / 100 >= 0) {
                        this.player.vy += -0.01;
                    }
                    else {
                        if (Math.floor(this.player.vy * 100) / 100 <= 0) {
                            this.player.vy += 0.01;
                        }
                    }
                }
            }
        }
    };
    OddWordOutComponent.prototype.collisionTest = function (r1, r2) {
        //Define the variables we'll need to calculate
        var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;
        //hit will determine whether there's a collision
        hit = false;
        //Find the center points of each sprite
        r1.centerX = r1.x + r1.width / 2;
        r1.centerY = r1.y + r1.height / 2;
        r2.centerX = r2.x + r2.width / 2;
        r2.centerY = r2.y + r2.height / 2;
        //Find the half-widths and half-heights of each sprite
        r1.halfWidth = r1.width / 2;
        r1.halfHeight = r1.height / 2;
        r2.halfWidth = r2.width / 2;
        r2.halfHeight = r2.height / 2;
        //Calculate the distance vector between the sprites
        vx = r1.centerX - r2.centerX;
        vy = r1.centerY - r2.centerY;
        //Figure out the combined half-widths and half-heights
        combinedHalfWidths = r1.halfWidth + r2.halfWidth;
        combinedHalfHeights = r1.halfHeight + r2.halfHeight;
        //Check for a collision on the x axis
        if (Math.abs(vx) < combinedHalfWidths) {
            //A collision might be occurring. Check for a collision on the y axis
            if (Math.abs(vy) < combinedHalfHeights) {
                //There's definitely a collision happening
                hit = true;
            }
            else {
                //There's no collision on the y axis
                hit = false;
            }
        }
        else {
            //There's no collision on the x axis
            hit = false;
        }
        //`hit` will be either `true` or `false`
        return hit;
    };
    OddWordOutComponent.prototype.onMouseEvent = function ($event) {
        var childEvent = $event.path[0];
        console.log(childEvent);
    };
    OddWordOutComponent.prototype.onKeyUp = function () {
        this.keyPress = false;
    };
    OddWordOutComponent.prototype.onKeyDown = function ($event) {
        this.keyPress = true;
        var key = $event.key;
        switch (key) {
            case "ArrowLeft": {
                this.movementPaused = false;
                this.player.vx += -0.2;
                break;
            }
            case "ArrowRight": {
                this.movementPaused = false;
                this.player.vx += 0.2;
                break;
            }
            case "ArrowDown": {
                this.movementPaused = false;
                this.player.vy += 0.2;
                break;
            }
            case "ArrowUp": {
                this.movementPaused = false;
                this.player.vy += -0.2;
                break;
            }
            case " ": {
                if (this.movementPaused) {
                    this.movementPaused = false;
                }
                else {
                    this.movementPaused = true;
                }
                break;
            }
        }
    };
    OddWordOutComponent.prototype.newPlayerObject = function (className, text, isRelated, xPos, yPos, xInc, yInc) {
        var playerObject = new _player_object_model__WEBPACK_IMPORTED_MODULE_1__["PlayerObject"]();
        playerObject.id = this.playerObjectNumber;
        playerObject.className = className;
        playerObject.text = text;
        playerObject.isRelated = isRelated;
        playerObject.xPos = xPos;
        playerObject.yPos = yPos;
        playerObject.xInc = xInc;
        playerObject.yInc = yInc;
        playerObject.isHit = false;
        this.players.push(playerObject);
        this.playerObjectNumber++;
    };
    OddWordOutComponent.prototype.gameOver = function () {
        this.message = "Game Over!";
    };
    OddWordOutComponent.prototype.nextLevel = function () {
        this.message = "Congratulations!";
    };
    OddWordOutComponent.prototype.randomGenerator = function (min, max) {
        var rand = Math.floor(Math.random() * (max - min + 1)) + min;
        if (rand == 0)
            rand = rand + 1;
        return rand;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pixiContainer'),
        __metadata("design:type", Object)
    ], OddWordOutComponent.prototype, "pixiContainer", void 0);
    OddWordOutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-odd-word-out',
            template: __webpack_require__(/*! ./odd-word-out.component.html */ "./src/app/odd-word-out/odd-word-out.component.html"),
            styles: [__webpack_require__(/*! ./odd-word-out.component.css */ "./src/app/odd-word-out/odd-word-out.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_word_service__WEBPACK_IMPORTED_MODULE_2__["WordService"]])
    ], OddWordOutComponent);
    return OddWordOutComponent;
}());



/***/ }),

/***/ "./src/app/odd-word-out/player-object.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/odd-word-out/player-object.model.ts ***!
  \*****************************************************/
/*! exports provided: PlayerObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerObject", function() { return PlayerObject; });
var PlayerObject = /** @class */ (function () {
    function PlayerObject() {
    }
    return PlayerObject;
}());



/***/ }),

/***/ "./src/app/shared/word-service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/word-service.ts ***!
  \****************************************/
/*! exports provided: WordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordService", function() { return WordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordService = /** @class */ (function () {
    function WordService(http) {
        this.http = http;
        this.thesaurusApiUrl = "https://words.bighugelabs.com/api/2/f8618d6158a86a5d11cb0079f164a540/";
    }
    WordService.prototype.getThesaurus = function (seedWord) {
        this.thesaurusApiUrl += seedWord + "/json";
        return this.http.get(this.thesaurusApiUrl);
    };
    WordService.prototype.randomWord = function (numWords, avoidWord) {
        var words = ['feline', 'aqua', 'table', 'nose', 'cheek', 'boat', 'carpet', 'ceiling', 'run', 'think',
            'screen', 'consider', 'square', 'surround', 'border', 'think', 'jet', 'showdown', 'crossing', 'level', 'plane', 'compute',
            'button', 'rancour', 'wobble', 'stream', 'earth', 'embark', 'reach', 'search', 'lighten', 'shelve', 'key', 'board', 'bored',
            'shoe', 'wall', 'plant', 'fireplace', 'kitchen', 'utensil', 'application', 'window', 'dark', 'handle', 'step', 'tile', 'grass'];
        var response = new Array();
        var n = 1;
        do {
            var rand = Math.floor(Math.random() * (words.length));
            var word = words[rand];
            if (word != avoidWord) {
                response.push(word);
                n++;
            }
        } while (n <= numWords);
        return response;
    };
    WordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WordService);
    return WordService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\Repositories\the-odd-word-out\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map