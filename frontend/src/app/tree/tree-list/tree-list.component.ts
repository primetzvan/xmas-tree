import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BackendService, ITree } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss']
})
export class TreeListComponent implements OnChanges {

  @Input()
  public selectedTreeType!: string ;
  public treesId : number[] | null;

  constructor(private bachendService: BackendService) {
    this.treesId = null;
  }

  public ngOnChanges (changes: SimpleChanges) {
    //console.log("test" + changes["selectedTreeType"])
    this.loadTrees(changes["selectedTreeType"].currentValue).then();
  }

  private async loadTrees(type:string): Promise<void>{
    //const ids = await this.bachendService.getTreeOfType(type);
    this.treesId = await this.bachendService.getTreeOfType(type);
    /*const trees = [];
    for (const id of ids){
      trees.push(await this.bachendService.getTreeById(type, id));
    }
    console.log(JSON.stringify(trees));
    */
  }

}
