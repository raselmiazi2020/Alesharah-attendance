# Alesharah Smart Attendance & Payroll System

This workspace contains a starter scaffold for the Alesharah Smart Attendance & Payroll System.

## Structure

- `backend/` - Node.js + Express TypeScript backend with TypeORM MySQL models
- `frontend/` - React + TypeScript + Tailwind CSS frontend
- `docker/` - Docker deployment files and MySQL schema

## Backend Setup

1. Copy `.env.example` to `.env` inside `backend/`
2. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Create a MySQL database and update `.env`
4. Start backend in development:
   ```bash
   npm run dev
   ```

## Frontend Setup

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start frontend in development:
   ```bash
   npm run dev
   ```

## Docker Setup

1. From the workspace root, start the full stack:
   ```bash
   docker compose -f docker/docker-compose.yml up --build
   ```
2. Frontend: `http://localhost:3000`
3. Backend: `http://localhost:5000`

## Database Schema

- `docker/schema.sql` contains the full MySQL schema for users, roles, employees, attendance, payroll, leave, shifts, and audit logs.

## Production Deployment Guide

- Use Docker Compose or Kubernetes for production deployment.
- Serve frontend through Nginx and proxy `/api` requests to the backend.
- Store sensitive values in environment variables or a secret manager.
- Use MySQL on Ubuntu Server with persistent volumes.
- Expose only Nginx ports and restrict direct backend access.
