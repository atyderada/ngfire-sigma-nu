import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

    public current:number = 1;
    public pics:Array<string> = [];

    constructor(){}

    ngOnInit(): void {
         var nameOfPicFolder = '../../assets/images/house-page';
        var noOfPics = 3;
        var counter = 1;
        while (counter <= noOfPics) {
            this.pics.push(nameOfPicFolder+'/house'+counter+'.jpg');
            counter++;
        }
    }
    // init(){
    //     var nameOfPicFolder = '../../assets/images/house-page';
    //     var noOfPics = 3;
    //     var counter = 1;
    //     while (counter <= noOfPics) {
    //         this.pics.push(nameOfPicFolder+'/house'+counter+'.jpg');
    //         counter++;
    //     }
    // }
    setCurrent(_newValue){
        this.current = _newValue;
    }
}
