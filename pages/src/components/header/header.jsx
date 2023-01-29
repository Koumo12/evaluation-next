import Image from 'next/image';
import Link from 'next/link';

export  const Header = () => {

    return(       
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
    );
}

