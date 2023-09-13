import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPolicyCRUDComponent } from './components/admin-policy-crud/admin-policy-crud.component';
import { UserPolicyComponent } from './components/user-policy/user-policy.component';
import {UserEnrollmentComponent} from './components/user-enrollment/user-enrollment.component';
import { UserMyEnrollmentsComponent } from './components/user-my-enrollments/user-my-enrollments.component';
import { AdminGetEnrollmentsComponent } from './components/admin-get-enrollments/admin-get-enrollments.component';
import { UserEnrollmentsAfterpaymentComponent } from './components/user-enrollments-afterpayment/user-enrollments-afterpayment.component';

const routes: Routes = [
  {path:"adminpolicycrud",component:AdminPolicyCRUDComponent},
  {path:"userpolicy",component:UserPolicyComponent},
  {path:"userenrollment",component:UserEnrollmentComponent},
  
  {path:"usermyenrollment",component:UserMyEnrollmentsComponent},
  {path:"admingetenrollments",component:AdminGetEnrollmentsComponent},
  {path:"userenrollmentsafterpayment",component:UserEnrollmentsAfterpaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
