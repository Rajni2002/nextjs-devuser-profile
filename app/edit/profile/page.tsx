"use client"
import ProfileInputs from '@/components/profile-inputs';
import UploadPic from '@/components/upload-picture';
import { useGlobalContext } from '@/context/app';
import { useLog } from '@/lib/hooks/use-log';
import { Profile } from '@/types/user/profile';
import React, { useState } from 'react';
import { SelectSingleEventHandler } from 'react-day-picker';

const Page = () => {
    const [appState] = useGlobalContext();
    const [profile, setProfile] = useState<Profile>(() => appState?.profile);
    useLog(profile);
    const setDate: SelectSingleEventHandler = (selectedDay) => {
        setProfile((prev) => ({
            ...prev,
            dob: selectedDay ?? new Date()
        }))
    }
    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const onProfilePicChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { files } = e.target;
        setProfile(prev => ({
            ...prev,
            profilePic: files ? files[0] : null
        }))
    }
    return (
        <div className='sm:px-20 sm:py-0 p-4'>
            <UploadPic onProfilePicChange={onProfilePicChange} avatarFile={profile.profilePic}/>
            <ProfileInputs profile={profile} setDate={setDate} onInputChange={onInputChange} />
        </div>
    );
};

export default Page;
