import React from 'react';

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
    <div>ItemNews {slug}</div>
  );
}

export default ItemNews;
