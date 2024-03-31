import { Injectable } from "@angular/core";
import { NovelRepository } from "../../domain/repositories/novel.repository";
import { Observable } from "rxjs";
import { Novel } from "../../domain/models/novel.model";

@Injectable({
	providedIn: 'root',
})
export class NovelImplementationRepository extends NovelRepository {
    getNovels(): Observable<Novel[]> {
        return this.get<Novel[]>('novels');
    }
}