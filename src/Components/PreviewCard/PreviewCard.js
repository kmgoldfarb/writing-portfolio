import React from 'react';
import Auxiliary from '../../HOC/Auxiliary/Auxiliary';

const PreviewCard = (props) => {

        return (
            <Auxiliary>
                <div>{props.title}</div>
                <div>{props.description}</div>
                <div>{props.date}</div>
            </Auxiliary>
        );

    }

export default PreviewCard;