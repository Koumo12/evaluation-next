import React, {children} from "react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

function MainLayout ({children, photo}) {
    return (
        <>
            <Header data={photo}/>
                <main>{children}</main>
            <Footer />
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