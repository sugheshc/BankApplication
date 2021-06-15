import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {

@Input() item:string|null|undefined
@Output() ondelete= new EventEmitter;
@Output() onCancel= new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
delete(){
  this.ondelete.emit(this.item)


}

cancel(){
  this.onCancel.emit()
}

  

}

