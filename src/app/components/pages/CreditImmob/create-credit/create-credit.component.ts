import { Component, OnInit } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import { CreditImmobilier } from 'src/app/models/creditImmobilier';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';
import { Utilisateur } from 'src/app/models/utilisateur';
import { CreditImmobilierService } from 'src/app/services/CreditImmobilier/creditImmob.service';
@Component({
  selector: 'app-create-credit',
  templateUrl: './create-credit.component.html',
  styleUrls: ['./create-credit.component.css']
})
export class CreateCreditComponent implements OnInit {

  creditImmob= new CreditImmobilier();
  idUser:any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  stepStates = {
    normal: STEP_STATE.normal,
  };
  defaultconfig: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  style2config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  style3config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };

  constructor(private ngWizardService: NgWizardService, private userS:UserService,private creditImmobS:CreditImmobilierService) { }

  ngOnInit(): void {
  }

  showPreviousStep(_event?: Event) {
    this.ngWizardService.previous();
  }
  showNextStep(_event?: Event) {
    this.ngWizardService.next();
  }
  stepChanged(_args: StepChangedArgs) { }



  addCredit(){
    this.creditImmobS.createCredit(this.creditImmob,1).subscribe({
      
      next:res=>{
      console.log(this.creditImmob);
      console.log(this.idUser);
      this.isSuccessful = true;
        this.isSignUpFailed = false;
    },
    error:err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    },
    complete: () => {
      Swal.fire('Thank you...', 'your complaint has been sent successfully !', 'success')  
      //this.goToEmployeeList()
    }
    
    
    
    
    
    
  });
 }


}
