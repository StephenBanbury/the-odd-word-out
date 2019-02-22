import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-pong',
  templateUrl: './word-pong.component.html',
  styleUrls: ['./word-pong.component.css']
})
export class  WordPongComponent implements OnInit {

  private xMin: number = 2;
  private yMin: number = 2;
  private xMax: number = 515;
  private yMax: number = 515;

  private xPos: number;
  private yPos: number;

  private xInc: number = 1;
  private yInc: number = 1;

  private movementStarted: boolean = true;
  private movementPaused: boolean = false;

  private backgroundColor: string = 'red';
  private targetStyle: any;

  public foundTarget: number;
  public hit: number;
  public miss: number;

  constructor() {
  }

  TargetStyle() {
    this.targetStyle = {
      "top": `${this.yPos}px`,
      "left": `${this.xPos}px`,
      "background": this.backgroundColor
    }
    return this.targetStyle;
  }

  OnMouseEvent($event) {
    let childEvent = $event.path[0];

    if(childEvent.id=="card" && $event.type == "click"){
      this.miss += 1;
    }

    if(childEvent.id=="target"){
      this.TargetEvent($event.type);
    }
  }

  OnKeyEvent($event) {
    let key = $event.key;
    switch(key){
      case "4": {
        this.movementPaused = false;
        this.xInc += -0.2;
        break;
      }
      case "6": {
        this.movementPaused = false;
        this.xInc += 0.2;
        break;
      }
      case "2": {
        this.movementPaused = false;
        this.yInc += 0.2;
        break;
      }
      case "8": {
        this.movementPaused = false;
        this.yInc += -0.2;
        break
      }
      case "5": {
        if(this.movementPaused){
          this.movementPaused = false
        }else{
          this.movementPaused = true;
          if(this.hit < 5){
            this.xInc = 0;
            this.yInc = 0;
          }
        }
        break;
      }
    }
    // if(!this.movementStarted){
    //   this.StartMovement();
    //   this.movementStarted = true;
    // }
  }

  private TargetEvent(eventType) {
    console.log('StartMovement()', this.StartMovement());
    switch(eventType){
      case "click": {
        this.hit += 1;
        this.SetNewCoordinates();

        //if(this.hit >= 5) {
          this.movementPaused = false;
          if(this.xInc == 0){
            this.xInc = 1;
          }
          if(this.yInc == 0) {
            this.yInc = 1;
          }
          // if(!this.movementStarted) {
          //   this.StartMovement();
          //   this.movementStarted = true;
          // }
        //}
        break;
      }
      case "mouseenter": {
        this.backgroundColor = "blue";
        this.foundTarget += 1;
        break;
      }
      case "mouseleave": {
        this.backgroundColor = "red";
        break;
      }
    }
  }

  private StartMovement() {
      setInterval(() => {
        this.frame();
      }, 1 * 60);
  }

  private frame() {
    if(!this.movementStarted || this.movementPaused){ return };

    console.log('frame');
    if (this.xPos >= this.xMax || this.xPos <= this.xMin) {
      this.xInc = -this.xInc;
    }
    if (this.yPos >= this.yMax || this.yPos <= this.yMin) {
      this.yInc = -this.yInc;
    }
    this.xPos += this.xInc;
    this.yPos += this.yInc;
  }

  private SetNewCoordinates() {
    this.yPos = this.GenerateRandomValue(1, this.xMax);
    this.xPos = this.GenerateRandomValue(1, this.xMax);
  }

  private GenerateRandomValue(min: number, max: number) {
    return Math.floor(Math.random() * max) + min;
  }

  ngOnInit() {
    console.log('OnInit: this.movementPaused = ', this.movementPaused)
    this.SetNewCoordinates();
    this.foundTarget = 0;
    this.hit = 0;
    this.miss = 0;
  }
}
