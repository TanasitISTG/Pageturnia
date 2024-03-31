import { Injectable } from "@angular/core";
import { BaseRepository } from "./base.repository";
import { Observable } from "rxjs";
import { Novel } from "../models/novel.model";

@Injectable({
	providedIn: 'root',
})
export abstract class NovelRepository extends BaseRepository {
    abstract getNovels(): Observable<Novel[]>;
}