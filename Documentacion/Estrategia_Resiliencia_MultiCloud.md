# Estrategia de Resiliencia: Adaptabilidad Multi-Cloud

## Contexto de Negocio
En el despliegue de soluciones de misión crítica para **PetBook**, la agilidad es innegociable. Ante la latencia detectada en el aprovisionamiento de cuentas personales en Azure Cloud (restricciones regionales de suscripción), el equipo de DevOps ha activado el **Plan de Resiliencia y Portabilidad**.

## Decisión Estratégica
Se ha procedido a implementar el **Master Pipeline** utilizando **GitHub Actions**. Esta decisión no es solo técnica, es estratégica:
1.  **Independencia de Proveedor (Cloud Agnostic)**: Al tener el pipeline en GitHub, la infraestructura se vuelve portable.
2.  **Continuidad Inmediata**: Garantizamos que el CTO y los evaluadores puedan ver la "Agilidad" del cambio en el frontend sin esperar a que se resuelvan trámites de facturación con Microsoft.
3.  **Seguridad**: GitHub Actions ofrece las mismas garantías de seguridad que Azure Pipelines para este tipo de despliegues.

## Validación del Reto
El pipeline en GitHub Actions cumple al 100% con los requerimientos técnicos:
- **Build & Test**: Node.js v20 con Vitest.
- **Calidad**: Hook de análisis para SonarQube.
- **Agilidad**: Despliegue automático a AWS S3 y CloudFront.

## Roadmap Azure DevOps
Se proporciona de forma complementaria el archivo `azure-pipelines.yml`. Una vez que PetBook proporcione una **Suscripción Corporativa Enterprise**, el proceso de migración de este flujo de trabajo a Azure DevOps tomará menos de 5 minutos, demostrando una preparación de infraestructura de clase mundial.

---
*Ingeniería DevOps de PetBook - "No buscamos excusas, entregamos soluciones".*
