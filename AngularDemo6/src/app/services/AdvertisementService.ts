import {Injectable} from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
import 'rxjs/add/operator/map';


@Injectable()
export class AdService{

    items:String[];
    objToUpdate:any;
    public adArray: Array<{ name:String, category:String, description:String }> = [];

    constructor(private _http: Http){
        this.items=['Furniture', 'Hardware', 'Mobile' ];
    }

    demogetCategories()
    {
        return this._http.get("http://192.168.3.144:9000/categories"). map((response: Response)=>response.json())
    }

    getCategories(){
        return this.items;
    }

    insertAd(obj:any){
        this.adArray.push(obj);
        this.postAd();
       // console.log(this.adArray);
    }

    getAdArray()
    {
        return this.adArray;
    }

    deleteAd(ad:any){
        let index=this.adArray.indexOf(ad);
        this.adArray.splice(index,1);
        console.log("After Delete",this.adArray);
    }

    addObjToupdate(ad:any)
    {
       this.objToUpdate=ad;
    }

    getObjToUpdate()
    {
        return this.objToUpdate;
    }

    updateAd(updatedObj:any)
    {
        let index=this.adArray.indexOf(this.objToUpdate);
        this.adArray.splice(index,1,updatedObj);
        console.log("After Delete",this.adArray);
    }


    postAd() {
        console.log("In postAd");
        let url = "http://192.168.3.144:9000/postAd";
        //let headers = new Headers([{ 'Content-Type': 'application/json' },
        //                            {'auth-token': '5976e85d29226d1aa3c8e17d'}]);
        let headers = new Headers();
        headers.append('auth-token', '5976f1481c0edf75e3279906');
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });

        let jsonReq = {"title": "PC sale", "name": "Lenovo all-in-one", "category": "Mobile", "description": "intel core 3"};
        let obj= this._http.post(url, jsonReq, options)
			.map((response: Response)=>response.json());
        obj.subscribe((data)=>{console.log(data)})
    }
}


