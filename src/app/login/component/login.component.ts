import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthLoginService } from '../service/auth-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  showError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private authLoginService: AuthLoginService,
    private router: Router
    ) {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^([a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ']{3,25})$/)]],
      lastname: ['', [Validators.required, Validators.pattern(/^([a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ']{3,25})$/)]],
      dni: ['', [Validators.required, Validators.pattern(/^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^(\d{4}\s?\d{4}|\d{8})$/)]]
    });
  }

  onSubmit(): void {
    this.showError = true;

    if (this.loginForm.valid) {
      if (this.authLoginService.login(this.loginForm)) {
        this.redirectTo('/product');
        this.showSnackbar(`Hola ${this.loginForm.value.name}!`, 'success-snackbar');
      } else {
        this.showSnackbar('Verifique que los datos ingresados sean correctos y vuelva a intentar', 'error-snackbar');
      }
    } else {
      this.showSnackbar('Todos los campos deben estar completos', 'error-snackbar');
    }
  }

  private redirectTo(path: string): void {
    this.router.navigate([path]);
  }

  private showSnackbar(message: string, panelClass: string): void {
    this.snackBar.open(message, '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: panelClass,
    });
  }
}
