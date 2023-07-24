import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdminUser } from '../model/admin-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginService {
  private adminUser: AdminUser = new AdminUser();

  login(formData: FormGroup): boolean {
    if (
      formData.value.name === this.adminUser.name &&
      formData.value.lastname === this.adminUser.lastname &&
      formData.value.dni === this.adminUser.dni &&
      formData.value.email === this.adminUser.email &&
      formData.value.phoneNumber === this.adminUser.phoneNumber
    ) {
      sessionStorage.setItem('loggedInUser', JSON.stringify(this.adminUser));
      return true;
    } else {
      return false;
    }
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('loggedInUser');
  }

  logout(): void {
    sessionStorage.removeItem('loggedInUser');
  }
}
