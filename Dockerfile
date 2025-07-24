# Dockerfile para servir el sitio Skillsoft Clone en Cloud Run
# Usa una imagen oficial de nginx para servir contenido estático
FROM nginx:alpine

# Cambia la configuración de Nginx para escuchar en el puerto 8080
RUN sed -i 's/listen       80;/listen       8080;/' /etc/nginx/conf.d/default.conf

# Copia el contenido del sitio al directorio de nginx
COPY skillsoft-clone/ /usr/share/nginx/html/

# Expone el puerto 80 (requerido por Cloud Run)
EXPOSE 8080

# Comando por defecto para iniciar nginx en primer plano
CMD ["nginx", "-g", "daemon off;"] 

#Así, tu contenedor servirá en el puerto 8080 y será 100% compatible con Cloud Run.
