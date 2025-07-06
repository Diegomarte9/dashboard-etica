"use client"

import { useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartTooltip,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TrendingUp } from "lucide-react"

export const description = "Evolución de inversión tecnológica vs empleos"

type DataItem = {
  mes: string
  inversion: number
  crecimiento: number
  empleo: number
}

const sectorData: Record<string, DataItem[]> = {
  total: [
    { mes: "Ene", inversion: 150, crecimiento: 4.2, empleo: 85 },
    { mes: "Feb", inversion: 180, crecimiento: 4.5, empleo: 87 },
    { mes: "Mar", inversion: 220, crecimiento: 4.8, empleo: 89 },
    { mes: "Abr", inversion: 280, crecimiento: 5.0, empleo: 91 },
    { mes: "May", inversion: 320, crecimiento: 5.2, empleo: 93 },
    { mes: "Jun", inversion: 380, crecimiento: 5.5, empleo: 95 },
    { mes: "Jul", inversion: 420, crecimiento: 5.8, empleo: 97 },
    { mes: "Ago", inversion: 450, crecimiento: 6.0, empleo: 98 },
    { mes: "Sep", inversion: 480, crecimiento: 6.2, empleo: 99 },
    { mes: "Oct", inversion: 520, crecimiento: 6.5, empleo: 100 },
    { mes: "Nov", inversion: 580, crecimiento: 6.8, empleo: 101 },
    { mes: "Dic", inversion: 650, crecimiento: 7.0, empleo: 102 },
  ],
  comercio: [
    { mes: "Ene", inversion: 50, crecimiento: 3.2, empleo: 60 },
    { mes: "Feb", inversion: 60, crecimiento: 3.4, empleo: 61 },
    { mes: "Mar", inversion: 70, crecimiento: 3.6, empleo: 62 },
    { mes: "Abr", inversion: 80, crecimiento: 3.8, empleo: 63 },
    { mes: "May", inversion: 90, crecimiento: 4.0, empleo: 64 },
    { mes: "Jun", inversion: 100, crecimiento: 4.1, empleo: 65 },
    { mes: "Jul", inversion: 110, crecimiento: 4.3, empleo: 66 },
    { mes: "Ago", inversion: 120, crecimiento: 4.4, empleo: 67 },
    { mes: "Sep", inversion: 130, crecimiento: 4.5, empleo: 68 },
    { mes: "Oct", inversion: 140, crecimiento: 4.6, empleo: 69 },
    { mes: "Nov", inversion: 150, crecimiento: 4.7, empleo: 70 },
    { mes: "Dic", inversion: 160, crecimiento: 4.8, empleo: 71 },
  ],
  industria: [
    { mes: "Ene", inversion: 80, crecimiento: 3.5, empleo: 70 },
    { mes: "Feb", inversion: 90, crecimiento: 3.7, empleo: 71 },
    { mes: "Mar", inversion: 110, crecimiento: 3.9, empleo: 72 },
    { mes: "Abr", inversion: 120, crecimiento: 4.1, empleo: 73 },
    { mes: "May", inversion: 130, crecimiento: 4.3, empleo: 74 },
    { mes: "Jun", inversion: 150, crecimiento: 4.5, empleo: 75 },
    { mes: "Jul", inversion: 170, crecimiento: 4.7, empleo: 76 },
    { mes: "Ago", inversion: 180, crecimiento: 4.9, empleo: 77 },
    { mes: "Sep", inversion: 190, crecimiento: 5.0, empleo: 78 },
    { mes: "Oct", inversion: 200, crecimiento: 5.2, empleo: 79 },
    { mes: "Nov", inversion: 220, crecimiento: 5.4, empleo: 80 },
    { mes: "Dic", inversion: 240, crecimiento: 5.6, empleo: 81 },
  ],
  servicios: [
    { mes: "Ene", inversion: 90, crecimiento: 4.0, empleo: 80 },
    { mes: "Feb", inversion: 100, crecimiento: 4.2, empleo: 81 },
    { mes: "Mar", inversion: 120, crecimiento: 4.4, empleo: 82 },
    { mes: "Abr", inversion: 140, crecimiento: 4.6, empleo: 83 },
    { mes: "May", inversion: 160, crecimiento: 4.8, empleo: 84 },
    { mes: "Jun", inversion: 180, crecimiento: 5.0, empleo: 85 },
    { mes: "Jul", inversion: 200, crecimiento: 5.2, empleo: 86 },
    { mes: "Ago", inversion: 220, crecimiento: 5.4, empleo: 87 },
    { mes: "Sep", inversion: 240, crecimiento: 5.6, empleo: 88 },
    { mes: "Oct", inversion: 260, crecimiento: 5.8, empleo: 89 },
    { mes: "Nov", inversion: 280, crecimiento: 6.0, empleo: 90 },
    { mes: "Dic", inversion: 300, crecimiento: 6.2, empleo: 91 },
  ],
}

