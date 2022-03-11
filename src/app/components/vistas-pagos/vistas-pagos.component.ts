import {Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from  '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper' ;

/** 
interface Animal {
  name: string;
  sound: string;
}*/

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

  /**
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];*/
}