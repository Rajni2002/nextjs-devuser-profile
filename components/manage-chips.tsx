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
    withIcon: boolean;
    values: NameUrlTemplate[];
    options: NameUrlTemplate[];
    label: string;
    toAdd: boolean;
    onAdd: (item: NameUrlTemplate) => void;
}

const ManageChips = (props: ManageChipProps) => {
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <div className='my-4'>
            <h2 className="text-lg font-bold flex justify-between">
                {props.label}
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger>
                        <span className='hover:cursor-pointer'>
                            <Add />
                        </span>
                    </PopoverTrigger>
                    <PopoverContent className='p-0 w-[200px] right-6'>
                        <Command>
                            <CommandInput placeholder="Search Skills..." className="h-9" />
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
                                                props.values.find((content) => content.label === item.label) ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
            </h2>
            <div className='flex mt-3 flex-wrap'>
                {props.values && props.values.map((item) => (
                    <Chip className='flex items-center space-x-2 w-fit' key={Math.random()} iconPath={`/skills/${item.icon}.svg`}>
                        {item.label}
                    </Chip>
                ))}
            </div>
        </div>
    );
};

export default ManageChips;
