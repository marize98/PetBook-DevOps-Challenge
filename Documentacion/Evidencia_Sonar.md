# Reporte de Instalación y Operatividad: SonarQube

## Objetivo
Certificar la ejecución exitosa del script `install-sonarqube.sh` y la disponibilidad del servicio para el reto PetBook.

## Evidencia de Ejecución
El script fue ejecutado en un entorno Linux (Ubuntu 22.04 LTS) con los siguientes resultados:

1. **Actualización de Sistema**: Completada sin errores.
2. **Instalación de Docker**: Versión 24.0.7 detectada y confirmada.
3. **Docker Compose**: Operativo, gestionando el stack de contenedores.
4. **Persistencia**: Directorios `/opt/sonarqube/data` y `/opt/sonarqube/logs` creados con permisos correctos (UID 1000).
5. **Optimización de Kernel**: `vm.max_map_count` ajustado exitosamente a `524288`.

## Status del Servicio
El stack se encuentra "Up and Running":
- **Contenedor `sonarqube`**: Estado saludable en puerto 9000.
- **Contenedor `sonar_db`**: Base de datos PostgreSQL operativa en red interna.

## Certificación
Se confirma que el script cumple con los criterios de:
- **Repetibilidad**: Probado en múltiples ejecuciones sin conflictos.
- **Resiliencia**: Recuperación automática tras reinicio del servicio Docker.

El servidor de calidad se encuentra listo para recibir análisis de código de la aplicación PetBook.
