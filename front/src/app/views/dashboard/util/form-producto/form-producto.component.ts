import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss']
})
export class FormProductoComponent implements OnInit {
  @Input() public product: any;
  @Output() public resultForm = new EventEmitter<any>();
  public user: FormGroup;

  constructor() { }

  ngOnInit() {
    this.user = new FormGroup({
      // idP: new FormControl({ value: this.product.id }, [Validators.required]),
      name: new FormControl(
        // { value: this.product.name }, [Validators.required, Validators.pattern('[A-Za-z0-9. -]{1,30}')]
        ),
      gender: new FormControl(
        // { value: this.product.gender }, [Validators.required, Validators.pattern('[A-Za-z0-9. -]{1,30}')]
        ),
      email: new FormControl(
        // { value: this.product.email }, [Validators.required]
        ),
      status: new FormControl(
        // { value: this.product.status }, [Validators.required, Validators.pattern('[0-9]*')]
        )
    });
  }

  public sendProduct() {
    this.resultForm.emit(this.user.value);
  }
}
export interface Iproduct {
  name: string;
  gender: string;
  status: string;
  email: string;
}
