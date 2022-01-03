import { Injectable } from '@angular/core';
import { ITree } from './backend.service';

@Injectable({
 providedIn: 'root'
})
export class SaleDataService {
 private treeToSell: ITree | null;
 public constructor() {
   this.treeToSell = null
 }
 public set tree(tree: ITree | null){
   this.treeToSell = tree;
 }
 public get tree(): ITree | null {
   return this.treeToSell;
 }
}