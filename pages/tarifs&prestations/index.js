import Tarifs from '../src/components/events/tarifs';
import React from 'react';

const TarifsPrestation = ({data}) => {
    return (<Tarifs data={data} />);
}


export default TarifsPrestation;

export async function getServerSideProps() {

    const {tarifsPrestation} = await import('/data/data.json');
    return {
        props: {
          data: tarifsPrestation
        }
    }
}