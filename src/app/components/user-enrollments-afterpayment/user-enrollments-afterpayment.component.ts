import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-enrollments-afterpayment',
  templateUrl: './user-enrollments-afterpayment.component.html',
  styleUrls: ['./user-enrollments-afterpayment.component.css']
})
export class UserEnrollmentsAfterpaymentComponent  {

  enrollmentForm: FormGroup;
  endDate: Date | null = null; 
 
  constructor(private fb: FormBuilder) {
    this.enrollmentForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      childDob: [''],
      childGender: [''],
      relationship: [''],
      policyDuration: [null, Validators.required],
      policyEnrollments: [''],
      status: [''],
      startDate:[''],
      endDate:[''],
    });
  }
  
  
  onSubmit() {
  if (this.enrollmentForm.valid) {
    
    const startDate = new Date();

    const policyDurationControl = this.enrollmentForm.get('policyDuration');
    if (policyDurationControl) {
      const policyDuration = policyDurationControl.value;

     
      const endDate = new Date(startDate);
      endDate.setFullYear(startDate.getFullYear() + Number(policyDuration));

     
      this.endDate = endDate;

    
      const formData = this.enrollmentForm.value;
      formData.status = 'Active';
      formData.endDate = this.endDate.toISOString().split('T')[0];
      formData.startDate = new Date().toISOString().split('T')[0];
      console.log('Form Data:', this.enrollmentForm.value);
      console.log('Start Date:', startDate.toISOString().split('T')[0]);
      console.log('End Date:', endDate.toISOString().split('T')[0]);
      console.log('Account Activated');
      alert('Form submitted\nAccount is activated');

    }
  } else {
    alert('Please fill out all required fields correctly.');
  }
}

}
