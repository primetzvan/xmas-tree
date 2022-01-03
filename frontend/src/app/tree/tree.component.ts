import { Component, OnInit } from '@angular/core';
import {BackendService} from "../shared/backend.service";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  public selectedType : string | null;

  constructor(private readonly backend: BackendService) {
    this.selectedType = null;
  }

  ngOnInit(): void {
  }

  typeSelectionChange(type: string): void{
    //
    this.selectedType = type;
  }

}
