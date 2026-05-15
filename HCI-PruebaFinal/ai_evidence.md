# Evidencia de Uso de Inteligencia Artificial y Automatización

## 🛠️ Stack de Inteligencia Artificial
Para la resolución de este examen se utilizó un ecosistema avanzado de agentes:
*   **Interfaz:** Gemini CLI (Google Gemini 1.5 Pro).
*   **Orquestador:** **Gentle-AI**, motor encargado de la gestión de contexto y ejecución de planes.
*   **Servidores MCP:** Se utilizó el **Supabase MCP Server** para la exploración segura del esquema de base de datos y mejores prácticas de Postgres.
*   **Sistema de Skills:** Activación de capacidades especializadas (`supabase`, `cognitive-doc-design`, `work-unit-commits`) para garantizar estándares de ingeniería de alta fidelidad.

## 📝 Prompts y Flujo de Trabajo

### 1. Fase de Planificación (Scrum)
*   **Prompt:** "Basado en el archivo PRUEBA.md, genera un Product Backlog priorizado y un Sprint Planning para un examen de 2 horas, enfocándote en las mejoras de usabilidad del Dashboard."
*   **Agente:** Gentle-AI Orchestrator con la skill `work-unit-commits`.

### 2. Fase de Evaluación Heurística
*   **Prompt:** "Analiza el código del DashboardPage.tsx y LoginPage.tsx. Identifica 10 problemas de usabilidad basados en las 10 Heurísticas de Nielsen."
*   **Agente:** `codebase_investigator` con análisis profundo de arquitectura visual.

### 3. Fase de Rediseño (Wireframes)
*   **Prompt:** "Crea una descripción técnica de un rediseño del Dashboard aplicando las Leyes de Gestalt. Genera un wireframe en formato Mermaid.js."
*   **Skill:** `cognitive-doc-design` para asegurar legibilidad y jerarquía informativa.

### 4. Implementación Funcional
*   **Prompt:** "Genera un componente funcional en React 19 llamado Breadcrumbs e intégralo en el Dashboard."
*   **Contexto:** Uso de MCP Supabase para asegurar que la navegación no interfiera con los repositorios de datos existentes.

## 💡 Impacto en el Diseño UX
La combinación de **Gentle-AI** y el sistema de **Skills** permitió automatizar las tareas repetitivas (como el formateo de tablas heurísticas) y centrar el esfuerzo humano en la toma de decisiones críticas de diseño y arquitectura, logrando una entrega completa en menos de la mitad del tiempo estipulado.
