# FSD Next js

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Login FSD

```
# Создаем страницу Login

└── src/
    ├── pages/                  # Router next js
    |    ├── login/             # Импортируем page login
    |    |      └── index.ts    # login/
    |    └──  lib/              # 
    ├── pagesLayer/             # Pages (специфика next js)
    |     ├── login/            # Сборка страницы login
    |     └── index.ts          # 
    └── ...    
```