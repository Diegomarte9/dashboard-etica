"use client"

import { TrendingDown } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

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

export const description = "Tasa de desempleo República Dominicana"

const chartData = [
  { year: "2015", unemployment: 14.0 },
  { year: "2016", unemployment: 7.1 },
  { year: "2017", unemployment: 5.5 },
  { year: "2018", unemployment: 5.6 },
  { year: "2019", unemployment: 3.8 },
  { year: "2020", unemployment: 10.8 },
  { year: "2021", unemployment: 7.4 },
  { year: "2022", unemployment: 5.2 },
  { year: "2023", unemployment: 4.8 },
  { year: "2024", unemployment: 5.1 },
  { year: "2025", unemployment: 4.9 },
]

const chartConfig = {
  unemployment: {
    label: "Tasa de Desempleo",
    color: "var(--dashboard-chart)",
  },
  label: {
    color: "var(--dashboard-chart)",
  },
} satisfies ChartConfig

export function ChartBarLabelCustom() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasa de Desempleo - República Dominicana</CardTitle>
        <CardDescription>Evolución anual 2015 - 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="year"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
              hide
            />
            <XAxis dataKey="unemployment" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="unemployment"
              fill="var(--dashboard-chart)"
              radius={4}
            >
              <LabelList
                dataKey="year"
                position="insideLeft"
                offset={8}
                className="fill-(--color-label)"
                fontSize={12}
              />
              <LabelList
                dataKey="unemployment"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
                formatter={(value) => `${value}%`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Tasa actual: 4.9% <TrendingDown className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Reducción significativa desde el pico de 14% en 2015
        </div>
      </CardFooter>
    </Card>
  )
} 