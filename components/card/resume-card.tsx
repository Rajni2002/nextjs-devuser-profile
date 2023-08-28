import React from 'react';
import { CommonProp, EducationType, ExperienceType } from '@/types/user/resume';
import Avatar from '../ui/avatar';
import { format } from "date-fns"


const ResumeCard = <T extends EducationType | ExperienceType>(props: CommonProp & T) => {
    return (
        <div>
            <div>
                <Avatar src={props.avatar_url} />
            </div>
            <div>
                <div>
                    <h2>{'college_name' in props ? props.college_name : props.role}</h2>
                    <div className='text-justify'>
                        <span className='font-light'>
                            {props.location}
                            •
                            {'company_name' in props ? props.company_name : props.degree}
                        </span>
                        <span className='font-bold'>
                            {format(new Date(props.start_date), "PPP")}
                            -
                            {typeof props.end_date === "string" ? props.end_date : format(new Date(props.end_date), "PPP")}
                        </span>
                    </div>
                </div>
                <div>
                    {props.description}
                </div>
            </div>
        </div>
    );
};

export default ResumeCard;
