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

export const description = "Exposición estimada a la IA por categoría laboral"

const chartData = [
  { categoria: "Introducción de datos", exposicion: 85, fill: "oklch(0.52 0.18 29)" },
  { categoria: "Contabilidad", exposicion: 75, fill: "oklch(0.48 0.18 29)" },
  { categoria: "Recursos humanos", exposicion: 65, fill: "oklch(0.56 0.18 29)" },
  { categoria: "Seguros", exposicion: 68, fill: "oklch(0.60 0.18 29)" },
  { categoria: "Ventas internas", exposicion: 70, fill: "oklch(0.54 0.18 29)" },
  { categoria: "Analistas financieros", exposicion: 58, fill: "oklch(0.50 0.18 29)" },
  { categoria: "Desarrolladores multimedia", exposicion: 55, fill: "oklch(0.58 0.18 29)" },
  { categoria: "Gestores de nómina", exposicion: 65, fill: "oklch(0.62 0.18 29)" },
  { categoria: "Medios digitales y contenido en internet", exposicion: 78, fill: "oklch(0.44 0.18 29)" },
]

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
            <Pie data={chartData} dataKey="exposicion" label nameKey="categoria" />
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