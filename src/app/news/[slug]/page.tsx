import React from 'react';
import { GoogleRecaptcha } from '../../components/GoogleRecaptcha';

// we can not userRouter in nextjs 13 for props url
interface NewsPageProps{
  params:{slug:string}
}
const ItemNews = ({params}:NewsPageProps) => {
const{slug}=params;

  // بررسی اینکه slug وجود دارد
  if (!slug) {
    return <div>Loading...</div>; // یا نمایش پیام مناسب در صورت عدم وجود slug
  }

  return (
    <div>ItemNews {slug}
    
    <GoogleRecaptcha/>
    </div>
  );
}

export default ItemNews;
