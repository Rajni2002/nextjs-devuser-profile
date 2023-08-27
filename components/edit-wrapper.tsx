import React from 'react';
import ChidrenPropType from "@/interfaces/props/layouts"

const EditWrapper = ({ children }: ChidrenPropType) => {
    return (
        <div className='sm:px-20 sm:py-0 p-4 mb-4'>
            {children}
        </div>
    );
};

export default EditWrapper;
