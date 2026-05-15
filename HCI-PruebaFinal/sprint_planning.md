# Sprint Planning - Misión IHC (Sprint 1h)

## Objetivo del Sprint
Mejorar la arquitectura de información y la navegación del Dashboard para reducir la carga cognitiva del investigador.

## User Stories Clave

### US-01: Rediseño de Dashboard (Estructura)
**Como** investigador, **quiero** un dashboard con información agrupada y jerarquizada, **para que** pueda identificar los KPIs críticos sin sentirme abrumado por la densidad de datos.
- **Criterios de Aceptación:**
  - Uso de "Chunking" para agrupar métricas ISO.
  - Espaciado aumentado entre secciones (Whitespace).
  - Priorización visual de "Misiones Ejecutadas" sobre "Planificadas".

### US-02: Navegación Jerárquica
**Como** investigador, **quiero** ver mi ubicación actual en la jerarquía del proyecto (Breadcrumbs), **para que** pueda navegar hacia atrás o cambiar de contexto sin usar repetidamente el botón del navegador.
- **Criterios de Aceptación:**
  - Componente de breadcrumbs visible en la cabecera.
  - Enlaces funcionales: Proyecto > Plan de Test > Detalles.

## Tareas del Sprint (Timebox: 1h)
1. Implementar componente `Breadcrumbs.tsx` (15 min).
2. Refactorizar `DashboardPage.tsx` para agrupar métricas en contenedores lógicos (30 min).
3. Ajustar estilos de etiquetas en formularios (15 min).
