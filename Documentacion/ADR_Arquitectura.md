# Architecture Decision Record (ADR): PetBook

Este directorio contiene las decisiones arquitectónicas clave tomadas durante el desarrollo del proyecto PetBook. El objetivo es proporcionar transparencia y justificación técnica a largo plazo.

## [ADR-001] Selección de Stack Tecnológico (Vite + React + TS)

### Estado
Aceptado

### Contexto
La compañía PetBook requiere una entrega rápida de cambios ("Agilidad") sin comprometer la calidad. El sistema actual es manual y lento.

### Decisión
Hemos seleccionado **Vite** como herramienta de construcción y **React** como librería de UI, integrados con **TypeScript**.

### Consecuencias
- **Positivas**: Tiempos de Hot Module Replacement (HMR) casi instantáneos, tipado estricto que reduce errores en producción del 15% al 20%, y una curva de aprendizaje moderada para el equipo.
- **Negativas**: Necesidad de transpilación, pero se mitiga con la velocidad de esbuild en Vite.

---

## [ADR-002] Automatización de Infraestructura vía Docker-Compose

### Estado
Aceptado

### Contexto
La migración mensual de servidores Linux causa fricción y pérdida de datos.

### Decisión
Utilizar **Docker** y **Docker-Compose** para la herramienta de calidad (SonarQube).

### Consecuencias
- **Positivas**: Aislamiento total de dependencias, repetibilidad garantizada en cualquier entorno Linux y persistencia de datos mediante volúmenes.
- **Negativas**: Ligero overhead de recursos por la capa de virtualización de Docker.
