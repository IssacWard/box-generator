import react, { useState } from 'react';
    
    
const BoxForm = (props) => {
    const {inputs,handleForm,handleSubmit} = props;

    return (
        <form onSubmit={ handleSubmit }>
            <label>Color:</label>
            <input type="text" name="color" value={inputs.color} onChange={handleForm}/>
            <label>Width:</label>
            <input type="number" name="width" value={inputs.width} onChange={handleForm}/>
            <label>Height:</label>
            <input type="number" name="height" value={inputs.height} onChange={handleForm}/>
            <input type="submit" value="Set Color" />
        </form>
    );
};
    
export default BoxForm;