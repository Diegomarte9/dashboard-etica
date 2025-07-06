"use client"

import { TrendingUp } from "lucide-react"
import { RadialBar, RadialBarChart } from "recharts"

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
} from "@/components/ui/chart"

export const description = "Profesiones emergentes en IA (RD 2023–2025)"

const chartData = [
  { profesion: "Analista de datos", crecimiento: 38, adopcion: "Medio", fill: "var(--dashboard-chart)" },
  { profesion: "Especialista en IA", crecimiento: 44, adopcion: "Bajo-medio", fill: "var(--dashboard-chart)" },
  { profesion: "Desarrollador RPA", crecimiento: 30, adopcion: "Bajo", fill: "var(--dashboard-chart)" },
  { profesion: "Ing. Machine Learning", crecimiento: 26, adopcion: "Bajo", fill: "var(--dashboard-chart)" },
  { profesion: "Consultor ética tech", crecimiento: 20, adopcion: "Muy bajo", fill: "var(--dashboard-chart)" },
  { profesion: "Gestor transf. digital", crecimiento: 29, adopcion: "Medio", fill: "var(--dashboard-chart)" },
]

const chartConfig = {
  crecimiento: {
    label: "Crecimiento (%)",
    color: "var(--dashboard-chart)",
  },
} satisfies ChartConfig



function CustomTooltip({ active, payload }: { active?: boolean; payload?: any[] }) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="rounded bg-background p-2 shadow text-xs">
        <div className="font-bold mb-1">{data.profesion}</div>
        <div>Crecimiento estimado: <b>{data.crecimiento}%</b></div>
        <div>Nivel de adopción: <b>{data.adopcion}</b></div>
      </div>
    );
  }
  return null;
}

export function ChartRadialIAProfessions() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Profesiones emergentes en IA (RD)</CardTitle>
        <CardDescription>
          Crecimiento estimado y nivel de adopción (2023–2025)
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
            <ChartTooltip
              cursor={false}
              content={CustomTooltip}
            />
            <RadialBar
              dataKey="crecimiento"
              background
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Basado en WEF, LinkedIn RD, INFOTEP y MESCyT <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Todas las barras muestran crecimiento estimado (%)<br />Nivel de adopción: Muy bajo a Medio
        </div>
      </CardFooter>
    </Card>
  )
} 