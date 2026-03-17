# Estrategia DevOps PetBook: Agilidad y Calidad Superior

## 🚀 La Visión
Transformar los procesos manuales y lentos en una maquinaria de ingeniería automatizada, escalable y eficiente.

## 🛠️ Flujo de Trabajo: GitFlow
Hemos implementado **GitFlow** como modelo de ramificación.
- **Justificación**:
  - **Estabilidad Total**: La rama `main` siempre permanece en un estado listo para producción.
  - **Entrega por Valor**: Permite que las nuevas funcionalidades se integren de forma ordenada en `develop`.
  - **Calidad Mandatoria**: Cada Pull Request activa automáticamente el ciclo de CI/CD.

## 🏗️ Infraestructura Automatizada (SonarQube)
Solucionamos el reto de las migraciones mensuales mediante automatización con Docker.
- **Contenedores**: Aislamos las dependencias, eliminando el "funciona en mi máquina".
- **Persistencia**: Los datos de calidad sobreviven a la migración de servidores.
- **Rapidez**: Tiempo de provisión de infraestructura reducido de horas a segundos.

## 🧪 Calidad en Cada Fase
Nuestro compromiso con la calidad se evidencia en:
1. **Pruebas de Unidad**: Vitest garantiza que la lógica de negocio es correcta antes de compilar.
2. **Inspección Profunda**: SonarQube integrado en el pipeline detecta riesgos de seguridad automáticamente.
3. **Agilidad en PDN**: El cambio en el frontend se despliega a AWS mediante CloudFront, asegurando visibilidad inmediata al cliente final.

## ☁️ Escalabilidad y Performance
Utilizamos una arquitectura **Serverless** en AWS (S3 + CloudFront):
- **Cero Gestión**: No más parches de servidores web.
- **Velocidad de Usuario**: Cacheo en el borde (Edge) para una carga instantánea de fotos de mascotas.

---
*Presentado por la Ingeniería DevOps de PetBook*
