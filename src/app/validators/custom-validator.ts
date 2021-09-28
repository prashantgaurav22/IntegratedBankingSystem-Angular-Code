import { FormGroup } from '@angular/forms';

export class CustomValidator {
    static mustBeEqual(controlName1:string,controlName2:string){
        return (form:FormGroup) => {
         let control1 = form.controls[controlName1];
         let control2 = form.controls[controlName2];
 
         if(control2.errors && control2.errors.mustBeEqual){
             return;
         }
 
         if(control1.value!=control2.value){
             control2.setErrors({mustBeEqual:true});
         }else{
             control2.setErrors(null);
         }
        }    
     }
 }
 
