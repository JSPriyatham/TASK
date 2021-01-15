import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  public droppedItems = [];
  public droppedNames = [];

  public imageArray = [
    'https://i.pinimg.com/originals/cf/1f/30/cf1f30a2f69c799469d2405c78d349a5.jpg',
    'https://png.pngitem.com/pimgs/s/3-32716_baby-jungle-animals-giraffe-clip-art-animal-clipart.png',
    'https://www.pngitem.com/pimgs/m/72-727500_kitten-clipart-real-animal-pencil-and-in-color.png',
    'https://www.vippng.com/png/detail/66-666165_jungle-baby-animals-clipart.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScLOx4UlPVf1w1QSZlH34JjFvEdmQfidXcgg&usqp=CAU'
  ]

  public nameArray = [
    'Kitten', 'Zebra', 'Elephant', 'Penguin', 'Turtle'
  ]


  onItemDrop(e: any) {
    if (this.nameArray.includes(e.dragData)) {
      return false;
    }
    if (!this.droppedItems.includes(e.dragData)) this.droppedItems.push(e.dragData);
    else return false;
  }

  onNameDrop(e: any) {
    if (this.imageArray.includes(e.dragData)) {
      return false;
    }
    if (!this.droppedNames.includes(e.dragData)) this.droppedNames.push(e.dragData);
    else return false;
  }

  imageFirst(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.droppedItems, event.previousIndex, event.currentIndex);
  }

  namesSecond(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.droppedNames, event.previousIndex, event.currentIndex);
  }


  removeImage(index) {
    this.droppedItems.splice(index, 1);
  }

  removeName(index) {
    this.droppedNames.splice(index, 1);
  }

}
