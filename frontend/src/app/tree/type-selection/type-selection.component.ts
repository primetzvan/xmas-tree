import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import {BackendService, TreeType} from "../../shared/backend.service";

@Component({
  selector: 'app-type-selection',
  templateUrl: './type-selection.component.html',
  styleUrls: ['./type-selection.component.scss']
})
export class TypeSelectionComponent implements OnInit {

  @Output()
  private typeSelected : EventEmitter<string>;
  public treeTypes: string[] | null;
  public selectedType : string | null = null;

  constructor(private readonly backend: BackendService) {
    this.typeSelected  = new EventEmitter();
    this.treeTypes = null;
  }

  public typeSelectionChanged(change: MatSelectChange){
    this.typeSelected.emit(change.value); 
  }

  public ngOnInit(): void {
    this.backend.getAllTreeTypes()
      .subscribe({
        next: res => {
            this.treeTypes = res;
            if(res.length > 0){
              this.selectedType = res[0];
              this.typeSelected.emit(this.selectedType); 
            }
        },
        error: err => {
            console.log(err.messageText)
        }
      });
  }

}
