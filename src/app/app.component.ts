import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movable-box-generator';

  isKeyEventEnabled = true;
  boxList: number[] = [];
  id = -1;
  selectedBoxId = -1;
  selectedBox: HTMLElement = null;
  displacement = 5;



  constructor() {  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // console.log(event);
    if (this.isKeyEventEnabled && (this.selectedBoxId > -1)) {
      switch (event.key) {
        case "w":
        case "W":
        case "ArrowUp": console.log("up");
          this.moveBoxUp();
          break;
        case "s":
        case "S":
        case "ArrowDown": console.log("down");
          this.moveBoxDown();
          break;
        case "a":
        case "A":
        case "ArrowLeft": console.log("left");
          this.moveBoxLeft();
          break;
        case "d":
        case "D":
        case "ArrowRight": console.log("right");
          this.moveBoxRight(); break;
        case "Delete": console.log("delete");
          this.deleteBox();
          break;

      }

    }
  }

  addBox() {
    this.id++;
    this.boxList.push(this.id);
  }

  clearAll() {
    this.boxList = [];
    this.id = -1;
    this.selectedBoxId = -1;
    this.selectedBox = null;
  }

  selectBox(id: number) {
    if (this.isSelected(id)) {
      this.selectedBoxId = -1;
      this.selectedBox = null;
      return;
    }
    this.selectedBoxId = id;
    this.selectedBox = document.getElementById(id.toString());
  }

  isSelected(id: number) {
    return id === this.selectedBoxId;
  }


  moveBoxUp() {
    let top = parseInt((this.selectedBox.style.top), 10);
    this.selectedBox.style.top = (top - this.displacement).toString() + 'px';
  }

  moveBoxDown() {
    let top = parseInt((this.selectedBox.style.top), 10);
    this.selectedBox.style.top = (top + this.displacement).toString() + 'px';
  }

  moveBoxLeft() {
    let left = parseInt((this.selectedBox.style.left), 10);
    this.selectedBox.style.left = (left - this.displacement).toString() + 'px';
  }

  moveBoxRight() {
    let left = parseInt((this.selectedBox.style.left), 10);
    this.selectedBox.style.left = (left + this.displacement).toString() + 'px';
  }

  deleteBox() {
    this.selectedBox.remove();
  }

}
