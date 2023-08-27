"use client"
import React from 'react';
import { Input } from './ui/input';
import { DatePicker } from './ui/date-picker';
import { Profile } from '@/types/user/profile';
import { SelectSingleEventHandler } from 'react-day-picker';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type ProfileInputs = {
    setDate: SelectSingleEventHandler;
    onInputChange: React.ChangeEventHandler<HTMLInputElement>;
    profile: Profile;
    onToggleChange?: () => void;
    handleGenderInput: (value: string) => void;
}

const ProfileInputs = (props: ProfileInputs) => {
    return (
        <div>
            <Input name='displayName' value={props.profile.displayName} label='Display name' className='!mb-0' onChange={props.onInputChange} />
            <span className='text-sm font-light text-gray-500'>Name entered above will be used for all issued certificates</span>
            <Input name='about' value={props.profile.about} label='About' onChange={props.onInputChange} />
            <Input name='profession' value={props.profile.profession} label='Profession' onChange={props.onInputChange} />
            <DatePicker label='Date of birth' date={props.profile.dob} setDate={props.setDate} />
            <div className='mt-4'>
                <Select onValueChange={props.handleGenderInput} value={props.profile.Gender}>
                    <label className="text-sm font-medium">Gender</label>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="What is your Gender" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

        </div>
    );
};

export default ProfileInputs;
