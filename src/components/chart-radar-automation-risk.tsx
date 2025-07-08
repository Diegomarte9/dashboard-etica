"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

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
import chartData from "@/data.json"

export const description = "Radar chart: Riesgo de automatización por sector (RD adaptado)"

// Relación de abreviatura a nombre completo
const sectorNames = {
  "Ind./Manuf.": "Industria / Manufactura",
  "Transp./Log.": "Transporte y logística",
  "Fin./Banca": "Finanzas / Banca",
  "Com. Minorista": "Comercio minorista",
  "Agri./Prim.": "Agricultura / Primario",
  "Salud": "Salud",
  "Educación": "Educación",
}

const chartConfig = {
  riesgo: {
    label: "Riesgo Automatización",
    color: "var(--dashboard-chart)",
  },
} satisfies ChartConfig

function CustomTooltip({ active, payload }: { active?: boolean; payload?: any[] }) {
  if (active && payload && payload.length) {
    const abbr = payload[0].payload.sector;
    const fullName = sectorNames[abbr as keyof typeof sectorNames] || abbr;
    return (
      <div className="rounded bg-background p-2 shadow text-xs">
        <div className="font-bold mb-1">{fullName}</div>
        <div>Riesgo de automatización: <b>{payload[0].value}%</b></div>
      </div>
    );
  }
  return null;
}

function CustomTick(props: any) {
  const { payload, x, y, textAnchor } = props;
  return (
    <text
      x={x}
      y={y}
      textAnchor={textAnchor}
      fontSize={11}
      fill="currentColor"
      style={{ pointerEvents: 'none' }}
    >
      {payload.value}
    </text>
  );
}

export function ChartRadarAutomationRisk() {
  return (
    <Card>
      <CardHeader className="items-center">
        <CardTitle>Riesgo de automatización por sector</CardTitle>
        <CardDescription>
          Basado en estudios de CEPAL, OIT y el Banco Mundial, este es el % estimado de tareas automatizables en sectores dominicanos.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <RadarChart data={chartData.radarChartAutomationRisk}>
            <ChartTooltip cursor={false} content={CustomTooltip} />
            <PolarAngleAxis dataKey="sector" tick={CustomTick} />
            <PolarGrid />
            <Radar
              dataKey="riesgo"
              fill="var(--dashboard-chart)"
              fillOpacity={0.6}
              dot={{ r: 4, fillOpacity: 1 }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-muted-foreground flex items-center gap-2 leading-none">
          Estos datos reflejan un riesgo alto de desplazamiento laboral en sectores repetitivos como transporte e industria, mientras que salud y educación tienen una protección relativa.
        </div>
      </CardFooter>
    </Card>
  )
} 