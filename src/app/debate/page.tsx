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

export default function DebatePage() {
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
                  <BreadcrumbPage>Debate</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Sustitución vs Transformación</h1>
              <p className="text-muted-foreground">
                El debate central del futuro laboral
              </p>
            </div>
            
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Sección Sustitución */}
              <div className="space-y-4">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4 text-destructive">Sustitución de Empleos</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-destructive/10 rounded-lg">
                      <h3 className="font-semibold mb-2">Empleos en Alto Riesgo</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Cajeros bancarios</span>
                          <span className="text-destructive">-60%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Operadores de call center</span>
                          <span className="text-destructive">-45%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Conductores de taxi</span>
                          <span className="text-destructive">-40%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Contadores básicos</span>
                          <span className="text-destructive">-35%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h3 className="font-semibold mb-2">Datos Clave</h3>
                      <p className="text-sm text-muted-foreground">
                        <strong>47%</strong> de los empleos actuales tienen alto potencial de automatización en la próxima década según estudios de la OIT.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección Transformación */}
              <div className="space-y-4">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4 text-green-600">Transformación del Trabajo</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-500/10 rounded-lg">
                      <h3 className="font-semibold mb-2">Nuevos Roles Emergentes</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Analistas de datos</span>
                          <span className="text-green-600">+120%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Especialistas en IA</span>
                          <span className="text-green-600">+85%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Desarrolladores de software</span>
                          <span className="text-green-600">+65%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Consultores de transformación digital</span>
                          <span className="text-green-600">+55%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h3 className="font-semibold mb-2">Habilidades Demandadas</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Pensamiento crítico</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Creatividad</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Competencias digitales</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Adaptabilidad</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección de Balance */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Balance del Debate</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-destructive">Pérdida Neta</h3>
                  <p className="text-2xl font-bold text-destructive">-15%</p>
                  <p className="text-sm text-muted-foreground">Empleos tradicionales</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-green-600">Nuevos Empleos</h3>
                  <p className="text-2xl font-bold text-green-600">+25%</p>
                  <p className="text-sm text-muted-foreground">Roles emergentes</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-blue-600">Reconversión</h3>
                  <p className="text-2xl font-bold text-blue-600">+40%</p>
                  <p className="text-sm text-muted-foreground">Necesitan capacitación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 