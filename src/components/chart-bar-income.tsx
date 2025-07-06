"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

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

export const description = "Ingresos laborales por hora República Dominicana"

const chartData = [
  { sector: "Promedio Total", income: 162.8, growth: "+11.4%" },
  { sector: "Sector Formal", income: 189.26, growth: "+13.5%" },
  { sector: "Sector Informal", income: 138.81, growth: "+6.9%" },
]

const chartConfig = {
  income: {
    label: "Ingresos por Hora",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartBarIncome() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ingresos Laborales por Hora</CardTitle>
        <CardDescription>RD$ promedio vs 1T/2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="sector"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                if (value === "Promedio Total") return "Total"
                if (value === "Sector Formal") return "Formal"
                if (value === "Sector Informal") return "Informal"
                return value
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="income" fill="var(--color-income)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                formatter={(value) => `RD$ ${value}`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Crecimiento promedio: +11.4% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Sector formal lidera con RD$ 189.26 por hora
        </div>
      </CardFooter>
    </Card>
  )
} 