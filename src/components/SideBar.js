import React from 'react';
import Bag from './Bag';

function Pears(props) {
    <Bag children={<Pears friend="Peter" />} />
    return (
        <h2>I don't like pears, but my friend, {props.friend}, does!</h2>
    )
}

export default Pears;