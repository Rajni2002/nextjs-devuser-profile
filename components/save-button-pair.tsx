import React from 'react';
import { Button } from './ui';

type SaveButtonPair = {
    onCancelHandler: () => void;
    onSaveHandler: () => void;
}

const SaveButtonPair = (props: SaveButtonPair) => {
    return (
        <div className='my-10 flex justify-end'>
            <Button variant="ghost" onClick={props.onCancelHandler}>Cancel</Button>
            <Button className='ml-4' onClick={()=>{
                props.onSaveHandler();
                alert("Changes Saved !")
            }}>Save Changes</Button>
        </div>
    );
};

export default SaveButtonPair;
