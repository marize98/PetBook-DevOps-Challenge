# Justificación Técnica: Estrategia de Flujo de Trabajo (GitFlow)

## Resumen Ejecutivo
Para el ecosistema de PetBook, hemos seleccionado **GitFlow** como el modelo de ramificación y flujo de trabajo. Esta decisión se fundamenta en la necesidad de equilibrar la **agilidad de entrega** con la **estabilidad de producción**, un pilar crítico para el éxito de la compañía.

## Fundamentos de la Elección

### 1. Aislamiento de Versiones (Branching Isolation)
GitFlow proporciona una separación clara entre el desarrollo diario (`develop`), las nuevas funcionalidades (`feature/*`) y el código listo para producción (`main`). 
- **Beneficio PetBook**: Esto permite que múltiples ingenieros trabajen en mejoras del feed de mascotas sin poner en riesgo la estabilidad de la página de inicio ya desplegada.

### 2. Ciclo de Estabilización (Release Branches)
A diferencia de flujos más simples como GitHub Flow, GitFlow introduce ramas de `release`. 
- **Justificación**: Estas ramas actúan como un buffer de calidad donde se realizan las últimas pruebas integradas antes de mover el código a producción. Esto es vital para garantizar que la "agilidad" no se convierta en "inestabilidad".

### 3. Respuesta Rápida ante Incidentes (Hotfixes)
La estructura dedicada de ramas de `hotfix` permite realizar correcciones críticas directamente en producción y sincronizarlas automáticamente con el flujo de desarrollo.
- **Aplicación**: Si un bug afecta la visualización de fotos en PDN, el equipo puede actuar en minutos sin esperar a que terminen otras funcionalidades en desarrollo.

## Alineación con la Estrategia DevOps
La elección de GitFlow no es solo técnica, es estratégica. Facilita la implementación de **Quality Gates** en Azure DevOps:
- Cada `Merge Request` a `develop` dispara un análisis de SonarQube obligatorio.
- Solo las ramas validadas pueden fusionarse a `main`, garantizando que la confiabilidad del sistema crezca con cada iteración.

---
*Documento preparado para la Gerencia de Tecnología de PetBook - Marzo 2026*
