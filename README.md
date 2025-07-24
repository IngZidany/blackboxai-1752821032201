# Skillsoft Clone

## Estructura del proyecto

- `index.html` — Página principal (comentada y modular)
- `js/` — Scripts JavaScript (modular y comentado)
- `css/` — Hojas de estilo personalizadas (modular y comentado)
- `img/` — Imágenes y recursos multimedia

## Modularidad y escalabilidad

- **Nuevas páginas**: Duplica `index.html`, renómbrala y enlázala desde el menú o donde corresponda.
- **Nuevos scripts**: Agrega archivos JS en `js/` y enlázalos en las páginas que los requieran.
- **Nuevos estilos**: Agrega archivos CSS en `css/` y enlázalos según necesidad.
- **Imágenes**: Guarda todos los recursos gráficos en `img/` y usa rutas relativas.

## Comentarios en el código

Todo el código está ampliamente comentado para facilitar la comprensión y la colaboración.

## Despliegue en Cloud Run

1. Construye la imagen Docker:
   ```sh
   docker build -t skillsoft-clone .
   ```
2. Sube la imagen a Google Container Registry o Artifact Registry.
3. Despliega en Cloud Run siguiendo la documentación oficial.
