#!/usr/bin/env node

import { execSync } from 'child_process';
import { rmSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

try {
  // Clean the dist directory
  console.log('🧹 Cleaning dist directory...');
  rmSync(path.join(__dirname, 'dist'), { recursive: true, force: true });

  // Build the frontend only for Netlify
  console.log('🏗️  Building frontend for Netlify...');
  execSync('vite build', { 
    stdio: 'inherit',
    cwd: __dirname 
  });

  console.log('✅ Netlify build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}