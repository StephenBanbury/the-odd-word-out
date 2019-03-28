import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerObject } from './player-object.model';
import { WordService } from '../shared/word-service';
import { IThesaurus } from '../shared/thesaurus';

import { Sprite, Application, Rectangle, Texture, Container, DisplayObject, Text } from 'pixi.js';

@Component({
  selector: 'app-odd-word-out',
  templateUrl: './odd-word-out.component.html',
  styleUrls: ['./odd-word-out.component.css']
})

export class  OddWordOutComponent implements OnInit {

  @ViewChild('pixiContainer') pixiContainer;
  private app: any;
  private loader: any;
  private resources: any;
  private Sprite: any;
  private text: any;
  private player: any;

  private keyPress: boolean;

  thesaurus: IThesaurus;
  private xMax: number = 800;
  private yMax: number = 800;

  private movementPaused: boolean = false;

  //public foundObject: number;
  //public hit: number;
  //public miss: number;
  //public score: number;

  public cardColor: string = "lightyellow";
  public message: string;
  public seedWord: string;
  public relatedWords: string[];
  public unrelatedWords: string[];
  public relatedWordNumber: number;
  public unrelatedWordNumber: number;

  players = Array<PlayerObject>();
  playerObjectNumber: number; 
  notRelatedNumber: number;
  temporaryPlayerObject: PlayerObject;

  constructor(private wordService: WordService) {

    //this.score = 0;
    // this.foundObject = 0;
    // this.hit = 0;
    // this.miss = 0;

    this.relatedWordNumber = 4;
    this.unrelatedWordNumber = 8;

    this.relatedWords = new Array<string>();
    this.unrelatedWords = new Array<string>();

    this.playerObjectNumber = 0;
    this.notRelatedNumber = 0;

    this.players = new Array<PlayerObject>();             
  }

