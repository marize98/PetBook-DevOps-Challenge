# Calidad de las Prácticas DevOps: Informe Profesional

## Introducción
Este documento detalla los estándares de calidad y las prácticas de ingeniería aplicadas durante el desarrollo de la solución PetBook. El enfoque se centra en la automatización, la mantenibilidad y la entrega continua de valor.

## 1. Gestión de la Configuración y Automatización
Se implementó un script de instalación de SonarQube bajo los principios de **Infraestructura como Código (IaC)**.
- **Repetibilidad**: El uso de Docker permite que el entorno sea idéntico en cualquier servidor Linux.
- **Idempotencia**: El script verifica el estado actual del sistema antes de realizar cambios, evitando instalaciones duplicadas o fallidas.
- **Mantenibilidad**: La configuración está centralizada en un archivo `docker-compose.yml` generado dinámicamente, facilitando actualizaciones futuras.

## 2. Integración Continua (CI)
El flujo de integración garantiza que ningún código defectuoso llegue a las ramas principales.
- **Validación Estática**: Uso de ESLint para asegurar la calidad sintáctica y consistencia del código.
- **Pruebas Unitarias**: Implementación de Vitest para una ejecución ultra rápida de pruebas en el entorno de desarrollo y CI.
- **SonarQube**: Integración de análisis profundo para la detección de deuda técnica, vulnerabilidades de seguridad y duplicación de código.

## 3. Despliegue Continuo (CD)
La agilidad en la entrega es fundamental para PetBook.
- **Estrategia Serverless**: El uso de AWS S3 + CloudFront elimina la sobrecarga de gestión de servidores y mejora la velocidad de carga global.
- **Invalidación de Cache**: Automatizada en el pipeline para asegurar que los cambios sean visibles en cuestión de segundos tras el despliegue.

## 4. Estrategia de Ramas (GitFlow)
Se seleccionó GitFlow para proporcionar un aislamiento robusto de características y versiones.
- **Main (PDN)**: Solo contiene código verificado y estable.
- **Develop**: Integración constante de nuevas funcionalidades.
- **Features/Hotfixes**: Desarrollo aislado para evitar conflictos en el equipo.

## Conclusión
La solución no solo resuelve el problema técnico inicial, sino que sienta las bases para una cultura de excelencia en ingeniería, permitiendo a PetBook escalar de manera segura y eficiente.
