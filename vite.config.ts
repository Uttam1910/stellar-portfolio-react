import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // Expose process.env.REACT_APP_* to emulate CRA environment variable handling
  const processEnvDef: Record<string, string> = {};
  for (const key in env) {
    if (key.startsWith('REACT_APP_') || key.startsWith('NODE_ENV')) {
      processEnvDef[`process.env.${key}`] = JSON.stringify(env[key]);
    }
  }

  return {
    plugins: [react()],
    define: {
      ...processEnvDef,
      'process.env': JSON.stringify(env),
    },
    build: {
      outDir: 'build',
      emptyOutDir: true,
      sourcemap: false,
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});
