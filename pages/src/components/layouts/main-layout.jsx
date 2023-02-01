import React, {children} from "react";
import Image from 'next/image';
import Link from 'next/link';


function MainLayout ({children, photo}) {
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark header">
            <div className='container-fluid d-flex' >
                <div className="navbar-brand brand" >
                    <Image alt="logo" src={'/images/logo.png'} width={80} height={50} />
                </div> 
                
                <div className=" navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav  m-auto">
                        <div className="nav-item m-3" >
                            <Link href="/" className='Color'  passHref>Accueil</Link>
                        </div>
                        <div className="nav-item m-3">
                            <Link href="/galerie" className='Color' passHref>Galerie</Link>
                        </div>                                               
                        <div className="nav-item m-3">
                            <Link href="/tarifs&prestations" className='Color' passHref>Tarifs</Link>
                        </div>
                        <div className="nav-item m-3">
                            <Link href="/contact" className='Color' passHref>Contact</Link>
                        </div>                                                        
                    </div>
                </div>
            </div>
        </div> 
                <main>{children}</main>
        <div className="footer">
            <p>©2022 Evaluation Studi - Projet React </p>
        </div>
        </>
    );
}

export default MainLayout;

export async function getServerSideProps() {

    try {
      const req = await axios.get('http://localhost:1337/api/photos?populate=*');
      
      return { props: {
                  photo : req.data,
                }
              };
  
    } catch (error) {
      return {error};
    }
  }