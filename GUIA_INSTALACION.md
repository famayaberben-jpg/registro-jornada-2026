# 🚀 Guía de Instalación y Uso

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado:

- **Node.js** (v16 o superior) - [Descargar](https://nodejs.org/)
- **npm** (generalmente viene con Node.js)
- **Expo CLI** - Instala globalmente con: `npm install -g expo-cli`

### Plataformas
- **iOS**: Necesitas una Mac con Xcode
- **Android**: Necesitas Android Studio o Android SDK
- **Web**: Funciona en cualquier navegador moderno

---

## Instalación Local

### 1. Clonar el Repositorio
```bash
git clone https://github.com/famayaberben-jpg/registro-jornada-2026.git
cd registro-jornada-2026
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Iniciar la Aplicación

#### Opción A: En tu Teléfono (Recomendado)
```bash
expo start
```
- Escanea el código QR con tu teléfono usando:
  - **iOS**: Cámara o app Expo
  - **Android**: App Expo

#### Opción B: En Emulador/Simulador
```bash
# Para Android
expo start --android

# Para iOS (solo en Mac)
expo start --ios
```

#### Opción C: En el Navegador
```bash
expo start --web
```

---

## Características Principales

### 📱 Pantalla de Inicio
- **Resumen del mes actual**: Muestra total de horas trabajadas
- **Últimas jornadas**: Lista de los últimos 5 registros
- **Botón flotante (+)**: Acceso rápido para agregar nuevas jornadas

### ➕ Agregar/Editar Jornada
- Selecciona la **fecha** en formato YYYY-MM-DD
- Ingresa las **horas trabajadas** (ej: 8, 8.5, 9.25)
- **Guardar** para registrar o **Cancelar** para descartar
- Puedes **editar** jornadas existentes desde el historial

### 📋 Historial
- Navega por **meses** con los botones < y >
- Ve todas las jornadas del mes seleccionado
- **Edita** o **elimina** registros individuales
- Ordena automáticamente por fecha

### 📊 Estadísticas
- **Total de horas anuales**: Suma de todas las horas del año
- **Horas este mes**: Total del mes actual
- **Promedio por jornada**: Horas promedio trabajadas
- **Desglose mensual**: Gráfico visual de horas por mes
- Navega entre años con < y >

### 📥 Exportar a Excel
- **Descarga todos tus registros** en un archivo Excel (.xlsx)
- Incluye: Fecha y Horas Trabajadas
- Compatible con:
  - Microsoft Excel
  - Google Sheets
  - LibreOffice Calc

---

## Estructura del Proyecto

```
registro-jornada-2026/
├── src/
│   ├── components/
│   │   └── CommonComponents.js       # Componentes reutilizables
│   ├── screens/
│   │   ├── HomeScreen.js            # Pantalla de inicio
│   │   ├── AgregarJornadaScreen.js  # Agregar/Editar jornada
│   │   ├── HistorialScreen.js       # Historial de jornadas
│   │   ├── EstadisticasScreen.js    # Estadísticas
│   │   └── ExportarScreen.js        # Exportar a Excel
│   ├── services/
│   │   ├── DatabaseService.js       # Gestión de BD SQLite
│   │   └── ExcelService.js          # Exportación a Excel
│   ├── context/
│   │   └── JornadaContext.js        # Estado global
│   ├── utils/
│   │   └── calculators.js           # Funciones de cálculo
│   └── App.js                        # Punto de entrada
├── App.js                            # Configuración principal
├── app.json                          # Configuración Expo
├── package.json                      # Dependencias
└── README.md                         # Documentación
```

---

## Base de Datos

La aplicación usa **SQLite** para almacenar los datos localmente en tu dispositivo.

### Tabla de Jornadas
```sql
CREATE TABLE jornadas (
  id TEXT PRIMARY KEY,
  fecha TEXT NOT NULL,
  horasTrabajadas REAL NOT NULL,
  createdAt TEXT NOT NULL,
  updatedAt TEXT NOT NULL
);
```

**Ventajas:**
- ✅ Datos almacenados localmente
- ✅ No necesita conexión a internet
- ✅ Privacidad: Tus datos están en tu dispositivo
- ✅ Rápido y eficiente

---

## Funcionalidades Disponibles

| Función | Descripción |
|---------|-------------|
| ➕ Agregar Jornada | Registra una nueva jornada con fecha y horas |
| ✏️ Editar Jornada | Modifica una jornada existente |
| 🗑️ Eliminar Jornada | Elimina un registro |
| 📊 Ver Historial | Navega por meses y ve todos los registros |
| 📈 Estadísticas | Analiza tus horas (mensual, anual, promedio) |
| 📥 Exportar Excel | Descarga todos tus datos en Excel |

---

## Consejos y Trucos

### 🎯 Mejores Prácticas
1. **Registra diariamente** para mantener un historial preciso
2. **Usa decimales** para mayor precisión (8.5 = 8h 30min)
3. **Revisa mensualmente** tu progreso en Estadísticas
4. **Exporta regularmente** como respaldo de tus datos

### 📝 Ejemplos de Entrada
- `8` = 8 horas
- `8.5` = 8 horas 30 minutos
- `9.25` = 9 horas 15 minutos
- `7.75` = 7 horas 45 minutos

### 🔄 Sincronización
Actualmente, la app almacena datos localmente. Para sincronizar entre dispositivos:
1. Exporta a Excel en dispositivo A
2. Copia el archivo a tu nube (Google Drive, OneDrive, etc.)
3. En dispositivo B, importa manualmente (próxima versión tendrá auto-sincronización)

---

## Solución de Problemas

### ❌ La app no inicia
```bash
# Limpia cache y reinstala
rm -rf node_modules package-lock.json
npm install
expo start --clear
```

### ❌ Error de Base de Datos
- Reinstala la app
- Los datos se guardan localmente, así que se perderán
- Por eso es importante exportar regularmente a Excel

### ❌ Error al Exportar
- Asegúrate de tener espacio en el dispositivo
- Verifica que hayas dado permisos de almacenamiento
- Intenta de nuevo

### ❌ Cambios no se guardan
- Comprueba que presionaste "Guardar"
- Verifica que la fecha esté en formato correcto (YYYY-MM-DD)
- Las horas deben ser un número válido

---

## Próximas Características (Roadmap)

- 🔐 Sincronización en la nube (Firebase)
- 📊 Gráficos más avanzados
- 🔔 Notificaciones para recordar registro
- 💾 Importar Excel existente
- 👥 Sincronización entre dispositivos
- 🌙 Modo oscuro
- 🔑 Autenticación con contraseña

---

## Contribuir

¿Quieres mejorar la app? ¡Estamos abiertos a contribuciones!

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

---

## Soporte

Si encuentras problemas:
1. Revisa esta guía
2. Abre un [Issue en GitHub](https://github.com/famayaberben-jpg/registro-jornada-2026/issues)
3. Describe el problema con detalle

---

## 📞 Contacto

**Autor:** famayaberben-jpg  
**Email:** famayaberben@gmail.com  
**GitHub:** [@famayaberben-jpg](https://github.com/famayaberben-jpg)

---

**¡Gracias por usar Registro de Jornada 2026! 🎉**

Hecho con ❤️ para ayudarte a gestionar tu tiempo de trabajo.
