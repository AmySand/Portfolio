import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  submitted = false;
  public name = {};
  public value = '';
    // onSubmit() { this.submitted = true; }


  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }
   get userSubmission() { return JSON.stringify(this.name); }
}

