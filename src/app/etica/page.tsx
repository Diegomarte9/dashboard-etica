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

export default function EticaPage() {
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
                  <BreadcrumbPage>Ética</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Ética y Futuro del Trabajo</h1>
              <p className="text-muted-foreground">
                Implicaciones humanas y éticas de la automatización
              </p>
            </div>
            
            <div className="grid gap-6">
              {/* Brecha de Habilidades */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Brecha de Habilidades</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-destructive">Lo que Demandan las Empresas</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-destructive rounded-full"></div>
                        <span className="text-sm">Competencias digitales avanzadas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-destructive rounded-full"></div>
                        <span className="text-sm">Pensamiento analítico</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-destructive rounded-full"></div>
                        <span className="text-sm">Adaptabilidad al cambio</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-destructive rounded-full"></div>
                        <span className="text-sm">Colaboración remota</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-blue-600">Lo que Ofrece la Fuerza Laboral</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="text-sm">Habilidades tradicionales</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="text-sm">Experiencia manual</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="text-sm">Rutinas establecidas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="text-sm">Trabajo presencial</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsabilidades */}
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h3 className="font-semibold mb-3 text-primary">Responsabilidad del Estado</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Invertir en educación digital</li>
                    <li>• Crear programas de reconversión</li>
                    <li>• Establecer políticas de protección social</li>
                    <li>• Regular la transición laboral</li>
                  </ul>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h3 className="font-semibold mb-3 text-green-600">Responsabilidad de las Empresas</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Capacitar a sus empleados</li>
                    <li>• Facilitar la transición tecnológica</li>
                    <li>• Crear nuevos roles internos</li>
                    <li>• Mantener la dignidad laboral</li>
                  </ul>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h3 className="font-semibold mb-3 text-blue-600">Derecho a la Reconversión</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Acceso a formación continua</li>
                    <li>• Tiempo para adaptarse</li>
                    <li>• Apoyo económico durante transición</li>
                    <li>• Oportunidades de reciclaje profesional</li>
                  </ul>
                </div>
              </div>

              {/* Citas de Expertos */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Perspectivas de Expertos</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <blockquote className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                    <p className="text-sm italic mb-2">
                      "La automatización no es solo un desafío tecnológico, sino un imperativo ético que requiere políticas públicas inclusivas y responsables."
                    </p>
                    <footer className="text-xs text-muted-foreground">
                      — OIT, Informe sobre el Futuro del Trabajo 2024
                    </footer>
                  </blockquote>
                  <blockquote className="p-4 bg-muted/50 rounded-lg border-l-4 border-green-600">
                    <p className="text-sm italic mb-2">
                      "El derecho a la reconversión laboral debe ser considerado un derecho humano fundamental en la era digital."
                    </p>
                    <footer className="text-xs text-muted-foreground">
                      — CEPAL, Transformación Digital en América Latina
                    </footer>
                  </blockquote>
                </div>
              </div>

              {/* Llamado a la Acción */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
                <h2 className="text-xl font-semibold mb-4">Reflexión Final</h2>
                <p className="text-muted-foreground mb-4">
                  ¿Cómo podemos asegurar que la automatización beneficie a todos y no solo a algunos? 
                  ¿Qué papel juega la ética en la transformación del trabajo?
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Inclusión digital</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Dignidad laboral</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Desarrollo sostenible</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Justicia social</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 