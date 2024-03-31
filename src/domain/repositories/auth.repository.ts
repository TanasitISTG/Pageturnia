import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseRepository } from "./base.repository";

@Injectable({
	providedIn: 'root',
})
export abstract class AuthRepository extends BaseRepository {
    abstract login(email: string, password: string): Observable<any>;
    abstract logout(): Observable<any>;
    // abstract register(email: string, password: string): Observable<any>;
}