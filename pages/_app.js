import '@/styles/globals.css'
import MainLayout from './src/components/layouts/main-layout'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
