# 🐾 PetBook: Solución DevOps de Clase Mundial

¡Bienvenido al repositorio oficial del reto técnico de DevOps para **PetBook**! Esta solución ha sido diseñada bajo los más altos estándares de ingeniería, automatización y agilidad, demostrando una madurez técnica superior.

## 🚀 Cómo Probar la Solución y Ver el Prototipo

Para ejecutar y validar la solución localmente, siga estos pasos:

### 1. Pre-requisitos
- **Node.js**: Versión 18 o superior.
- **Docker**: Para ejecutar el script de SonarQube.

### 2. Ejecutar la Aplicación PetBook (Prototipo)
```bash
cd petbook-app
npm install
npm run dev
```
Una vez ejecutado, abra su navegador en: **`http://localhost:5173`**

### 3. Ejecutar Automatización de SonarQube
```bash
# En la raíz del proyecto
bash install-sonarqube.sh
```
Acceda al panel de calidad en: **`http://localhost:9000`** (Credenciales: `admin`/`admin`)

---

## 📂 Estructura del Proyecto

```text
BanistmoDevOps/
├── Documentacion/          # Reportes estratégicos y técnicos detallados
│   ├── Presentacion_CTO.md # Estrategia y Justificación GitFlow
│   ├── Calidad_Practicas.md # Estándares y Prácticas DevOps
│   ├── Evidencia_Sonar.md  # Certificación de instalación exitosa
│   └── Integracion_Sonar_Pipeline.md # Unión de Calidad y Despliegue
├── petbook-app/            # Aplicación Web (React + TS + Vitest)
│   ├── src/
│   │   ├── components/     # Componentes Modularizados (Buenas Prácticas)
│   │   ├── types/          # Definición de tipos estáticos
│   └── ...
├── azure-pipelines.yml     # Orquestación de CI/CD Multi-etapa
└── install-sonarqube.sh    # Script de automatización (IaC)
```

---

## 🛠️ Buenas Prácticas Aplicadas (Nivel Crack)

1.  **Modularización Frontend**: La aplicación no es un monolito; está dividida en componentes reutilizables (`Navbar`, `PetCard`, `PetFeed`) siguiendo principios de diseño atómico.
2.  **Infraestructura como Código (IaC)**: Eliminamos instalaciones manuales. El script de Sonar es repetible, mantenible e idempotente.
3.  **Calidad en el Pipeline**: El pipeline de Azure DevOps no solo construye; valida sintaxis (Lint), lógica (Unit Tests) y deuda técnica (SonarQube).
4.  **Agilidad Real**: El despliegue a AWS (S3 + CloudFront) garantiza que los cambios lleguen al usuario final en cuestión de minutos.
5.  **Tipado Estricto**: Uso riguroso de TypeScript para minimizar errores en tiempo de ejecución.

---

## 🏁 Certificación del Reto
Para verificar que cada requerimiento se cumplió, consulte la guía detallada de evaluación en:
👉 [Guía de Evaluación (RESUMEN)](Documentacion/RESUMEN.md)

*Desarrollado con pasión para transformar la ingeniería en PetBook.*
