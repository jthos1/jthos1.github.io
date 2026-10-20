JOSHUA GREY — PORTAFOLIO (VERSIÓN CORREGIDA PARA GITHUB PAGES)

GALERÍAS ACTUALIZADAS
- Se integraron las imágenes del archivo GALLERY.zip en los seis proyectos.
- El orden de las imágenes respeta la numeración de los archivos cuando existe.
- Se conservaron los nombres originales de los archivos de imagen para facilitar su reemplazo y mantener nombres descriptivos útiles para SEO.
- Todas las imágenes se sirven desde la carpeta local assets/; el sitio ya no depende de las URL de imágenes de Cargo.
- El Sueño de la Razón Produce Monstruos: 6 imágenes.
- La Laguna de Paca: 6 imágenes.
- El Diluvio: 6 imágenes.
- Leyenda de María Paz: 4 imágenes.
- Getting High: 1 imagen.
- Divagaciones de un Pobre Diablo: 6 imágenes.

ESTRUCTURA
- index.html: página y miniaturas de la portada.
- styles.css: estilos, diagramación y adaptación responsive.
- script.js: contenido de proyectos y comportamiento de las fichas.
- assets/project-01/ a assets/project-06/: galerías de cada proyecto. Los nombres de los archivos originales se conservan.

PROBAR
1. Descomprime el ZIP completo, sin separar los archivos de la carpeta assets.
2. Abre index.html en un navegador moderno.
3. Haz clic en cada proyecto y verifica que se muestren todas sus imágenes.

ANTES DE PUBLICAR
- El formulario usa mailto y abre el programa de correo del visitante; el destinatario ya está configurado como joshugr@gmail.com. No envía mensajes directamente desde el sitio.
- Las imágenes se han optimizado previamente y se han verificado las rutas locales. Los nombres de archivo usan caracteres ASCII para evitar problemas de compatibilidad.


TIPOGRAFÍA (v5)
El sitio usa Martian Mono variable mediante Google Fonts. Se requiere conexión a internet para descargar la fuente desde Google Fonts; no necesitas adjuntar archivos tipográficos. Si luego deseas que la tipografía funcione sin conexión externa, se puede incorporar una versión webfont WOFF2 con licencia adecuada.

SEO INICIAL (v7)
- Se añadieron descripción, autor, robots, Open Graph, Twitter Card y datos estructurados Person.
- Antes de publicar, añade la URL final como canonical y crea sitemap.xml/robots.txt usando la dirección real de GitHub Pages o del dominio propio.
- Mantén texto descriptivo en los atributos alt de imágenes; los nombres de archivo se conservaron.
- Para el SEO de imágenes, los metadatos EXIF/IPTC internos no se añaden automáticamente al publicar; si necesitas cambiar nombre de archivo o metadatos internos, debe hacerse antes de subir los archivos.
