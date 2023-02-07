# FSD Next js

## Getting Started

Install node_modules:

```bash
yarn install
# or
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Login FSD

```
# Создаем страницу Login

└── src/
    ├── pages/                  # Router next js
    |    ├── login/             # Импортируем page login
    |    |      └── index.ts    # login/
    |    └──  monitor/          # Импортируем page monitor
    ├── pagesLayer/             # Pages (специфика next js)
    |     ├── login/            # Сборка страницы login
    |     └── monitor/          # Сборка страницы monitor
    ├── shared/                 # Переиспользуемые компоненты
    |     ├── components/           # Компоненты
    |     |     ├── button/         # Кнопка
    |     |     |   ├── index.jsx
    |     |     |   └── styles.module.scss
    |     |     ├── input/          # Для ввода
    |     |     └── input-select/   # Выпадашка
    |     └── icons/            # Иконки
    └── ...    
```