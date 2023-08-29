"use client"
import EditWrapper from '@/components/edit-wrapper';
import ManageChips from '@/components/manage-chips';
import ManageWorks from '@/components/manage-works';
import { Input } from '@/components/ui/input';
import { useGlobalContext } from '@/context/app';
import skillList from '@/data/skills';
import { NameUrlTemplate, Resume } from '@/types/user/resume';
import React, { useState } from 'react';


const Page = () => {
    const [appState] = useGlobalContext();
    const [resume, setResume] = useState<Resume>(() => appState?.resume);
    const onAdd = (name: "tech_skills" | "languages", item: NameUrlTemplate) => {
        setResume(prev => ({
            ...prev,
            [name]: prev[name].find((content) => content.label === item.label) ?
                prev[name].filter((content) => content.label !== item.label)
                : [...prev[name], item]
        }))
    }
    return (
        <EditWrapper>
            <Input name='about_me' label='About me' value={resume.about_me} onChange={(e) => {
                const { name, value } = e.target;
                setResume(prev => ({
                    ...prev,
                    [name]: value
                }))
            }} />
            <ManageWorks toAdd type="work" values={resume.work_experiences} />
            <ManageWorks toAdd type="education" values={resume.education} />
            <ManageChips label='Tech skills' withIcon toAdd values={resume.tech_skills} options={skillList} onAdd={(item) => {
                onAdd("tech_skills", item)
            }} />
        </EditWrapper>
    );
};

export default Page;