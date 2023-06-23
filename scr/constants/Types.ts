
interface user {
    name:string;
    age:number;
}

interface product{
    title:string;
    price:number;
}

interface category{
    type:string;
    name:string;
}
interface HomeProps  {
    name: string;
    countLevel?: number;
    onIncrement:()=>void;
    onDecrement:()=>void;
  };

export {user,product,category,HomeProps};