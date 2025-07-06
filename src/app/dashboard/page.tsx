import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"

import { ChartBarLabelCustom } from "@/components/chart-bar-label-custom"
import { ChartRadarAutomationRisk } from "@/components/chart-radar-automation-risk"
import { ChartLineIAGrowth } from "@/components/chart-line-ia-growth"
import { ChartRadialIAProfessions } from "@/components/chart-radial-ia-professions"
import { ChartPieIAExposure } from "@/components/chart-pie-ia-exposure"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <div className="flex flex-1 items-center justify-between">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Dashboard Ética
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tasa de Desempleo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.9%</div>
                <p className="text-xs text-muted-foreground">Último dato disponible (2025)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Riesgo de Automatización</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">72%</div>
                <p className="text-xs text-muted-foreground">Sector más expuesto: Transporte y logística</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Adopción de IA en empresas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">39%</div>
                <p className="text-xs text-muted-foreground">Proyección para 2025</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Exposición laboral a IA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-muted-foreground">Categoría más expuesta: Introducción de datos</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <ChartBarLabelCustom />
            <ChartRadarAutomationRisk />
            <ChartLineIAGrowth />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <ChartRadialIAProfessions />
            <ChartPieIAExposure />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
