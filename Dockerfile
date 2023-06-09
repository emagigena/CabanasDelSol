# Establecer la imagen base
FROM node:14-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias
RUN npm ci --production

# Copiar el resto de los archivos al contenedor
COPY . .

# Compilar el proyecto
RUN npm run build

# Exponer el puerto 3000 (puerto predeterminado de Next.js)
EXPOSE 3000

# Comando para ejecutar el servidor Next.js
CMD ["npm", "start"]
