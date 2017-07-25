import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

    constructor(private _http: Http) { }

    getProducts(): Observable<any> {
        return this._http.get("http://localhost:9000/product")
            .map((response: Response)=>response.json());
    }
}