import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { timer } from 'rxjs';

declare var UIkit: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  @Input() formData: any

  fields: any;

  constructor(
    private fb: FormBuilder
  ) { }

  form = new FormGroup({});
  button: any;
  isSend = false;

  ngOnInit(): void {
    this.fields = this.formData.fields;
    this.button = this.formData.button;
    this.fields.forEach((e: { id: string; })=>{
      this.form.addControl(e.id, new FormControl())
     })
    console.log(this.form);
  }

  onSubmitForm() {
    this.isSend = true;
    let formData = this.form.value;
    let result: { key: string; value: string; name: any; }[] = [];

    Object.entries(formData).forEach(entry => {
      const [key, value] = entry;
      result.push({
        key: key as string,
        value: value as string,
        name: this.fields.find((e: { id: string; }) => e.id == key).label as string,
      });
    });

    let form = {};

    form = {fields: result, id: this.formData.id, name: this.formData.name};
    
    console.log(form);

    timer(2000)
        .pipe()
        .subscribe(
          res => {
            this.isSend = false;
            UIkit.notification({
              message: 'Subscrine success!',
              status: 'default',
              pos: 'bottom-right',
              timeout: 3000
            });
            this.form.reset();
          }
        );
    
    return false
  }

}
