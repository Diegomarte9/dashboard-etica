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

export const description = "Tasa de desempleo en República Dominicana"

const chartData = [
  { año: "2020", desempleo: 7.1 },
  { año: "2021", desempleo: 6.8 },
  { año: "2022", desempleo: 6.2 },
  { año: "2023", desempleo: 5.8 },
  { año: "2024", desempleo: 5.1 },
  { año: "2025", desempleo: 4.9 },
]

const chartConfig = {
  desempleo: {
    label: "Tasa de Desempleo (%)",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartLineDesempleo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasa de Desempleo</CardTitle>
        <CardDescription>Evolución 2020 - 2025 (Q1)</CardDescription>
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
              dataKey="año"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Line
              dataKey="desempleo"
              type="linear"
              stroke="var(--color-desempleo)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Tendencia decreciente desde 2020 <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Tasa actual: 4.9% (Q1 2025), 8.5% (mujeres), 11.8% (jóvenes)
        </div>
      </CardFooter>
    </Card>
  )
} 