"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

export const description = "Crecimiento del uso de IA en empresas dominicanas"

const chartData = [
  { year: "2020", adopcionIA: 6 },
  { year: "2021", adopcionIA: 10 },
  { year: "2022", adopcionIA: 16 },
  { year: "2023", adopcionIA: 23 },
  { year: "2024", adopcionIA: 31 },
  { year: "2025", adopcionIA: 39 },
]

const chartConfig = {
  adopcionIA: {
    label: "Adopción IA (%)",
    color: "var(--dashboard-chart)",
  },
} satisfies ChartConfig

export function ChartLineIAGrowth() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crecimiento del uso de IA en empresas dominicanas</CardTitle>
        <CardDescription>Porcentaje de empresas que adoptan IA (2020-2025)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="adopcionIA"
              type="linear"
              stroke="var(--dashboard-chart)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Crecimiento sostenido <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Proyección: 39% de empresas usando IA en 2025
        </div>
      </CardFooter>
    </Card>
  )
} 