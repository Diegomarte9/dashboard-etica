"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, PolarRadiusAxis } from "recharts"

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

export const description = "Habilidades tecnológicas por sector económico"

const chartData = [
  { habilidad: "Pensamiento Crítico", demanda: 95 },
  { habilidad: "Creatividad", demanda: 90 },
  { habilidad: "Competencias Digitales", demanda: 85 },
  { habilidad: "Adaptabilidad", demanda: 80 },
  { habilidad: "Trabajo Remoto", demanda: 75 },
  { habilidad: "Análisis de Datos", demanda: 70 },
]

const chartConfig = {
  demanda: {
    label: "Demanda (%)",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartRadarHabilidades() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Habilidades Críticas Emergentes</CardTitle>
        <CardDescription>Demanda en el mercado laboral 2024-2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <RadarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <PolarGrid />
            <PolarAngleAxis
              dataKey="habilidad"
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
            <Radar
              dataKey="demanda"
              type="linear"
              stroke="var(--color-habilidades)"
              strokeWidth={2}
              fill="var(--color-habilidades)"
              fillOpacity={0.3}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Habilidades blandas y digitales en alta demanda <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Brecha entre demanda empresarial y oferta laboral
        </div>
      </CardFooter>
    </Card>
  )
} 