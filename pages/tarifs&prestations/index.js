
import React from 'react';
import Link from 'next/link';

const TarifsPrestation = ({data}) => {
    return (
        <div className="">           
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-12 text-center "><h1><strong>Nos offres</strong></h1></div>
                </div>
                
                <div className='row'>
                    {data.map((ev) =>                 
                        <>  
                            {
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className="card mt-4 text-center ">   
                                        <div className='card-body'>
                                            <div className="card-title ">
                                                    <strong className='header d-block'>
                                                        {ev.title}
                                                    </strong>
                                                </div>                                     
                                                <ul className="list-group list-group-flush">                                           
                                                    <li className="list-group-item">
                                                        <strong> 
                                                            {ev.prix} 
                                                        </strong>
                                                    </li>
                                                    <li className="list-group-item hauteur">
                                                        {ev.description}
                                                    </li>
                                                    <li className="list-group-item pt-4">
                                                        <span type="button"  >
                                                            <Link className='button outline' href={'/contact'}>
                                                                Rendez-vous
                                                            </Link>  
                                                        </span>
                                                    </li>
                                                </ul>
                                        </div>
                                    </div>
                                </div>                           
                            }
                        </>
                    )}
                </div>
                
            </div>
        </div>
    );
}


export default TarifsPrestation;


export async function getServerSideProps () {
    const {tarifsPrestation} = await import('/data/data.json');

    return {
        props: {
          data: tarifsPrestation,
        }
    }
}