# Evaluación Heurística - Dashboard & Login

**Evaluador:** Gemini CLI Agent
**Fecha:** 14/05/2026

## Hallazgos de Usabilidad

| # | Problema Detectado | Heurística de Nielsen | Severidad | Descripción |
|---|--------------------|-----------------------|-----------|-------------|
| 1 | **Excesiva Densidad en Dashboard** | H8: Estética y diseño minimalista | **Crítica** | El Dashboard presenta demasiados KPIs y acciones en una sola vista, dificultando el enfoque en métricas clave. |
| 2 | **Ausencia de Breadcrumbs** | H4: Consistencia y estándares | **Crítica** | No hay rastro de navegación jerárquica. El usuario pierde el contexto de qué proyecto está viendo. |
| 3 | **Etiquetas de Formulario Ilegibles** | H8: Estética y diseño minimalista | Moderada | El tamaño de fuente de 10px para los labels en Login y Formularios es insuficiente para una buena legibilidad. |
| 4 | **Acción Destructiva en Menú Contextual** | H5: Prevención de errores | Moderada | El botón "Eliminar" está demasiado cerca de "Ver detalles" en el dropdown, aumentando el riesgo de errores accidentales. |
| 5 | **Empty State Brusco en Búsqueda** | H1: Visibilidad del estado | Moderada | Al no encontrar resultados, el cambio visual es demasiado drástico y desorienta al usuario. |
| 6 | **Toasts de Éxito Persistentes** | H1: Visibilidad del estado | Moderada | Los mensajes de éxito duran 5s fijos, lo que puede ser mucho para mensajes cortos o poco para largos si el usuario está distraído. |
| 7 | **Errores de Login Poco Informativos** | H9: Ayudar a reconocer errores | Leve | El error simplemente muestra el mensaje técnico de Supabase sin sugerir acciones de recuperación. |
| 8 | **Generación de PDF Manual** | H7: Flexibilidad y eficiencia | Leve | Se requiere un clic explícito para generar el PDF; no hay una previsualización rápida automática de los datos. |
| 9 | **Falta de Tooltips en Iconos** | H10: Ayuda y documentación | Leve | Iconos como "Zap" (Eficiencia) o "Target" (Efectividad) dependen puramente del conocimiento previo del usuario. |
| 10 | **Iconos con aria-hidden sin Alternativa** | Accesibilidad / Estándares | Leve | Muchos iconos decorativos están ocultos para lectores de pantalla, pero algunos que transmiten estado también podrían estarlo. |

## Resumen de Severidad
- **Críticos:** 2
- **Moderados:** 4
- **Leves:** 4

## Recomendación General
Priorizar la implementación de Breadcrumbs y el rediseño visual del Dashboard para cumplir con la ley de Miller (agrupamiento de información) antes de avanzar con nuevas funcionalidades.
