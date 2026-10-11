## Development

Dev server use background mode:
```
astro dev --background
```

Manage background server: `astro dev stop`, `astro dev status`, `astro dev logs`.

Test environment available but not configured. Vitest installed as dev dependency. No test files exist.

## Project Structure

Astro app with React integration, Tailwind CSS 4, TypeScript. Internationalization via locales in `src/locales/`. Neobrutalism design tokens defined in tailwind.config.mjs. Data files in `src/data/`.

## Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview built site
- `npm run astro` - Run Astro CLI commands

## Gotchas

Tailwind CSS 4 uses `@tailwindcss/vite` plugin, not PostCSS 8 config. Dark mode: class-based. Node.js >=22.12.0 required.

## Response
- Setiap jawaban berikan emoticon, saya suka emoticon yang ceria dan membara
- Setiap jawaban harus detail tetapi to the point dan tidak bertele-tele