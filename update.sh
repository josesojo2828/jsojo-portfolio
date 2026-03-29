#!/bin/bash

# --- PROD UPDATE SCRIPT ---
# Jose Sojo Portfolio - Industrial Architecture
# --------------------------

echo "🚀 INICIANDO ACTUALIZACIÓN DE PRODUCCIÓN..."

# 1. Alineación forzada con GitHub (Necesario por la purga de secretos)
echo "📦 Sincronizando repositorio con GitHub (Hard Reset)..."
git fetch origin
git reset --hard origin/main

# 2. Reconstrucción de Infraestructura Docker
echo "🐳 Reiniciando contenedores y reconstruyendo imágenes..."
docker compose down
docker compose up --build -d

# 3. Limpieza de Residuos
echo "🧹 Limpiando imágenes huérfanas para liberar espacio..."
docker image prune -f

echo "✅ ACTUALIZACIÓN COMPLETADA CON ÉXITO."
echo "🌍 El portafolio está online en el puerto configurado en el .env"
