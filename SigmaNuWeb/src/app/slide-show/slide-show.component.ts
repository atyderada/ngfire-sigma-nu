import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent {

    public current:number = 1;
    public pics:Array<string> = [];
    constructor(){
        this.init();
    }
    init(){
        var nameOfPicFolder = '../../assets/images/house-page';
        var noOfPics = 3;
        var counter = 1;
        while (counter <= noOfPics) {
            this.pics.push(nameOfPicFolder+'/house'+counter+'.jpg');
            counter++;
        }
    }
    setCurrent(_newValue){
        this.current = _newValue;
    }
}
