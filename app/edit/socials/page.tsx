"use client"
import EditWrapper from '@/components/edit-wrapper';
import SaveButtonPair from '@/components/save-button-pair';
import { Input } from '@/components/ui/input';
import { useGlobalContext } from '@/context/app';
import { ActionTypes } from '@/context/app.reducer';
import { Social } from '@/types/user/social';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [appState, dispatch] = useGlobalContext();
    const [social, setSocial] = useState<Social>(() => appState.socials);
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setSocial(prev => ({
            ...prev,
            [name]: value
        }))
    }
    useEffect(() => {
        setSocial(appState.socials)
    }, [appState])
    return (
        <EditWrapper>
            <Input name='github' label="GitHub"
                placeholder="GitHub profile URL"
                onChange={handleInputChange} 
                value={social.github}/>

            <Input name='linkedin' label="LinkedIn"
                placeholder="Linkedin profile URL"
                onChange={handleInputChange} 
                value={social.linkedin}/>

            <Input name='facebook' label="Facebook"
                placeholder="Facebook profile URL"
                onChange={handleInputChange} 
                value={social.facebook}/>

            <Input name='instagram' label="Instagram"
                placeholder="Instagram profile URL"
                onChange={handleInputChange} 
                value={social.instagram}/>

            <Input name='behance' label="Behance"
                placeholder="Behance profile URL"
                onChange={handleInputChange} 
                value={social.behance}/>

            <SaveButtonPair onSaveHandler={() => {
                // alert(social instanceof Social)
                dispatch({
                    type: ActionTypes.SET_SOCIAL,
                    payload: social
                })
            }} onCancelHandler={() => {
                setSocial(appState.socials)
            }} />
        </EditWrapper>
    );
};

export default Page;

/**
 * Why this thing does'nt work accordingly ?
 * const socialInputs = [
        {
            label: "GitHub",
            name: "github",
            placeholder: "GitHub profile URL"
        },
        {
            label: "LinkedIn",
            name: "linkedin",
            placeholder: "Linkedin profile URL"
        },
        {
            label: "Facebook",
            name: "facebook",
            placeholder: "Facebook profile URL"
        },
        {
            label: "Instagram",
            name: "instagram",
            placeholder: "Instagram profile URL"
        },
        {
            label: "Behance",
            name: "behance",
            placeholder: "Behance profile URL"
        },
    ]
 * <EditWrapper>
            {
                socialInputs.map((item) => <Input key={Math.random()} {...item} defaultValue={social[item.name as keyof typeof social]} onChange={handleInputChange} />)
            }
        </EditWrapper>
 */