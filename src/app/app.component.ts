import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChDoc';


  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): boolean | Promise<boolean> {
  //   var isAuthenticated = this.authService.getAuthStatus();
  //   if (!isAuthenticated) {
  //       this.router.navigate(['/login']);
  //   }
  //   return isAuthenticated;

}
