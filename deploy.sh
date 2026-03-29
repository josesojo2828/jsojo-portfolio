#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🚀 Iniciando despliegue de Obsidian Architect..."

# 1. Traer los últimos cambios
echo "📥 Haciendo git pull..."
git pull origin main || echo "⚠️  No se pudo hacer pull, continuando..."

# 2. Bajar servicios actuales (si existen)
echo "🛑 Deteniendo contenedores actuales..."
docker compose down

# 3. Construir y levantar
echo "🏗️  Construyendo y levantando nueva versión..."
docker compose up --build -d

echo "✅ ¡Despliegue completado con éxito! Tu portafolio está online en el puerto 4000."
