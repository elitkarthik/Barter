export class Item{    
    public id:number;
    public name: string;
    public categoryId: Array<number>;
    public categoryName: Array<string>;
    public createdDate: string;
    public image: string;
    public description: string='';
}