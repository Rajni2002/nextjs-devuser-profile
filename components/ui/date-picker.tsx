"use client"
import * as React from "react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image"
import { SelectSingleEventHandler } from "react-day-picker"

type DatePicker = {
    date: Date;
    setDate: SelectSingleEventHandler;
    label?: string;
    disabled?: boolean;
}

export function DatePicker({ date = new Date(), setDate, disabled = false, label = "" }: DatePicker) {
    return (
        <Popover>
            {label !== "" && <label className="text-sm font-medium">{label}</label>}
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={cn(
                        "w-full my-3 justify-between text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                    disabled={disabled}
                >
                    {date ? format(new Date(date), "PPP") : <span>Pick a date</span>}
                    <Image src="/calendar.svg" alt="calendar" width={15} height={15} className="mr-3" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={disabled}
                />
            </PopoverContent>
        </Popover>
    )
}