  ngOnInit() {        
    this.seedWord = this.wordService.randomWord(1, "")[0];
    let unrelatedWords = this.wordService.randomWord(this.unrelatedWordNumber, this.seedWord);

    this.wordService.getThesaurus(this.seedWord).subscribe( 
      thesaurus => { 
        this.setupPlayerAttributes(thesaurus, unrelatedWords);
      }
    );

    this.keyPress = false;
    
    // PixiJS
    this.app = PIXI.Application;
    this.loader = PIXI.loader;
    this.resources = this.loader.resources;
    this.Sprite = PIXI.Sprite;
    this.text = PIXI.Text;
    this.player = PIXI.Sprite;

    this.app = new PIXI.Application ({
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
    .load(this.setupPixi.bind(this))  
  }

  handleLoadProgress(loader, resource) {
    console.log(`loaded ${resource.url}. Loading is ${loader.progress}% complete.`);
  }
  handleLoadAsset(loader, resource) {
      console.log("Asset loaded " + resource.name);
  }
  handleLoadError() {
      console.log("Load error");
  }

  setupPlayerAttributes(thesaurus: IThesaurus, nonRelatedWords: string[]) {

    let nouns =  thesaurus.noun.syn.slice(0, this.relatedWordNumber);
    console.log(nouns);

    this.newPlayerObject("myPlayer", this.seedWord, true, this.randomGenerator(1, this.xMax), this.randomGenerator(1, this.yMax), 0, 0);

    nouns.forEach(noun => {
      this.newPlayerObject("otherPlayer", noun, true, this.randomGenerator(1, this.xMax), this.randomGenerator(1, this.yMax), this.randomGenerator(-2, 2), this.randomGenerator(-2, 2));
    });

    nonRelatedWords.forEach(word => {
      this.newPlayerObject("otherPlayer", word, false, this.randomGenerator(1, this.xMax), this.randomGenerator(1, this.yMax), this.randomGenerator(-2, 2), this.randomGenerator(-2, 2));
    })
    
    this.players.forEach(obj => !obj.isRelated ? this.notRelatedNumber++ : false);
  }
  
  // TODO combine setupPixi and setupGame?
  setupPixi() {
    
    let playerStyle = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 28,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ffffff', '#00ff99'], // gradient
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

    let opponentStyle = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 24,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ffffff', '#66ff99'], // gradient
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
     
    for(let i = 0; i < this.players.length; i++){      
      let player = i === 0 
        ? new this.Sprite(this.resources["../../assets/images/boy2.jpg"].texture) 
        : new this.Sprite(this.resources["../../assets/images/boy1.jpg"].texture);
      
      player.id = this.players[i].id;
      player.x = this.players[i].xPos;
      player.y = this.players[i].yPos;
      player.vx = i === 0 ? 0 : this.players[i].xInc;
      player.vy = i === 0 ? 0 : this.players[i].yInc;
      player.isRelated = this.players[i].isRelated;
      player.isHit = this.players[i].isHit;
      player.text = this.players[i].text;

      this.app.stage.addChild(player)

      let text = new this.text(this.players[i].text, i === 0 ? playerStyle : opponentStyle);
      player.addChild(text);
      player.anchor.x = player.anchor.y = 0.5;
      text.anchor.x = text.anchor.y = 0.5;
    }    

    this.player = this.app.stage.children[0];

    this.app.ticker.add(delta => this.gameLoop(delta));

  }

  gameLoop(delta) {
    this.play(delta);
  }

  play(delta) {

    // Move characters
    this.app.stage.children.forEach(child => {

      child.x += child.vx;
      child.y += child.vy;

      if(child.id > 0 && this.collisionTest(this.player, child)){
        //console.log(`${this.player.text} hit ${child.text}: ${child.isRelated}`);
        if(child.isRelated){
          this.app.stage.removeChild(child);   
          this.relatedWords.push(child.text); 
          console.log(this.relatedWords); 
        } else {               
          this.unrelatedWords.push(child.text);     
        }
      }

      // Wrap around screen
      if(child.x > this.app.renderer.screen.width){
        child.x = this.app.renderer.screen.x;
      }
      if(child.y > this.app.renderer.screen.height){
        child.y = this.app.renderer.screen.y;
      }
      if(child.x < this.app.renderer.screen.x){
        child.x = this.app.renderer.screen.width;
      }
      if(child.y < this.app.renderer.screen.y){
        child.y = this.app.renderer.screen.height;
      }

    });

    // intertia - decrease velocity if no key is being pressed
    if(!this.keyPress){
      if (Math.ceil(this.player.vx * 100) / 100 == -0.01) {
        this.player.vx = 0;
      } else {
        if (this.player.vx != 0) {
          if (Math.ceil(this.player.vx * 100) / 100 >= 0) {
            this.player.vx += -0.01;
          } else {
            if (Math.floor(this.player.vx * 100) / 100 <= 0) {
              this.player.vx += 0.01;
            }
          }
        }
      }
      if (Math.ceil(this.player.vy * 100) / 100 == -0.01) {
        this.player.vy = 0;
      } else {
        if (this.player.vy != 0) {
          if (Math.ceil(this.player.vy * 100) / 100 >= 0) {
            this.player.vy += -0.01;
          } else {
            if (Math.floor(this.player.vy * 100) / 100 <= 0) {
              this.player.vy += 0.01;
            }
          }
        }
      }
    }

  }
  
  collisionTest(r1, r2) {

    //Define the variables we'll need to calculate
    let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;
  
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
      } else {
  
        //There's no collision on the y axis
        hit = false;
      }
    } else {
  
      //There's no collision on the x axis
      hit = false;
    }
  
    //`hit` will be either `true` or `false`
    return hit;
  }

  onMouseEvent($event) {
    let childEvent = $event.path[0];
    console.log(childEvent);
  }

  onKeyUp(){
    this.keyPress = false;
  }

  onKeyDown($event) {
    this.keyPress = true;
    let key = $event.key;
    switch(key){
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
        break
      }
      case " ": {
        if(this.movementPaused){
          this.movementPaused = false
        }else{
          this.movementPaused = true;
        }
        break;
      }
    }
  }

  private newPlayerObject(className: string, text: string, isRelated: boolean, xPos: number, yPos: number, xInc: number, yInc: number) {
    let playerObject = new PlayerObject();
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
  }

  private gameOver() {
    this.message = "Game Over!";
  }

  private nextLevel() {
    this.message = "Congratulations!";
  }

  private randomGenerator(min: number, max: number) {
    let rand = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(rand == 0) rand = rand + 1;
    return rand;
  }
}
