import React from 'react';
import { Toggle } from '.';

import ToggleProps from '@/interfaces/props/toggle';

type ToggleInputProps = ToggleProps & {
    header: string;
    sub_heading: string;
}

const ToggleLabel = (props: ToggleInputProps) => {
    return (
        <div className='flex justify-between my-3'>
            <div>
                <h1 className="text-sm font-medium">{props.header}</h1>
                <p className='text-sm font-light text-gray-500'>{props.sub_heading}</p>
            </div>
            <Toggle state={props.state} clickHandler={props.clickHandler} />
        </div>
    );
};

export default ToggleLabel;
