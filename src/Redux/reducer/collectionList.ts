
import img1 from "../../img/1222983.jpg";
import img2 from "../../img/1271752.jpg";
import img3 from "../../img/1271796.jpg";
import img4 from "../../img/1196306.jpg";
import img5 from "../../img/sanch.jpg";
import img6 from "../../img/wp6637384-pakistani-actress-wallpapers.jpg";
import img7 from "../../img/92113858.jpg";
import img8 from "../../img/Katherine-Langford-Photos.jpg";
import img9 from "../../img/Krithi-Shetty-in-a-yellow-bhargavi-kunam-half-saree-for-sankranthi-1068x1335.jpg";
import img10 from "../../img/Krithi-Shetty-in-a-yellow-bhargavi-kunam-half-saree-for-sankranthi-2-1068x1335.jpg";
import img11 from "../../img/Malayalam-serial-actress-Saree-hot-photos-Swathy-Nithyanand-very-Hot-And-Beautiful-Photos-74441.jpg";
import img12 from "../../img/Pooja-Hegde-1.jpg";
import img13 from "../../img/Pooja_Hegde_at_Ala_Vaikunthapurramuloo_thanks_meet.jpg";
import img14 from "../../img/Pooja_Hegde_in_2020.jpg";
import img15 from "../../img/Rashmika-Images.jpg";
import img16 from "../../img/Rashmika-Wallpaper-Full-HD.jpg";
import img17 from "../../img/Rashmika-Wallpaper-For-Deskop.jpg";

export interface IData {
    image: string;
    link: string;
    id: number;
    body: {
      name: string;
      category?: string;
      duration?:number;
      language?:string;
      storyType?:boolean;
      fullVideo?:boolean;
    };
  }

export const collectionList=():IData[]=>{   
    const dataBase=[
      {
        image:img1,
        link:"links",
        id:0,
        body:{
          name:"pakistani actress",
          category:"ullu",
          duration:10,
          language:"urdu",
          storyTpe:true,
          fullVideo:false,
        }
      },
      {
        image:img2,
        link:"links",
        id:0,
        body:{
          name:"kajal agarawal",
          category:"ullu",
          duration:20,
          language:"hindi",
          storyTpe:true,
          fullVideo:true,
        }
      },
      {
        image:img3,
        link:"links",
        id:0,
        body:{
          name:"kajal agarawal",
          category:"ullu",
          duration:22,
          language:"hindi",
          storyTpe:true,
          fullVideo:false,
        }
      },
      {
        image:img4,
        link:"links",
        id:0,
        body:{
          name:"kajal agarawal",
          category:"kooku",
          duration:10,
          language:"hindi",
          storyTpe:false,
          fullVideo:false,
        }
      },
      {
        image:img5,
        link:"links",
        id:0,
        body:{
          name:"sanchita",
          category:"kooku",
          duration:10,
          language:"hindi",
          storyTpe:true,
          fullVideo:true,
        }
      },
      {
        image:img6,
        link:"links",
        id:0,
        body:{
          name:"pakistani actress",
          category:"kooku",
          duration:20,
          language:"urdu",
          storyTpe:true,
          fullVideo:false,
        }
      },
      {
        image:img7,
        link:"links",
        id:0,
        body:{
          name:"pooja",
          category:"netflix",
          duration:60,
          language:"hindi",
          storyTpe:true,
          fullVideo:true,
        }
      },
      {
        image:img8,
        link:"links",
        id:0,
        body:{
          name:"kathrine",
          category:"netflix",
          duration:60,
          language:"english",
          storyTpe:true,
          fullVideo:true,
        }
      },
      {
        image:img9,
        link:"links",
        id:0,
        body:{
          name:"keerthy",
          category:"netflix",
          duration:20,
          language:"english",
          storyTpe:false,
          fullVideo:false,
        }
      },
      {
        image:img10,
        link:"links",
        id:0,
        body:{
          name:"keerthy",
          category:"amazon",
          duration:20,
          language:"tamil",
          storyTpe:false,
          fullVideo:true,
        }
      },
      {
        image:img11,
        link:"links",
        id:0,
        body:{
          name:"south actress",
          category:"amazon",
          duration:10,
          language:"tamil",
          storyTpe:true,
          fullVideo:false,
        }
      },
      {
        image:img12,
        link:"links",
        id:0,
        body:{
          name:"pooja",
          category:"ullu",
          duration:20,
          language:"hindi",
          storyTpe:true,
          fullVideo:false,
        }
      },
      {
        image:img13,
        link:"links",
        id:0,
        body:{
          name:"pooja",
          category:"kooku",
          duration:10,
          language:"urdu",
          storyTpe:true,
          fullVideo:false,
        }
      },
      {
        image:img14,
        link:"links",
        id:0,
        body:{
          name:"pooja",
          category:"netflix",
          duration:20,
          language:"urdu",
          storyTpe:false,
          fullVideo:false,
        }
      },
      {
        image:img15,
        link:"links",
        id:0,
        body:{
          name:"rashmika",
          category:"amazon",
          duration:60,
          language:"tamil",
          storyTpe:true,
          fullVideo:true,
        }
      },
      {
        image:img16,
        link:"links",
        id:0,
        body:{
          name:"rashmika",
          category:"kooku",
          duration:20,
          language:"hindi",
          storyTpe:true,
          fullVideo:false,
        }
      },
      {
        image:img17,
        link:"links",
        id:0,
        body:{
          name:"rashmika",
          category:"netfilx",
          duration:10,
          language:"urdu",
          storyTpe:true,
          fullVideo:false,
        }
      },
    
    ]
    const list=dataBase.reverse();
    for (let i = 0; i < list.length; i++) {
          list[i].id=i+1
    }
  return list;
}
