import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SidebarInput } from "@/components/ui/sidebar"

export function SidebarOptInForm() {
  return (
    <Card className="gap-2 py-4 shadow-none">
      <CardHeader className="px-4">
        <CardTitle className="text-sm">Suscríbete a las actualizaciones</CardTitle>
        <CardDescription>
          Recibe notificaciones sobre reportes de cumplimiento ético, nuevos incidentes y métricas importantes del dashboard.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <form>
          <div className="grid gap-2.5">
            <SidebarInput type="email" placeholder="Tu correo electrónico" />
            <Button
              className="bg-sidebar-primary text-sidebar-primary-foreground w-full shadow-none"
              size="sm"
            >
              Suscribirse
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
