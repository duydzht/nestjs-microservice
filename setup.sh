#!/bin/bash

# Kiểm tra và tạo file .env nếu chưa có
if [ ! -f .env ]; then
  echo "Creating .env file from .env.example..."
  cp .env.example .env
else
  echo ".env file already exists. Skipping creation."
fi

# Build và khởi chạy toàn bộ các service với Docker Compose
echo "Building and starting services with Docker Compose..."
docker-compose up --build -d
