import { Component, ElementRef, ViewChild } from '@angular/core';
import { Gesture, GestureController, GestureDetail } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private gesture: Gesture;
  @ViewChild('touch') div: ElementRef<HTMLDivElement>;
  @ViewChild('paragraph') p: ElementRef<HTMLParagraphElement>;

  constructor(private gestureCtrl: GestureController) {}

  ngAfterViewInit() {
    this.gesture = this.gestureCtrl.create({
      disableScroll: true,
      el: this.div.nativeElement,
      threshold: 15,
      gestureName: 'my-gesture',
      direction: 'y',
      onMove: ev => this.onMoveHandler(ev)
    });

    this.gesture.enable();
  }

  onMoveHandler(ev: GestureDetail) {
    console.log(ev);
    this.p.nativeElement.innerHTML = `
    <div>Type: ${ev.type}</div>
    <div>Current Y: ${ev.currentY}</div>
    <div>Delta Y: ${ev.currentY}</div>
    <div>Velocity Y: ${ev.velocityY}</div>`;
  }
}
