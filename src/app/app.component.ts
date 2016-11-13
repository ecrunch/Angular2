import { Component } from '@angular/core';
import {InputService} from './input.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InputService]
})
export class AppComponent {
  title = 'Test App';
  names: Array<any>;
  name: string;

  constructor(private inputService:InputService){
    inputService.getNames().subscribe(response => {
      this.names = response
    })
  }
  addName(){
    console.log('test1')
    var temp ={
      name: this.name
    }
    
    this.inputService.addName(temp).subscribe(data => {
      console.log('Success'+ data)
      this.names.push(temp);
    })     
  }
  removeName(id) {
    this.inputService.removeName(id).subscribe(data => {
      console.log('Success deleting ' + data);
      var objPos = this.names.map(function(x){return x._id}).indexOf(id)
      this.names.splice(objPos,1)
    })
    }
}
