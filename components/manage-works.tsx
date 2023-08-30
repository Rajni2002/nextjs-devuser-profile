"use client"
import React, { useEffect, useState } from 'react';
import { CommonProp, Education, Experience } from '@/types/user/resume';
import ResumeCard from './card/resume-card';
import Add from './icons/add';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { DatePicker } from './ui/date-picker';
import { Checkbox } from './ui/checkbox';
import SaveButtonPair from './save-button-pair';
import { Action, ActionTypes } from '@/context/app.reducer';

type ManageWorkProps = {
    type: "work" | "education",
    values: Education[] | Experience[],
    toAdd: boolean,
    dispatch: ({ type, payload }: Action) => void;
}
const common = {
    start_date: new Date(),
    end_date: new Date(),
    description: "",
    website: "",
    location: "",
    avatar_url: "",
}

const ManageWorks = (props: ManageWorkProps) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const handleOpenDialog = (state: boolean) => {
        setOpenDialog(state)
    }

    const [modalData, setModalData] = useState<Experience | Education | CommonProp>(common);
    useEffect(() => {
        if (props.type === "work") {
            setModalData({
                ...common,
                company_name: "",
                role: ""
            });
        } else if (props.type === "education") {
            setModalData({
                ...common,
                degree: "",
                college_name: ""
            });
        }
    }, [props.type]);

    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setModalData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const setDate = (date: Date, name: string) => {
        setModalData(prev => ({
            ...prev,
            [name]: date
        }))
    }

    return (
        <Dialog open={openDialog} onOpenChange={handleOpenDialog}>
            <div className='my-4'>
                <h2 className="text-lg font-bold flex justify-between">
                    <span>
                        {props.type === "education" ? "Education" : "Work"}
                    </span>
                    {props.toAdd && <DialogTrigger asChild>
                        <span className='hover:cursor-pointer'>
                            <Add />
                        </span>
                    </DialogTrigger>}
                </h2>
                {props.values.map((item) => (
                    <ResumeCard key={Math.random()} {...item} />
                ))}
            </div>
            <DialogContent className="max-h-screen sm:max-w-[40rem] sm:h-fit overflow-scroll">
                <DialogHeader>
                    <DialogTitle>Add  {props.type === "education" ? "Education" : "Work"}</DialogTitle>
                </DialogHeader>
                <div>
                    <Input value={props.type === "education" ? (modalData as Education).college_name : (modalData as Experience).company_name} name={props.type === "education" ? "college_name" : "company_name"} label={props.type === "education" ? "College Name" : "Company Name"} onChange={onInputChange} />
                    <Input value={props.type === "education" ? (modalData as Education).degree : (modalData as Experience).role} name={props.type === "education" ? "degree" : "role"} label={props.type === "education" ? "Degree" : "Role"} onChange={onInputChange} />
                    <Input value={modalData.location} name='location' label='Location' onChange={onInputChange} />
                    <Input value={modalData.website} name='website' label='Website' onChange={onInputChange} />
                    <Input value={modalData.avatar_url} name='avatar_url' label='Company Avatar URL' onChange={onInputChange} />
                    <Input value={modalData.description} name='description' label='Description' onChange={onInputChange} />
                    <DatePicker label='Start Date' date={modalData?.start_date ?? new Date()} setDate={(date) => {
                        setDate(date ?? new Date(), "start_date")
                    }} />
                    <DatePicker disabled={modalData.end_date === "Present"} label='End Date' date={modalData.end_date === "Present" ? new Date() : modalData?.end_date} setDate={(date) => {
                        setDate(date ?? new Date(), "end_date")
                    }} />
                    <Checkbox onClick={() => {
                        setModalData((prev) => ({
                            ...prev,
                            end_date: prev.end_date === "Present" ? new Date() : "Present"
                        }))
                    }} label="I'm currently working here" />
                </div>
                <DialogFooter>
                    <SaveButtonPair onCancelHandler={() => {
                        handleOpenDialog(false)
                    }} onSaveHandler={() => {
                        props.dispatch({
                            type: props.type === "work" ? ActionTypes.ADD_RESUME_EXP : ActionTypes.ADD_RESUME_EDU,
                            payload: modalData as Experience | Education
                        })
                        setOpenDialog(false);
                    }} />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ManageWorks;
