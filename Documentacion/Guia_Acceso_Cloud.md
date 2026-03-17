# Guía de Acceso a Ecosistema Cloud: PetBook

## 1. Azure DevOps (Orquestación CI/CD)

### Acceso a la Organización
- **URL**: `https://dev.azure.com/PetBookDevOps/`
- **Gestión de Accesos**: Se ha procedido a invitar a los siguientes usuarios finales con rol de "Project Contributor":
  - `jaime.mcclean@banistmo.com`
  - `skillhacking@banistmo.com`
- **Credenciales del Ingeniero**: 
  - **Usuario**: `marize98` (Asociado a GitHub/Azure)
  - **Password**: `Yasmincita27**`

### Componentes en Azure:
- **Repos**: Espejo del repositorio en GitHub.
- **Pipelines**: Ubicación del `azure-pipelines.yml` donde reside la inteligencia del despliegue.

## 2. AWS (Plataforma de Despliegue)

### Arquitectura de Producción
Se ha seleccionado **AWS** por su alta disponibilidad y servicios optimizados para contenido estático (Frontend).
- **Amazon S3**: Almacena los artefactos de la aplicación (proyectos compilados).
- **Amazon CloudFront (CDN)**: Distribuye el contenido globalmente con baja latencia.

### Acceso a Consola AWS
- **Consola**: `https://signin.aws.amazon.com/`
- **Credenciales Gerenciales**:
  - **IAM User**: `PetBook-Manager`
  - **Password**: `Yasmincita27**` (Sincronizado por seguridad con el stack principal)

### Verificación de Despliegue:
Para certificar que el cambio es visible en minutos:
1. Revise el pipeline en Azure DevOps.
2. Tras el mensaje "Success", limpie la cache de su navegador o use navegación privada.
3. La URL de CloudFront (proporcionada en el pipeline) mostrará la versión más reciente.

---
*Confidencial - Propiedad Intelectual de PetBook*
