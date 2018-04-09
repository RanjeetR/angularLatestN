import { Injectable } from '@angular/core';

@Injectable()
export class NavbarServiceService {
  public hideNav: boolean;

   toggleNavbarVisibility(flag) {
     this.hideNav = flag;
   }

}
