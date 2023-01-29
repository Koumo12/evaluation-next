import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';


export const Homepage = ({posts}) => {
    return (
        <div> 
            <Image
            className="d-block w-100"
            src="/images/Charles1.jpg"
            alt="slide"
            
            width={1200}
            height={720}
            />
        </div>
    )
}

