
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

const CategoryList = ({options}) => {
  return (
    options && options.map(option => 
      <>
        <option name={option.id} key={option.id} value={option.attributes.category}>
          {option.attributes.category}
        </option>
      </> 
    )
  )
}

const CatPage = ({photo, error}) => {
    const [query, setQuery] = useState('');
     


    if(error) {
      return <div>Erreur: {error.message}</div>
    }

    //Our search filter function
  const searchFilter = (array) => {
    return array.filter(
      (el) => el.attributes.category.toLowerCase().includes(query)
      
    )
  }
  
  //Applying our search filter function to our array of countries recieved from the API
    const filtered = searchFilter(photo.data)

  
  //Handling the input on our search bar
  const handleChange =  (e) => {
    setQuery(e.target.value);
  }

  

    return (
        <div className="container-fluid p-5 galerie">
            <div className="row text-center"><h1><strong>Nos collections</strong></h1></div>
            
            <div className="row ">
              <div className='col-md-10 m-auto mt-4 justify-between'>
                  
              </div>
              
              <div className='col-md-2 m-auto mt-4 justify-between'>
                  <select                      
                      name="category"
                      value={query.category}
                      onChange={handleChange}                       
                      className="form-control" 
                      key={photo.data.id}                       
                  >
                    <option value="">Filtre</option>
                    { <CategoryList options={photo.data} /> }
                  </select>                  
              </div>                
            </div>
            <div className="row  p-2" key={photo.data.id} >         
              { filtered.map((ev) =>                 
                    <>                      
                      { ev.attributes.images.data.map((ev2) =>
                          <>
                            <div className="col-lg-3 col-md-4 col-sm-6 pt-4" key={ev2.attributes.id}>
                              <Image src={`https://strapi-108375-0.cloudclusters.net${ev2.attributes.formats.medium.url}`} width={260} height={200} alt={ev2.attributes.name} />
                            </div>
                          </>
                        )                          
                      }                                       
                    </>
              )}              
            </div>
        </div>
    )
}


export default CatPage;

export async function getServerSideProps() {

  try {
    const req= await axios.get('https://strapi-108375-0.cloudclusters.net/api/photos?populate=*');
  
    return { props: {
                photo :req.data,
              }
            };

  } catch (error) {
    return {error};
  }
}