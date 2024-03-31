import { Observable } from "rxjs";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root',
})
export class AuthImplementationRepository extends AuthRepository {
    login(email: string, password: string): Observable<any> {
        return this.post('auth/login?useCookies=true', { email, password });
    }
    logout(): Observable<any> {
        return this.post('auth/logout');
    }
    register(email: string, password: string): Observable<any> {
        return this.post('auth/register', { email, password });
    }
}