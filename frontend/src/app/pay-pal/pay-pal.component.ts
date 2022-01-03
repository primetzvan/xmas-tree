import { Component, OnInit } from '@angular/core';
import {BackendService, ITree, TreeType} from "../shared/backend.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SaleDataService} from "../shared/sale-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pay-pal',
  templateUrl: './pay-pal.component.html',
  styleUrls: ['./pay-pal.component.scss']
})
export class PayPalComponent {

  public tree: ITree;
  myForm: FormGroup;

  public constructor(private readonly dataService: SaleDataService, private readonly backendService: BackendService, private fb: FormBuilder, private readonly router: Router) {
    this.tree = dataService.tree!;

    this.myForm = this.fb.group({
      cardnumber: ['', [Validators.required, Validators.pattern(/^[0-9]*$/),Validators.minLength(16),Validators.maxLength(16)]],
      duedatej: ['', [Validators.required, Validators.pattern(/^[0-9]*$/),Validators.minLength(4),Validators.maxLength(4)]],
      duedatem: ['', [Validators.required, Validators.pattern(/0[1-9]|1[0-2]/),Validators.minLength(2),Validators.maxLength(2)]],
      cvc: ['', [Validators.required, Validators.pattern(/^[0-9]*$/),Validators.minLength(3),Validators.maxLength(3)]]
    })
  }

  submitForm(){
    this.backendService.buyTree(this.tree.type,this.tree.id).subscribe(()=> {
      alert("Thanks for buying!");
      this.myForm.reset();
      this.router.navigate(['tree'])
    })
  }

}
