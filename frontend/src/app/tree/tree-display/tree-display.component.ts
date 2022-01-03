import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BackendService, ITree, TreeType} from 'src/app/shared/backend.service';
import { SaleDataService } from 'src/app/shared/sale-data.service';

@Component({
  selector: 'app-tree-display',
  templateUrl: './tree-display.component.html',
  styleUrls: ['./tree-display.component.scss']
})
export class TreeDisplayComponent implements OnInit {

  public types = Object.values(TreeType).filter(value => typeof value === 'string');

  @Input()
  public type!: string
  @Input()
  public treeId!: number
  public tree!: ITree | null;

  constructor(private readonly serv: BackendService, private readonly sellDateService: SaleDataService, private readonly router: Router) {
    this.tree = null;
  }

  public async ngOnInit(): Promise<void> {
    this.tree = await this.serv.getTreeById(this.type, this.treeId);
  }

  public get btnText(): string{
    return this.tree?.sold ? "Sold" : "Buy"
  }

  public buyTree(): void {
    for (const i of this.types) {
      if (i == this.type){
        this.tree!.type = i;
      }
    }
    this.sellDateService.tree = this.tree;
    this.router.navigate(['sale']);
  }

}
