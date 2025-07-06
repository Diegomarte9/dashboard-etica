"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

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

export const description = "Distribución del empleo por sector económico"

const chartData = [
  { sector: "Servicios", empleo: 64.7 },
  { sector: "Industria/Zonas Francas", empleo: 20.8 },
  { sector: "Agricultura", empleo: 14.4 },
  { sector: "Turismo", empleo: 0.1 },
]

const chartConfig = {
  empleo: {
    label: "Empleo (%)",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartBarEmpleo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribución del Empleo por Sector</CardTitle>
        <CardDescription>República Dominicana 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="empleo" hide />
            <YAxis
              dataKey="sector"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              width={120}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Bar dataKey="empleo" fill="var(--color-empleo)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Servicios emplean a la mayoría <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Total empleo: 5.28 millones de personas
        </div>
      </CardFooter>
    </Card>
  )
} 