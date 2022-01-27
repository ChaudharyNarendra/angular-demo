import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const maxRequiredAge: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const diff = new Date().getTime() - new Date(control.value).getTime();
    const age = Math.abs(new Date(diff).getUTCFullYear() - 1970);
    return age > 90 ? {maxAge: true} : null;
}