import { ArrowDownUp, LucideIcon, MoveDown, MoveUp } from "lucide-react";

export interface BtnShowDataProps {
  children?: React.ReactNode;
  title: string;
  icon: LucideIcon;
  data: string;
  type: "increase" | "decrease";
  percent: string;
  totalTransações: number;
}

export function BtnShowData({
  title,
  icon: Icon,
  data,
  type,
  percent,
  totalTransações,
}: BtnShowDataProps) {
  return (
    <main>
      <button className="flex flex-col w-56 h-28 bg-indigo-100 text-indigo-700 m-0 hover:bg-indigo-400 hover:text-indigo-100 rounded-md focus:bg-indigo-700 focus:text-indigo-100">
        <div className="flex flex-row w-full justify-between items-center px-1 pt-0.5 text-lg">
          <h5 className="">{title}</h5>
          <Icon className="size-5" />
        </div>
        <div className="flex w-full justify-center items-center pb-1">
          <span className="text-4xl">{data}</span>
        </div>
        <div className="flex w-full justify-between items-center">
          <div
            className={`flex flex-row justify-center items-center w-12 m-2 p-0 text-xs rounded-sm size-4 ${
              type === "increase"
                ? "bg-green-400 text-green-700"
                : type === "decrease"
                ? "bg-red-400 text-red-700"
                : ""
            }`}
          >
            {type === "increase" ? (
              <MoveUp className="size-3" />
            ) : type === "decrease" ? (
              <MoveDown className="size-3" />
            ) : null}
            <span className="text-[10px]">{percent}</span>
          </div>
          <div className="flex flex-row justify-end items-center w-auto m-2 text-xs gap-1">
            <div className="bg-zinc-400 rounded-full p-0.5">
              <ArrowDownUp className="size-3" />
            </div>
            <span className="flex text-[10px] items-center justify-center">
              {totalTransações} Transações
            </span>
          </div>
        </div>
      </button>
    </main>
  );
}