const chartConfig = {
  inversion: {
    label: "Inversión Tecnológica (USD miles)",
    color: "var(--chart-1)",
  },
  crecimiento: {
    label: "Crecimiento PIB (%)",
    color: "var(--chart-2)",
  },
  empleo: {
    label: "Índice de Empleo",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

const sectors = [
  { label: "Total", value: "total" },
  { label: "Comercio", value: "comercio" },
  { label: "Industria", value: "industria" },
  { label: "Servicios", value: "servicios" },
]

function CustomTooltipContent({
  active,
  payload,
}: {
  active?: boolean
  payload?: any[]
}) {
  if (!active || !payload) return null

  const item = payload[0]?.payload
  const mes = item.mes
  const inversion = item.inversion
  const crecimiento = item.crecimiento
  const empleo = item.empleo

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <span className="text-[0.70rem] uppercase text-muted-foreground">
            {mes}
          </span>
          <span className="font-bold text-muted-foreground">
            {inversion}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[0.70rem] uppercase text-muted-foreground">
            Crecimiento
          </span>
          <span className="font-bold">
            {crecimiento}%
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[0.70rem] uppercase text-muted-foreground">
            Empleo
          </span>
          <span className="font-bold">
            {empleo}
          </span>
        </div>
      </div>
    </div>
  )
}

function CustomLegendContent({
  payload,
}: {
  payload?: any[]
}) {
  if (!payload?.length) {
    return null
  }

  return (
    <div className="flex items-center justify-center gap-6 text-xs">
      {payload.map((item) => {
        return (
          <div key={item.value} className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: item.color,
              }}
            />
            <span className="text-muted-foreground">{item.value}</span>
          </div>
        )
      })}
    </div>
  )
}

export function ChartAreaInteractive() {
  const [sector, setSector] = useState("total")
  const chartData = sectorData[sector]

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Inversión Tecnológica vs Empleos</CardTitle>
          <CardDescription>
            Evolución de la inversión y empleos creados en 2024
          </CardDescription>
        </div>
        <Select value={sector} onValueChange={setSector}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Sector" />
          </SelectTrigger>
          <SelectContent>
            {sectors.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillInversion" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-inversion)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-inversion)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillEmpleos" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-empleos)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-empleos)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="mes"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("es-ES", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<CustomTooltipContent />}
            />
            <Area
              dataKey="inversion"
              type="linear"
              fill="var(--color-inversion)"
              fillOpacity={0.3}
              stroke="var(--color-inversion)"
              strokeWidth={2}
            />
            <Area
              dataKey="crecimiento"
              type="linear"
              fill="var(--color-crecimiento)"
              fillOpacity={0.3}
              stroke="var(--color-crecimiento)"
              strokeWidth={2}
            />
            <Area
              dataKey="empleo"
              type="linear"
              fill="var(--color-empleo)"
              fillOpacity={0.3}
              stroke="var(--color-empleo)"
              strokeWidth={2}
            />
            <ChartLegend content={<CustomLegendContent payload={[]} />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Inversión tecnológica: $2 millones USD (2024) <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Crecimiento económico: 5.0% (2024), servicios clave impulsan inversión
        </div>
      </CardFooter>
    </Card>
  )
} 