"use client"
import EditWrapper from '@/components/edit-wrapper';
import ManageWorks from '@/components/manage-works';
import { Input } from '@/components/ui/input';
import { useGlobalContext } from '@/context/app';
import { Resume } from '@/types/user/resume';
import React, { useState } from 'react';

const Page = () => {
    const [appState, dispatch] = useGlobalContext();
    const [resume, setResume] = useState<Resume>(() => appState?.resume);
    return (
        <EditWrapper>
            <Input name='about_me' label='About me' value={resume.about_me} onChange={(e) => {
                const { name, value } = e.target;
                setResume(prev => ({
                    ...prev,
                    [name]: value
                }))
            }} />
            <ManageWorks type="work" values={resume.work_experiences} />
            <ManageWorks type="education" values={resume.education} />
        </EditWrapper>
    );
};

export default Page;