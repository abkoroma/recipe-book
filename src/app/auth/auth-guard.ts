import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, take } from "rxjs";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";

({
  providedIn: 'root'
})
export const authGuardService: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  router: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const authService = inject(AuthService);
  const routerState = inject(Router);
  return authService.user.pipe(
    take(1),
    map(user => {
      const isAuth = !!user;
      if (isAuth) {
        return true;
      }
      return routerState.createUrlTree(['/auth']);
    }
  ));
}

