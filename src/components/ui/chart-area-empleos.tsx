"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "Evolución de empleos tradicionales vs digitales"

const chartData = [
  { año: "2020", tradicionales: 100, emergentes: 15, reconversion: 0 },
  { año: "2021", tradicionales: 95, emergentes: 20, reconversion: 10 },
  { año: "2022", tradicionales: 90, emergentes: 25, reconversion: 20 },
  { año: "2023", tradicionales: 85, emergentes: 30, reconversion: 25 },
  { año: "2024", tradicionales: 80, emergentes: 35, reconversion: 30 },
  { año: "2025", tradicionales: 75, emergentes: 40, reconversion: 35 },
]

const chartConfig = {
  tradicionales: {
    label: "Empleos Tradicionales",
    color: "var(--chart-1)",
  },
  emergentes: {
    label: "Empleos Emergentes",
    color: "var(--chart-2)",
  },
  reconversion: {
    label: "En Reconversión",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function ChartAreaEmpleos() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Evolución del Mercado Laboral</CardTitle>
        <CardDescription>Transformación 2020-2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
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
            <Area
              dataKey="tradicionales"
              type="linear"
              fill="var(--color-tradicionales)"
              fillOpacity={0.3}
              stroke="var(--color-tradicionales)"
              strokeWidth={2}
            />
            <Area
              dataKey="emergentes"
              type="linear"
              fill="var(--color-emergentes)"
              fillOpacity={0.3}
              stroke="var(--color-emergentes)"
              strokeWidth={2}
            />
            <Area
              dataKey="reconversion"
              type="linear"
              fill="var(--color-reconversion)"
              fillOpacity={0.3}
              stroke="var(--color-reconversion)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Pérdida neta: -15% tradicionales, +25% emergentes <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          40% de la fuerza laboral requiere reconversión
        </div>
      </CardFooter>
    </Card>
  )
} 