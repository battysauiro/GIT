import {Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from  '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper' ;

@Component({
  selector: 'app-vistas-pagos',
  templateUrl: './vistas-pagos.component.html',
  styleUrls: ['./vistas-pagos.component.css']
})

export class VistasPagosComponent implements OnInit {
  /**
  constructor() { }

  ngOnInit(): void {
  }*/
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}