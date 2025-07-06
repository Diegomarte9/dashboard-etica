"use client"

import * as React from "react"
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

const chartData = [
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
]

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
  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Inversión Tecnológica vs Empleos</CardTitle>
          <CardDescription>
            Evolución de la inversión y empleos creados en 2024
          </CardDescription>
        </div>
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