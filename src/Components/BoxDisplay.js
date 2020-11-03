import react, { useState } from 'react';
    
const BoxDisplay = (props) => {
    const {color,width,height} = props;

    return (
        <>
            <div style={{backgroundColor:color,width:width,height:height}}>
            </div>
        </>
    );
};
    
export default BoxDisplay;