# Rediseño UX - Dashboard 2.0

## 🎨 Principios Aplicados (HCI/UX)

| Principio | Aplicación en el Rediseño | Meta HCI |
| :--- | :--- | :--- |
| **Leyes de Gestalt** | Agrupación de KPIs (Proximidad) y uso de Cards (Región Común). | Menor carga cognitiva. |
| **Jerarquía Visual** | Contraste en KPIs críticos y títulos en negrita. | Escaneo rápido de datos. |
| **Navegación** | Implementación de Breadcrumbs y Steppers. | Ubicación espacial constante. |

---

## 🏗️ Estructura del Dashboard (Mermaid)

```mermaid
graph TD
    subgraph Global_Nav [Barra Superior]
        Logo((Logo)) --- Search[Buscador] --- User((U))
    end

    subgraph Context_Nav [Navegación Contextual]
        BC[Breadcrumbs: Home > Proyectos > Dashboard]
    end

    subgraph KPI_Section [Sección de Métricas - Región Común]
        K1[Éxito: 85%] --- K2[Tiempo: 45s] --- K3[Errores: 2]
    end

    subgraph Main_Content [Vista Principal]
        Table[Tabla de Hallazgos con Jerarquía Visual]
    end

    Global_Nav --> Context_Nav
    Context_Nav --> KPI_Section
    KPI_Section --> Main_Content
```

> **Nota:** Se ha priorizado el **Escaneo en F** para la disposición de elementos críticos.
