# Contribuir a Registro de Jornada 2026

¡Gracias por tu interés en contribuir! Este documento te guiará en el proceso.

## Código de Conducta

Nos comprometemos a proporcionar un ambiente acogedor y respetuoso. Por favor sé cortés y constructivo en todas las interacciones.

## ¿Cómo Puedo Contribuir?

### 🐛 Reportar Bugs

Si encuentras un bug:
1. Verifica que no esté reportado ya en [Issues](https://github.com/famayaberben-jpg/registro-jornada-2026/issues)
2. Abre un nuevo Issue con el título descriptivo
3. Describe:
   - Qué esperabas que sucediera
   - Qué sucedió en realidad
   - Pasos para reproducir el error
   - Tu entorno (iOS/Android, versión, etc.)

### 💡 Sugerir Mejoras

Para sugerir nuevas características:
1. Usa el título "Enhancement: [descripción]"
2. Describe el caso de uso
3. Explica cómo resolvería un problema
4. Proporciona ejemplos si es posible

### 📝 Enviar Pull Requests

#### Antes de Comenzar
1. Fork el repositorio
2. Clona tu fork: `git clone https://github.com/tu-usuario/registro-jornada-2026.git`
3. Crea una rama: `git checkout -b feature/nombre-feature`

#### Durante el Desarrollo
1. Sigue el estilo de código existente
2. Escribe código limpio y bien comentado
3. Prueba tu código antes de enviar
4. Actualiza la documentación si es necesario

#### Enviando el PR
1. Push a tu rama: `git push origin feature/nombre-feature`
2. Abre un Pull Request en GitHub
3. Describe los cambios claramente
4. Referencia los Issues relacionados

#### Checklist del PR
- [ ] Mi código sigue el estilo del proyecto
- [ ] He actualizado la documentación
- [ ] He probado los cambios localmente
- [ ] He agregado nuevos tests si aplica
- [ ] No hay conflictos de merge

## Estilo de Código

### JavaScript/React
```javascript
// ✅ Bueno
const handleClick = () => {
  // Código aquí
};

// ❌ Evitar
const handleClick=()=>{};
```

### Componentes React
```javascript
// ✅ Usar componentes funcionales
export default function MiComponente({ props }) {
  return <View>...</View>;
}

// ✅ Usar hooks
const [state, setState] = useState(initialValue);

// ❌ No usar componentes de clase
class MiComponente extends React.Component {}
```

### Nomenclatura
- Archivos de componentes: `PascalCase.js`
- Archivos de servicios: `camelCase.js`
- Variables y funciones: `camelCase`
- Constantes: `UPPER_SNAKE_CASE`

### Comentarios
```javascript
// Comentario simple para líneas

/**
 * Comentario para funciones
 * @param {type} paramName - Descripción
 * @returns {type} Descripción del retorno
 */
export const myFunction = (paramName) => {
  // Código
};
```

## Configuración del Entorno

### Requisitos
- Node.js v16+
- npm o yarn
- Expo CLI

### Setup
```bash
# Clonar repo
git clone https://github.com/famayaberben-jpg/registro-jornada-2026.git
cd registro-jornada-2026

# Instalar dependencias
npm install

# Iniciar desarrollo
npm start
```

## Proceso de Review

1. Un mantenedor revisará tu PR
2. Es posible que pida cambios
3. Realiza los cambios en tu rama
4. El PR se aprobará y fusionará

## Ayuda

### Preguntas
- Abre un [Discussion](https://github.com/famayaberben-jpg/registro-jornada-2026/discussions)
- Etiqueta a los mantenedores si necesitas ayuda urgente

### Recursos
- [Documentación de React Native](https://reactnative.dev/)
- [Documentación de Expo](https://docs.expo.dev/)
- [Documentación de React Navigation](https://reactnavigation.org/)

## Reconocimiento

Todos los contribuyentes serán reconocidos en el archivo CONTRIBUTORS.md.

---

**¡Gracias por contribuir a hacer esta app mejor! 🚀**
