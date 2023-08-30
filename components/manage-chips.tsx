"use client"
import React from 'react';
import Chip from './ui/chip';
import { NameUrlTemplate } from '@/types/user/resume';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import Avatar from './ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import Add from './icons/add';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type ManageChipProps = {
    values: NameUrlTemplate[] | string[];
    options?: NameUrlTemplate[];
    label: string;
    toAdd: boolean;
    onAdd: (item: NameUrlTemplate | string) => void;
    withIcon: boolean;
}

const ManageChips = (props: ManageChipProps) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string>("");
    return (
        <div className='my-4'>
            <h2 className="text-lg font-bold flex justify-between">
                {props.label}
                {props.toAdd && <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger>
                        <span className='hover:cursor-pointer'>
                            <Add />
                        </span>
                    </PopoverTrigger>
                    <PopoverContent className='p-0 w-[200px] right-6'>
                        <Command>
                            <CommandInput placeholder="Search" className="h-9" value={value} onValueChange={(value) => {
                                setValue(value);
                            }} onKeyDown={(e) => {
                                console.log(e.code);
                                if (e.code === "Enter") {
                                    props.onAdd(value);
                                    setOpen(false)
                                }
                            }} />
                            {props.options &&
                                <>
                                    <CommandEmpty>No results found.</CommandEmpty>
                                    <CommandGroup heading="Skills">
                                        {props.options.map((item) => (
                                            <CommandItem key={Math.random()}
                                                onSelect={() => {
                                                    props.onAdd(item);
                                                    setOpen(false)
                                                }}>
                                                <Avatar className='w-6 h-6 object-contain mr-2' src={`/skills/${item.icon}.svg`} />
                                                <span>{item.label}</span>
                                                <CheckIcon
                                                    className={cn(
                                                        "ml-auto h-4 w-4",
                                                        [...props.values].find((content: NameUrlTemplate | string) => typeof content === "string" || typeof item === "string" ? content === item : content.label === item.label) ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </>
                            }
                        </Command>
                    </PopoverContent>
                </Popover>}
            </h2>
            {props.values.length !== 0 && <div className='flex mt-3 flex-wrap'>
                {props.values.map((item) => (
                    <Chip className='flex items-center space-x-2 w-fit' key={Math.random()} iconPath={props.withIcon ? `/skills/${typeof item === "string" ? "" : item.icon}.svg` : ""}>
                        {typeof item === "string" ? item : item.label}
                    </Chip>
                ))}
            </div>}
        </div >
    );
};

export default ManageChips;
