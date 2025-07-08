"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

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
import chartData from "@/data.json"

export const description = "Exposición estimada a la IA por categoría laboral"

const chartConfig = {
  exposicion: {
    label: "% Exposición IA",
    color: "var(--dashboard-chart)",
  },
} satisfies ChartConfig

export function ChartPieIAExposure() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Exposición estimada a la IA por categoría laboral</CardTitle>
        <CardDescription>
          Porcentaje de tareas expuestas a IA por sector (2024, estimado)
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] pb-0"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel nameKey="categoria" />} />
            <Pie data={chartData.pieChartIAExposure} dataKey="exposicion" label nameKey="categoria" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Basado en estimaciones de IA en sectores laborales <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Todas las porciones muestran el % de exposición estimada a la IA
        </div>
      </CardFooter>
    </Card>
  )
} 