import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdminUser } from '../model/admin-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginService {
  private adminUser: AdminUser = new AdminUser();

  login(formData: FormGroup): boolean {
    const { name, lastname, dni, email, phoneNumber } = formData.value;
    const isAdminUser = JSON.stringify({ name, lastname, dni, email, phoneNumber }) === JSON.stringify(this.adminUser);

    if (isAdminUser) {
      sessionStorage.setItem('loggedInUser', JSON.stringify(this.adminUser));
    }

    return isAdminUser;
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('loggedInUser');
  }

  logout(): void {
    sessionStorage.removeItem('loggedInUser');
  }
}
