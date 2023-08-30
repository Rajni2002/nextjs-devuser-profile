import React from 'react';
import { CommonProp, EducationType, ExperienceType } from '@/types/user/resume';
import Avatar from '../ui/avatar';
import { format } from "date-fns"


const ResumeCard = <T extends EducationType | ExperienceType>(props: CommonProp & T) => {
    return (
        <div className='flex flex-col sm:flex-row p-6 bg-gray-100 rounded-xl my-3'>
            <div className='w-1/12 mb-4'>
                <Avatar className='w-10 h-10 m-auto' src={props.avatar_url} />
            </div>
            <div className='sm:w-11/12'>
                <div>
                    <h2 className='text-xl font-semibold mb-1'>{'college_name' in props ? props.college_name : props.role}</h2>
                    <div className='flex flex-col sm:flex-row justify-between mb-3 w-full'>
                        <div className='font-light w-full'>
                            {props.location}
                            &nbsp;
                            •
                            &nbsp;
                            {'company_name' in props ? props.company_name : props.degree}
                        </div>
                        <div className='font-bold w-full sm:text-right mt-3 sm:mt-0'>
                            {format(new Date(props.start_date), "PPP")}
                            &nbsp;
                            -
                            &nbsp;
                            {props.end_date === "Present" ? props.end_date : format(new Date(props.end_date), "PPP")}
                        </div>
                    </div>
                </div>
                <div className='text-gray-600 font-light'>
                    {props.description}
                </div>
            </div>
        </div>
    );
};

export default ResumeCard;
