import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BackendService, ITree } from '../shared/backend.service';
import { SaleDataService } from '../shared/sale-data.service';
import { Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent {

  public tree: ITree;
  myForm: FormGroup;


  public constructor(private readonly dataService: SaleDataService, private readonly backendService: BackendService, private fb: FormBuilder, private readonly router: Router) {
    this.tree = dataService.tree!;

    this.myForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ']+$/u)]],
      lastname: ['', [Validators.required, Validators.pattern(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ']+$/u)]],
        street: ['', Validators.required],
        plz: ['', [Validators.required, Validators.pattern(/^[0-9]*$/),Validators.minLength(4)]],
        location: ['',Validators.required]
    })
  }

  submitForm(){
    this.myForm.reset();
    this.router.navigate(['paypal'])
  }

}
