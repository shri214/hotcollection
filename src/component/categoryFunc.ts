import { IData } from "../Redux/reducer/collectionList";

export const categoryFunc=(data:IData[], cat:string):IData[]=>{
    const filteredData= data.filter((val)=>val.body.category===cat);
    console.log("filter data is :",filteredData);
    return filteredData;
}