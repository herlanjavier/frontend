import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router) {

  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (sessionStorage.getItem('serviUser')) {
      return true;
    } else {
      this.router.navigateByUrl('/public');
      return false;
    }
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    if (sessionStorage.getItem('serviUser')) {
      return true;
    } else {
      this.router.navigateByUrl('/public');
      return false;
    }
  }
}
