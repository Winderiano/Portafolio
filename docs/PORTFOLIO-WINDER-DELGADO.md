# Portafolio Winder Delgado - Documentación Técnica

> **Proyecto**: Rediseño completo del portafolio de Winder Delgado (médico + desarrollador)  
> **Última actualización**: 11 abril 2026  
> **Estado**: ✅ Completado y deployado

---

## 📋 Resumen Ejecutivo

Portafolio profesional híbrgo que combina perfil de médico con habilidades de desarrollo de software. Proyecto React moderno deployado en Netlify.

### Tech Stack
- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **i18n**: Español + Inglés
- **Deploy**: Netlify (automático desde GitHub)
- **Repo**: https://github.com/Winderiano/Portafolio

---

## 📂 Estructura del Proyecto

```
Portafolio-React/
├── src/
│   ├── components/
│   │   ├── Hero.jsx        # Botón CV descarga
│   │   ├── Education.jsx   # Certificaciones con 2 enlaces
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── ...
│   ├── i18n/
│   │   ├── es.json         # Textos español
│   │   └── en.json         # Textos inglés
│   ├── hooks/
│   │   └── useLanguage.js
│   └── ...
├── assets/
│   ├── Documents/         # 20 PDFs subidos a GitHub
│   └── images/
├── netlify.toml         # Config deploy
└── package.json
```

---

## 🔧 Fases Implementadas

### ✅ Fase 1: Botón Descarga CV

**Problema**: Botón apuntaba a repo incorrecto (404)

**Solución**:
- PDF: `CVWrdp.pdf` (convertido desde Word)
- Link: `https://raw.githubusercontent.com/Winderiano/Portafolio/main/assets/Documents/CVWrdp.pdf`
- Repo correcto: `Winderiano/Portafolio` (NO Portafolio-React)

**Archivos modificados**:
- `src/components/Hero.jsx` - Agregado botón con FaDownload

---

### ✅ Fase 2: Formación Académica

**Problema**: Texto incorrecto y mal escrito

**Solución**:
- "Especialización en salud ocupacional y medicina laboral" → "Especialización en Medicina del Trabajo"
- Eliminado "CULMINADO" (mal escrito)
- Ordenado por fecha (más reciente primero)

**Archivos modificados**:
- `src/i18n/es.json` (líneas ~192-195)
- `src/i18n/en.json` (líneas ~192-195)

---

### ✅ Fase 3: Certificaciones con 2 Enlaces

**Problema**: Un solo enlace por certificación

**Solución**:
- Nueva estructura: `certificate` + `studyPlan`
- 20 PDFs subidos a GitHub
- Dos botones por certificación:
  - 📜 **Certificado** - Para demostrar que completaste el curso
  - 📋 **Plan de Estudio** - Para ver el temario/contenido

**Archivos subidos a GitHub**:
| Certificado | Plan de Estudio |
|------------|--------------|
| Diploma_CAC.pdf | Plan de estudios- Full Stack Python 2024.pdf |
| master-biomedicina.pdf | Master-Bioinformatica.pdf |
| Inicial_-_Certificacin (python inicial).pdf | - |
| BI_-_Certificacin.pdf | Plan-BI_compressed.pdf |
| IIA-_Certificacin talento tech.pdf | - |
| Diploma_CAC Full stack python.pdf | unsam_-_ciencia_de_datos_e_inteligencia_artificial.pdf |
| certificado de etica medica...pdf | - |
| Certificado de 2do modulo USAM.pdf | - |

**Links RAW base**:
```
https://raw.githubusercontent.com/Winderiano/Portafolio/main/assets/Documents/[archivo].pdf
```

**Archivos modificados**:
- `src/i18n/es.json` (sección certificates)
- `src/i18n/en.json` (sección certificates)
- `src/components/Education.jsx` -Renderizado de 2 botones

---

## 📝 Git - Commits Recientes

| # | Commit | Descripción |
|----|-------|-----------|
| 1 | feat: Update formation and certifications with dual links | Certificaciones + 2 enlaces |
| 2 | feat: Upload all certification PDFs and study plans | 20 PDFs subidos |
| 3 | fix: Point CV button to correct CVWrdp.pdf | Link CV corregido |
| 4 | feat: Add CVWrdp.pdf | PDF subido |
| 5 | fix: Corregir URL del CV a repo correcto | Repo correcto |

---

## 🌐 URLs y URLs de Recursos

### Sitio Principal
- **Netlify**: https://winderiano.netlify.app

### GitHub
- **Repo**: https://github.com/Winderiano/Portafolio
- **Branch principal**: main

### PDFs (Ejemplos)
- CV: https://raw.githubusercontent.com/Winderiano/Portafolio/main/assets/Documents/CVWrdp.pdf
- Certificado Full Stack: https://raw.githubusercontent.com/Winderiano/Portafolio/main/assets/Documents/Diploma_CAC.pdf
- Plan Full Stack: https://raw.githubusercontent.com/Winderiano/Portafolio/main/assets/Documents/Plan%20de%20estudios-%20estudiantes-%20Full%20Stack%20Python%202024.pdf

---

## ⚠️ Notas Importantes

1. **NO usar repo Portafolio-React**: Solo existe `Winderiano/Portafolio`
2. **Carpeta Documents en .gitignore**: Para evitar subir PDFs pesados, se usa `git add -f`
3. **20 PDFs max**: GitHub tiene límites, no subir más de lo necesario

---

## 🔄 Mantenimiento Fututo

### Agregar nueva certificación
1. Subir PDF a GitHub (usar `git add -f`)
2. Agregar en `es.json` y `en.json`:
```json
{
  "name": "Nuevo Curso",
  "institution": "Institución",
  "certificate": "https://raw.githubusercontent.com/.../archivo.pdf",
  "studyPlan": "https://raw.githubusercontent.com/.../plan.pdf"
}
```

### Actualizar textos
- Editar `src/i18n/es.json` (español)
- Editar `src/i18n/en.json` (inglés)

### Deploy manual
```bash
git add -A
git commit -m "feat: Descripción"
git push
```

---

## 📅 Historial de Sesiones

| Fecha | Sesión | Trabajado |
|-------|-------|----------|
| 2026-04-11 | Sesión 1 | Rediseño completo + botón CV + formaciones + certificaciones |

---

*Documentación creada el 11 de abril de 2026*