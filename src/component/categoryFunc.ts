import { IData } from "../Redux/reducer/collectionList";

export const categoryFunc=(data:IData[], cat:string):IData[]=>{
    const filteredData= data.filter((val)=>val.body.category===cat);
    return filteredData;
}