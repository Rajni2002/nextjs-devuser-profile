"use client"
import React, { useEffect, useState } from 'react';
import { CommonProp, Education, Experience } from '@/types/user/resume';
import ResumeCard from './card/resume-card';
import Add from './icons/add';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui';
import { Input } from './ui/input';
import { DatePicker } from './ui/date-picker';
import { Checkbox } from './ui/checkbox';

type ManageWorkProps = {
    type: "work" | "education",
    values: Education[] | Experience[],
    toAdd: boolean
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
                    <Input name={props.type === "education" ? "college_name" : "company_name"} label={props.type === "education" ? "College Name" : "Company Name"} />
                    <Input name={props.type === "education" ? "degree" : "role"} label={props.type === "education" ? "Degree" : "Role"} />
                    <Input name='location' label='Location' />
                    <Input name='website' label='Website' />
                    <Input name='avatar_url' label='Company Avatar URL' />
                    <Input name='description' label='Description' />
                    <DatePicker label='Start Date' date={modalData?.start_date ?? new Date()} setDate={(date) => {
                        setDate(date ?? new Date(), "start_date")
                    }} />
                    <DatePicker disabled={modalData.end_date === "Present"} label='End Date' date={modalData?.start_date ?? new Date()} setDate={(date) => {
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
                    <Button variant="outline" onClick={() => {
                        handleOpenDialog(false)
                    }}>Cancel</Button>
                    <br />
                    <Button >Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ManageWorks;
