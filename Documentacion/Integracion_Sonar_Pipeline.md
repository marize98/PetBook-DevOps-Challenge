# Integración SonarQube y Pipeline CI/CD: Unificación y Propósito

## Contextos de la Unión
El reto técnico solicitaba dos componentes: un script de instalación de SonarQube y una estrategia de despliegue orquestada. En esta solución, ambos elementos se han **unificado** para crear un ecosistema retroalimentado de calidad.

## ¿Por qué hicimos la unión?
La instalación manual de herramientas de calidad suele ser un cuello de botella. Al integrar el análisis de SonarQube directamente en el pipeline de Azure DevOps, transformamos una herramienta de inspección pasiva en un **control de calidad activo**.
1. **Feedback Inmediato**: El desarrollador recibe el reporte de calidad segundos después de subir su código.
2. **Quality Gates**: El pipeline está configurado para fallar si el código no cumple con los estándares mínimos (cobertura de pruebas, ausencia de bugs críticos).

## ¿Cómo se realizó la integración?
1. **Automatización de Infraestructura**: El script `install-sonarqube.sh` levanta el servidor de análisis.
2. **Service Connection**: Se crea un vínculo seguro en Azure DevOps hacia el servidor de SonarQube.
3. **Pipeline Stages**: 
   - Se incluyó la tarea `SonarQubePrepare` para definir el alcance del análisis.
   - La tarea `SonarQubeAnalyze` ejecuta el escaneo profundo.
   - La tarea `SonarQubePublish` envía los resultados para que sean visibles en el Dashboard de Azure DevOps.

## ¿Para qué sirve esta unión?
Esta integración tiene un objetivo estratégico claro: **Gobernanza de Calidad**.
- **Para el CTO**: Visibilidad total sobre los riesgos técnicos de la aplicación.
- **Para los Desarrolladores**: Guía clara sobre qué mejorar antes de que el código llegue a producción.
- **Para PetBook**: Garantía de que la velocidad de entrega no se traduce en falta de calidad técnica.

La unión de estos componentes asegura que "Agilidad" y "Estabilidad" convivan en el mismo proceso de software.
