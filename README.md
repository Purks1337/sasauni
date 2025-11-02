# 1000 и 1 ночь - Банный комплекс

Сайт банного комплекса "1000 и 1 ночь" в Екатеринбурге.

## Технологии

- **Next.js 15** - React framework с App Router
- **React 19** - UI библиотека
- **TypeScript** - Типизация
- **Tailwind CSS v4** - Стилизация
- **Feature-Sliced Design** - Архитектура проекта

## Структура проекта

Проект организован по методологии Feature-Sliced Design:

```
src/
├── app/                    # Next.js страницы и layout
├── widgets/                # Крупные составные блоки (Header, RoomDisplay)
├── features/               # Бизнес-логика (RoomSlideshow, ViewRoom)
├── entities/               # Бизнес-сущности (Room, Feature)
└── shared/                 # Переиспользуемый код
    ├── ui/                 # UI компоненты
    ├── lib/                # Утилиты
    └── config/             # Конфигурация
```

## Разработка

```bash
npm run dev      # Запуск dev сервера
npm run build    # Сборка для продакшна
npm run start    # Запуск продакшн сервера
npm run lint     # Проверка кода
```

## Редактирование контента

- **Комнаты**: `src/entities/room/api/roomData.ts`
- **Особенности залов**: `src/entities/feature/api/featureData.ts`
- **Конфигурация UI**: `src/shared/config/ui.ts`
