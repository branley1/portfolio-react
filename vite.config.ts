import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
import { createRequire } from 'module';

// https://vite.dev/config/
export default defineConfig(() => {
  // Optional plugins: only used if installed to avoid breaking dev
  const require = createRequire(import.meta.url);
  const optionalPlugin = <T = any>(id: string): T | undefined => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const mod = require(id);
      return (mod && mod.default) ? (mod.default as T) : (mod as T);
    } catch {
      return undefined;
    }
  };

  const Critical = optionalPlugin<any>('vite-plugin-critical');
  const purgecss = optionalPlugin<any>('vite-plugin-purgecss');

  const plugins = [
    react(),
    purgecss && purgecss({
      content: [
        './index.html',
        './src/**/*.{ts,tsx,scss}',
      ],
      safelist: [
        /^btn-gradient/, /^nav-/, /^navbar-/, /^hero-/, /^theme-/, /^playing$/,
        /^custom-navbar/, /^banner-img$/, /^profile-picture$/, /^dp$/,
      ],
    }),
    Critical && Critical({}),
  ].filter(Boolean) as any[];

  return {
    plugins,
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname, './src/styles'),
        '@components': path.resolve(__dirname, './src/components'),
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            router: ['react-router-dom'],
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '@styles/abstracts/index' as *;`
        }
      }
    }
  }
})
