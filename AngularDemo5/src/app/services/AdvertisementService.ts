import {Injectable} from '@angular/core'

@Injectable()
export class AdService{

    items:String[];
    objToUpdate:any;
    public adArray: Array<{ name:String, category:String, description:String }> = [];

    constructor(){
        this.items=['Furniture', 'Hardware', 'Mobile' ];
    }

    getCategories(){
        return this.items;
    }

    insertAd(obj:any){
        this.adArray.push(obj);
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
}


