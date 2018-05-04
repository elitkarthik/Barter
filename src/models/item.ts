export class Item{
    constructor(
        public id:number,
        public name: string,
        public image: string,
        public categoryId: number,
        public categoryName: string,
        public createdDate: string
    ){

    }
}