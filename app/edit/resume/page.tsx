"use client"
import EditWrapper from '@/components/edit-wrapper';
import ManageChips from '@/components/manage-chips';
import ManageWorks from '@/components/manage-works';
import SaveButtonPair from '@/components/save-button-pair';
import { Input } from '@/components/ui/input';
import { useGlobalContext } from '@/context/app';
import { ActionTypes } from '@/context/app.reducer';
import lang from '@/data/lang';
import skillList from '@/data/skills';
import { NameUrlTemplate, Resume } from '@/types/user/resume';
import React, { useEffect, useState } from 'react';


const Page = () => {
    const [appState, dispatch] = useGlobalContext();
    const [resume, setResume] = useState<Resume>(() => appState?.resume);
    const onAdd = (name: "tech_skills" | "languages" | "interests", item: NameUrlTemplate | string) => {
        if (typeof item === "string" && name === "interests") {
            setResume(prev => ({
                ...prev,
                [name]: prev[name].find((content) => content === item) ?
                    prev[name].filter((content) => content !== item)
                    : [...prev[name], item]
            }))
            return;
        }
        if (name === "interests" || typeof item === "string") return;
        setResume(prev => ({
            ...prev,
            [name]: prev[name].find((content: NameUrlTemplate) => content.label === item.label) ?
                prev[name].filter((content: NameUrlTemplate) => content.label !== item.label)
                : [...prev[name], item]
        }))
    }
    useEffect(() => {
        setResume(appState.resume);
    }, [appState])
    return (
        <EditWrapper>
            <Input name='about_me' className='' label='About me' value={resume.about_me} onChange={(e) => {
                const { name, value } = e.target;
                setResume(prev => ({
                    ...prev,
                    [name]: value
                }))
            }} />
            <ManageWorks toAdd type="work" values={resume.work_experiences} dispatch={dispatch} />
            <ManageWorks toAdd type="education" values={resume.education} dispatch={dispatch} />
            <ManageChips label='Tech skills' withIcon toAdd values={resume.tech_skills} options={skillList} onAdd={(item) => {
                onAdd("tech_skills", item)
            }} />
            <ManageChips label='Interest' withIcon={false} toAdd values={resume.interests} onAdd={(item) => {
                onAdd("interests", item)
            }} />
            <ManageChips label='Languages' withIcon toAdd values={resume.languages} options={lang} onAdd={(item) => {
                onAdd("languages", item)
            }} />
            <SaveButtonPair onSaveHandler={() => {
                dispatch({
                    type: ActionTypes.SET_RESUME,
                    payload: resume
                })
            }} onCancelHandler={() => {
                setResume(appState.resume)
            }} />
        </EditWrapper>
    );
};

export default Page;