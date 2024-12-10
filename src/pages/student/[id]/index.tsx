import { useRouter } from 'next/router'
import Link from 'next/link'

import React from 'react'
import { GoogleRecaptcha } from '../../../components/GoogleRecaptcha';

const NewsItem = () => {
  const router= useRouter();
  const{id}=router.query;
  return (
    <div>index news item {id} 
   <Link href="/student"> Student Page Back </Link>

   <button onClick={()=>router.push('/student')} > کلیک کنید تا به صفحه دانش آموزان بروید</button>
   <GoogleRecaptcha/>
    </div>
  )
}

export default NewsItem