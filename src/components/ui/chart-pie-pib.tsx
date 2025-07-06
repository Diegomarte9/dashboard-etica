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

export const description = "Distribución del PIB por sector económico"

const chartData = [
  { sector: "servicios", pib: 60.8, fill: "var(--color-servicios)" },
  { sector: "industria", pib: 33.8, fill: "var(--color-industria)" },
  { sector: "agricultura", pib: 5.5, fill: "var(--color-agricultura)" },
]

const chartConfig = {
  pib: {
    label: "PIB (%)",
  },
  servicios: {
    label: "Servicios",
    color: "var(--chart-1)",
  },
  industria: {
    label: "Industria y Zonas Francas",
    color: "var(--chart-2)",
  },
  agricultura: {
    label: "Agricultura",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function ChartPiePIB() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Distribución del PIB por Sector</CardTitle>
        <CardDescription>República Dominicana 2024-2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] pb-0"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie data={chartData} dataKey="pib" label nameKey="sector" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Servicios dominan la economía <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Total PIB: $127 mil millones USD (2024)
        </div>
      </CardFooter>
    </Card>
  )
} 