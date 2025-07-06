"use client"

import { TrendingUp } from "lucide-react"
import { RadialBar, RadialBarChart, PolarAngleAxis, PolarRadiusAxis } from "recharts"

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

export const description = "Acceso a formación continua por sector"

const chartData = [
  { categoria: "Reconversión", porcentaje: 40 },
  { categoria: "Formación Continua", porcentaje: 35 },
  { categoria: "Educación Digital", porcentaje: 25 },
]

const chartConfig = {
  porcentaje: {
    label: "Porcentaje (%)",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartRadialFormacion() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Necesidades de Formación</CardTitle>
        <CardDescription>Población que requiere reconversión laboral</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <RadialBarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <PolarAngleAxis
              dataKey="categoria"
              tickLine={false}
              axisLine={false}
            />
            <PolarRadiusAxis
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <RadialBar
              dataKey="porcentaje"
              fill="var(--color-formacion)"
              radius={75}
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          40% de la fuerza laboral necesita reconversión <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Derecho a la reconversión laboral reconocido
        </div>
      </CardFooter>
    </Card>
  )
} 