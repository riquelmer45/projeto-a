"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", Ganho: 186, Gasto: 80 },
  { month: "February", Ganho: 305, Gasto: 200 },
  { month: "March", Ganho: 237, Gasto: 120 },
  { month: "April", Ganho: 73, Gasto: 190 },
  { month: "May", Ganho: 209, Gasto: 130 },
  { month: "June", Ganho: 214, Gasto: 140 },
  { month: "July", Ganho: 0, Gasto: 0 },
  { month: "August", Ganho: 0, Gasto: 0 },
  { month: "September", Ganho: 0, Gasto: 0 },
  { month: "October", Ganho: 0, Gasto: 0 },
  { month: "November", Ganho: 0, Gasto: 0 },
  { month: "December", Ganho: 0, Gasto: 0 },
]

const chartConfig = {
  Ganho: {
    label: "Ganho",
    color: "hsl(var(--chart-1))",
  },
  Gasto: {
    label: "Gasto",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export interface ChartBoxProps {
  periodoTitle: string;
  periodo: string;
  ganho: [string];
  gasto: [string];

}

export function ChartBox( { periodoTitle, periodo, ganho, gasto }: ChartBoxProps ) {
  if(periodo === "month") {
    chartData = [
      { month: "January", Ganho: ganho[0], Gasto: gasto[0] },
      { month: "February", Ganho: ganho[1], Gasto: gasto[1] },
      { month: "March", Ganho: ganho[2], Gasto: gasto[2] },
      { month: "April", Ganho: ganho[3], Gasto: gasto[3] },
      { month: "May", Ganho: ganho[4], Gasto: gasto[4] },
      { month: "June", Ganho: ganho[5], Gasto: gasto[5] },
    ]
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Desempenho financeiro { periodoTitle }</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="Gasto"
              type="natural"
              fill="var(--color-Gasto)"
              fillOpacity={0.4}
              stroke="var(--color-Gasto)"
              stackId="a"
            />
            <Area
              dataKey="Ganho"
              type="natural"
              fill="var(--color-Ganho)"
              fillOpacity={0.4}
              stroke="var(--color-Ganho)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
