import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { ChartPiePIB } from "@/components/ui/chart-pie-pib"
import { ChartBarEmpleo } from "@/components/ui/chart-bar-empleo"
import { ChartRadarHabilidades } from "@/components/ui/chart-radar-habilidades"
import { ChartLineDesempleo } from "@/components/ui/chart-line-desempleo"
import { ChartAreaEmpleos } from "@/components/ui/chart-area-empleos"
import { ChartRadialFormacion } from "@/components/ui/chart-radial-formacion"
import { ChartAreaInteractive } from "@/components/ui/chart-area-interactive"

export default function DashboardPage() {
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
                    Dashboard de Ética
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ChartPiePIB />
            <ChartBarEmpleo />
            <ChartRadarHabilidades />
            <ChartLineDesempleo />
            <ChartAreaEmpleos />
            <ChartRadialFormacion />
          </div>
          <div className="grid gap-4">
            <ChartAreaInteractive />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
