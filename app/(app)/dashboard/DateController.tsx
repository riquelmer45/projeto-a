import { DatePickerWithRange } from "@/components/ui/datepicker";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";
import { useState, SetStateAction } from "react";


export default function DateController() {
    const [selectedPeriod, setSelectedPeriod] = useState("month");

    const handleSelectChange = (value: SetStateAction<string>) => {
        setSelectedPeriod(value);
    };

    return(
        <div className="flex flex-row justify-start items-center gap-2 m-auto">
          <DatePickerWithRange />
          <div className="w-32">
            <Select value={selectedPeriod} onValueChange={handleSelectChange}>
              <SelectTrigger className="w-[320px]">
                <SelectValue placeholder="Mês" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Dia</SelectItem>
                <SelectItem value="month">Mês</SelectItem>
                <SelectItem value="year">Ano</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
    )
}