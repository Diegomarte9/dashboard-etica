# Dashboard Ética - República Dominicana

Un dashboard moderno y interactivo que presenta datos clave sobre el mercado laboral, automatización y adopción de IA en la República Dominicana.

## 🚀 Características

### 📊 Visualizaciones de Datos
- **Tasa de Desempleo RD (2015-2025)**: Gráfico de barras verticales mostrando la evolución anual
- **Ingresos Laborales por Hora**: Comparación entre sector formal, informal y total
- **Riesgo de Automatización por Sector**: Gráfico de radar con los sectores más expuestos
- **Crecimiento de Adopción de IA**: Línea temporal del 2020 al 2025
- **Profesiones Emergentes en IA**: Gráfico radial con crecimiento estimado
- **Exposición Laboral a IA**: Gráfico de pie por categoría laboral

### 🎨 Interfaz de Usuario
- **Tema Oscuro Moderno**: Diseño elegante con colores consistentes
- **Sidebar Colapsible**: Navegación intuitiva con icono de casa
- **Cards de Resumen**: Métricas clave en la parte superior
- **Responsive Design**: Optimizado para diferentes tamaños de pantalla
- **Breadcrumbs**: Navegación contextual
- **Toggle de Tema**: Cambio entre modo claro y oscuro

### 🔧 Tecnologías Utilizadas
- **React 18** con TypeScript
- **Vite** como bundler
- **Tailwind CSS** para estilos
- **shadcn/ui** para componentes
- **Recharts** para visualizaciones
- **React Router DOM** para navegación
- **Lucide React** para iconos

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Diegomarte9/dashboard-etica.git
cd dashboard-etica
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

## 🏗️ Estructura del Proyecto

```
dashboard-etica/
├── src/
│   ├── app/
│   │   └── dashboard/
│   │       └── page.tsx          # Página principal del dashboard
│   ├── components/
│   │   ├── app-sidebar.tsx       # Sidebar principal
│   │   ├── chart-bar-label-custom.tsx
│   │   ├── chart-line-ia-growth.tsx
│   │   ├── chart-pie-ia-exposure.tsx
│   │   ├── chart-radar-automation-risk.tsx
│   │   ├── chart-radial-ia-professions.tsx
│   │   ├── mode-toggle.tsx       # Toggle de tema
│   │   ├── sidebar-otp-in-form.tsx
│   │   ├── theme-provider.tsx
│   │   └── ui/                   # Componentes shadcn/ui
│   ├── hooks/
│   │   └── use-mobile.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx                   # Componente raíz
│   └── main.tsx                  # Punto de entrada
├── public/
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 📊 Datos y Fuentes

### Métricas Principales
- **Tasa de Desempleo**: 4.9% (2025) - Descenso desde 14% en 2015
- **Riesgo de Automatización**: 72% - Sector más expuesto: Transporte y logística
- **Adopción de IA**: 39% - Proyección para 2025
- **Exposición Laboral a IA**: 85% - Categoría más expuesta: Introducción de datos

### Fuentes de Datos
- **Banco Central de la República Dominicana**
- **Ministerio de Trabajo**
- **World Economic Forum (WEF)**
- **LinkedIn República Dominicana**
- **INFOTEP**
- **MESCyT**

## 🎨 Personalización

### Colores del Tema
El dashboard utiliza una paleta de colores consistente basada en tonos rojos:

```css
--dashboard-chart: oklch(0.52 0.18 29)
```

### Variables CSS Personalizables
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run preview      # Previsualiza build de producción
npm run lint         # Ejecuta ESLint
npm run type-check   # Verifica tipos TypeScript
```

## 📱 Responsive Design

El dashboard está optimizado para:
- **Desktop**: Layout completo con sidebar expandido
- **Tablet**: Sidebar colapsible, grid adaptativo
- **Mobile**: Sidebar oculto, cards apiladas

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🔧 Configuración de Desarrollo

### Vite
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### TypeScript
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 📈 Gráficos y Visualizaciones

### Recharts
El proyecto utiliza Recharts para todas las visualizaciones:

- **BarChart**: Desempleo e ingresos laborales
- **RadarChart**: Riesgo de automatización
- **LineChart**: Crecimiento de IA
- **RadialBarChart**: Profesiones emergentes
- **PieChart**: Exposición laboral

### Configuración de Gráficos
```typescript
const chartConfig = {
  unemployment: {
    label: "Tasa de Desempleo",
    color: "var(--dashboard-chart)",
  },
} satisfies ChartConfig
```

## 🎯 Funcionalidades Principales

### Navegación
- **React Router DOM**: Navegación SPA
- **Sidebar**: Navegación principal
- **Breadcrumbs**: Navegación contextual
- **URLs**: `/` y `/dashboard`

### Estado y Temas
- **ThemeProvider**: Gestión de temas
- **Local Storage**: Persistencia de preferencias
- **Dark Mode**: Tema oscuro por defecto

### Componentes Reutilizables
- **ChartContainer**: Wrapper para gráficos
- **Card**: Contenedores de contenido
- **Button**: Botones consistentes
- **Input**: Campos de formulario

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
```

### Servir Build
```bash
npx serve dist
```

### Estadísticas del Build
- **CSS**: ~51KB (9KB gzipped)
- **JavaScript**: ~750KB (228KB gzipped)
- **Tiempo de build**: ~6 segundos

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autores

- **Diego Marte** - *Desarrollo inicial* - [GitHub](https://github.com/Diegomarte9)

## 🙏 Agradecimientos

- **shadcn/ui** por los componentes base
- **Recharts** por las librerías de gráficos
- **Tailwind CSS** por el framework de estilos
- **Vite** por el bundler rápido

## 📞 Contacto

- **Email**: diegomarte9@gmail.com
- **LinkedIn**: [tu-linkedin]
- **GitHub**: https://github.com/Diegomarte9

---

**Dashboard Ética RD** - Visualizando el futuro del trabajo en República Dominicana
