import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-enrollment',
  templateUrl: './user-enrollment.component.html',
  styleUrls: ['./user-enrollment.component.css']
})
export class UserEnrollmentComponent {
  enrollmentForm: FormGroup;
  endDate: Date | null = null;

  constructor(private fb: FormBuilder) {
    this.enrollmentForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      childDob: [''],
      childGender: [''],
      relationship: [''],
      policyEnrollments: [''],
      status: [''],
    });
  }

  onSubmit() {
    const formData = this.enrollmentForm.value;
    formData.status = 'PAYMENTPENDING';
  }
}
