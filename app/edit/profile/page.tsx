"use client"
import EditWrapper from '@/components/edit-wrapper';
import ProfileInputs from '@/components/profile-inputs';
import SaveButtonPair from '@/components/save-button-pair';
import ToggleLabel from '@/components/ui/toggle-labels';
import UploadPic from '@/components/upload-picture';
import { useGlobalContext } from '@/context/app';
import { ActionTypes } from '@/context/app.reducer';
import { Profile } from '@/types/user/profile';
import React, { useEffect, useState } from 'react';
import { SelectSingleEventHandler } from 'react-day-picker';

const Page = () => {
    const [appState, dispatch] = useGlobalContext();
    const [profile, setProfile] = useState<Profile>(() => appState?.profile);

    useEffect(() => {
        setProfile(appState?.profile)
    }, [appState])

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
        if (!files) return;
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.addEventListener('load', () => {
            setProfile(prev => ({
                ...prev,
                profilePic: typeof reader.result === "string" ? reader.result : ""
            }))
        });

    }
    const resetProfileImage = () => {
        setProfile(prev => ({
            ...prev,
            profilePic: ""
        }))
    }
    const handleGenderInput = (value: string) => {
        setProfile((prev) => ({
            ...prev,
            Gender: value === "Male" ? "Male" : "Female"
        }))
    }

    const saveChanges = () => {
        dispatch({
            type: ActionTypes.SET_PROFILE,
            payload: profile
        })
    }

    const onCancelHandler = () => {
        setProfile(appState.profile)
    }

    const toggleArray: {
        visibityKey: string;
        header: string;
        sub_heading: string;
    }[] = [
            {
                visibityKey: "follwers_and_following",
                header: 'Followers and following',
                sub_heading: 'Shows your followers and the users you follow on codedamn'
            },
            {
                visibityKey: "xp",
                header: 'XP',
                sub_heading: "Shows the XP you have earned"
            },
            {
                visibityKey: "badges",
                header: 'Achievement badges',
                sub_heading: "Shows your relative percentile and proficiency"
            },
        ]

    return (
        <EditWrapper>
            <UploadPic onProfilePicChange={onProfilePicChange} avatarFile={profile.profilePic} resetProfileImage={resetProfileImage} />
            <ProfileInputs profile={profile} setDate={setDate} onInputChange={onInputChange} handleGenderInput={handleGenderInput} />
            <h1 className='font-bold mt-16 text-lg'>Section visibility</h1>
            <span className='text-sm text-gray-500'>Select which sections and content should show on your profile page.</span>
            <div className='p-6 bg-gray-50 rounded-xl mt-4'>
                {toggleArray.map((item) => (
                    <ToggleLabel
                        key={Math.random()}
                        state={profile.visibility[item.visibityKey as keyof typeof profile.visibility]}
                        header={item.header}
                        sub_heading={item.sub_heading}
                        clickHandler={() => {
                            setProfile(prev => ({
                                ...prev,
                                visibility: {
                                    ...prev.visibility,
                                    [item.visibityKey]: !prev.visibility[item.visibityKey as keyof typeof profile.visibility]
                                }
                            }))
                        }}
                    />))}
            </div>
            <SaveButtonPair onSaveHandler={saveChanges} onCancelHandler={onCancelHandler} />
        </EditWrapper>
    );
};

export default Page;
