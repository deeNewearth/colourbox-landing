import React, {useEffect} from 'react';
import NotFound from '@theme-original/NotFound';

export default function NotFoundWrapper(props) {

  useEffect(()=>{
    setTimeout(()=>{
      window.location.replace('https://www.templeofcrystalorigins.com/');
    },100)
    
  },[]);

  return (
    <>
      ... Redirecting
    </>
  );
}
