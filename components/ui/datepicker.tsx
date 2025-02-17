"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon, X as ClearIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);

  const clearDates = () => {
    setDate(undefined);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "flex items-center justify-center text-right font-normal",
              !date ? "w-10 h-10 p-0 rounded-full" : "w-[300px]",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="h-6 w-6" />
            {date?.from && (
              <span className="ml-2">
                {date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            classNames={{
              day: "text-indigo-700",
              day_selected: "bg-indigo-700 text-white",
              day_range_end: "bg-indigo-700 text-white rounded-r-md",
              day_range_middle: "bg-indigo-400 text-white",
              day_today: "bg-indigo-700 text-white",
              day_range_start: "bg-indigo-700 text-white rounded-l-md",
            }}
          />
          <div className="flex justify-end p-2">
            <Button variant="ghost" onClick={clearDates}>
              <ClearIcon className="mr-2 h-4 w-4" />
              Clear
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}