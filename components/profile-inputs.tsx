"use client"
import React from 'react';
import { Input } from './ui/input';
import { DatePicker } from './ui/date-picker';
import { Profile } from '@/types/user/profile';
import { SelectSingleEventHandler } from 'react-day-picker';

type ProfileInputs = {
    setDate: SelectSingleEventHandler;
    onInputChange: React.ChangeEventHandler<HTMLInputElement>;
    profile: Profile;
    onToggleChange?: () => void;
}

const ProfileInputs = (props: ProfileInputs) => {
    return (
        <div>
            <Input name='displayName' label='Display name' className='!mb-0' onChange={props.onInputChange} />
            <span className='text-sm font-light text-gray-500'>Name entered above will be used for all issued certificates</span>
            <Input name='about' label='About' onChange={props.onInputChange} />
            <Input name='profession' label='Profession' onChange={props.onInputChange} />
            <DatePicker label='Date of birth' date={props.profile.dob} setDate={props.setDate} />
        </div>
    );
};

export default ProfileInputs;
