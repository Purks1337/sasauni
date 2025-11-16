# Figma Design Analysis - Сайт Сауны

## Структура макета (main-page)

### 1. Background Wrapper
- **Название слоя**: `background-wrapper (allways 100% to X and Y liker Hero block, always behind)`
- **Тип**: IMAGE-SVG
- **Размеры**: 1468x785
- **Позиционирование**: absolute, x: 0, y: 0
- **Фон**: #F9F3D4
- **Важно**: Всегда занимает 100% по X и Y, всегда за Hero блоком

### 2. Hero Section
- **Название слоя**: `Hero`
- **Тип**: FRAME
- **Layout**: column, centered, gap: 48px
- **Padding**: 256px 64px 232px

#### 2.1. Heading Container
- **Название слоя**: `heading-container`
- **Layout**: column, centered, gap: 10px

##### 2.1.1. Heading Wrapper
- **Название слоя**: `heading-wrapper`
- **Layout**: column, centered, gap: 4px
- **Дети**:
  - "Оздоровительный центр" (текст)
    - Font: Alegreya Sans, 300, 32px
    - Color: #626155
    - Line height: 1.2em
  - "1000 и 1 ночь" (текст)
    - Font: Literature Decor, 400, 64px
    - Color: #46463D
    - Line height: 1.2em

##### 2.1.2. Описание
- **Название слоя**: `Погрузитесь в атмосферу спокойствия и роскоши в банном комплексе «1000 и 1 ночь».`
- **Текст**: "Погрузитесь в атмосферу спокойствия и роскоши в банном комплексе «1000 и 1 ночь»."
- **Font**: Alegreya Sans, 400, 20px
- **Color**: #59584D
- **Width**: 408px
- **Line height**: 1.5em
- **Text align**: center

#### 2.2. Buttons Wrapper
- **Название слоя**: `buttons-wrapper`
- **Layout**: row, centered, gap: 10px

##### 2.2.1. Button Phone
- **Название слоя**: `button-phone`
- **Layout**: row, centered, gap: 8px
- **Padding**: 18px 24px
- **Background**: #323B12
- **Border radius**: 8px
- **Дети**:
  - `icon-phone` (IMAGE-SVG, 24x24, white)
  - "+7 908 908 67 55" (текст)
    - Font: Alegreya Sans, 500, 20px
    - Color: #D9D5A6
    - Line height: 1.2em

##### 2.2.2. Button Location
- **Название слоя**: `button-location`
- **Layout**: row, centered, gap: 8px
- **Padding**: 18px 24px
- **Background**: #E1B45D
- **Border radius**: 8px
- **Дети**:
  - `icon-location` (IMAGE-SVG, 24x24, white)
  - "Екатеринбург, ул. Готвальда, 12а" (текст)
    - Font: Alegreya Sans, 500, 20px
    - Color: #323B12
    - Line height: 1.2em

### 3. Halls Container
- **Название слоя**: `halls-container`
- **Layout**: column, stretch, gap: 8px
- **Padding**: 0px 64px
- **Border radius**: 12px
- **Height**: 553px

#### 3.1. Hall Wrapper (Row 1)
- **Название слоя**: `hall-wrapper`
- **Layout**: row, stretch, gap: 8px

##### 3.1.1. Hall Fin
- **Название слоя**: `hall-fin (overflow-hidden to round the cards)`
- **Layout**: column, justify-end, gap: 24px, padding: 24px
- **Background**: rgba(245, 240, 153, 0.5) + gradient + image
- **Border radius**: 8px
- **Важно**: overflow-hidden для скругления карточек
- **Слои (в порядке наложения снизу вверх)**:
  1. `hall-cover-fin (always 100% for X and Y to hall-fin)`
     - Type: RECTANGLE
     - Position: absolute, x: 0, y: 0
     - Size: 441x273 (100% размера родителя)
     - Image: hall-cover-fin.jpg (из папки hall-covers)
  2. `hall-filter-fin-gradient (always 100% for X and Y to hall-fin)`
     - Type: RECTANGLE
     - Position: absolute, x: 0, y: 0
     - Size: 441x273 (100%)
     - Gradient: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0) 50%)
  3. `hall-filter-fin-color (always 100% for X and Y to hall-fin)`
     - Type: RECTANGLE
     - Position: absolute, x: 0, y: 0
     - Size: 441x273 (100%)
     - Color: rgba(245, 240, 153, 0.5)
  4. `hall-heading-wrapper`
     - Layout: column, stretch
     - **Дети**:
       - "Финский зал" (текст)
         - Font: Alegreya Sans, 500, 36px
         - Color: #F7F3C4
         - Line height: 1.2em
       - "2500₽ / час" (текст)
         - Font: Alegreya Sans, 400, 24px
         - Color: #F7F3C4
         - Line height: 1.2em

##### 3.1.2. Hall Oasis
- **Название слоя**: `hall-oasis (overflow-hidden to round the cards)`
- **Структура аналогична hall-fin**:
  - `hall-cover-oasis` → hall-cover-oasis.jpg
  - `hall-filter-oasis-gradient`
  - `hall-filter-oasis-color`
  - `hall-heading-wrapper`:
    - "Зал «Оазис»"
    - "2500₽ / час"

##### 3.1.3. Hall Turkey
- **Название слоя**: `hall-turkey (overflow-hidden to round the cards)`
- **Структура аналогична hall-fin**:
  - `hall-cover-turkey` → hall-cover-turkey.jpg
  - `hall-filter-turkey-gradient`
  - `hall-filter-turkey-color`
  - `hall-heading-wrapper`:
    - "Турецкий зал"
    - "2500₽ / час"

#### 3.2. Hall Wrapper (Row 2)
- **Название слоя**: `hall-wrapper`
- **Layout**: row, stretch, gap: 8px

##### 3.2.1. Hall Apparts
- **Название слоя**: `hall-apparts (overflow-hidden to round the cards)`
- **Структура аналогична hall-fin**:
  - `hall-cover-apparts` → hall-cover-apparts.jpg
  - `hall-filter-apparts-gradient`
  - `hall-filter-apparts-color`
  - `hall-heading-wrapper`:
    - "Аппартаменты"
    - "2500₽ / час"
- **Размеры обложки**: 666x273 (шире, т.к. занимает 2 колонки)

##### 3.2.2. Hall New
- **Название слоя**: `hall-new (overflow-hidden to round the cards)`
- **Background**: gradient + #807D52
- **НЕТ обложки** (нет hall-cover-new)
- **Дети**:
  - `hall-heading-wrapper`:
    - "Новый зал"
    - "скоро открытие" (вместо цены)
      - Font: Alegreya Sans, 400, 24px
      - Color: #F7F3C4

### 4. Header Container
- **Название слоя**: `header-container`
- **Layout**: column, gap: 10px
- **Padding**: 24px 64px
- **Position**: absolute, x: 0, y: 0
- **Width**: 1468px

#### 4.1. Header
- **Название слоя**: `header`
- **Layout**: row, space-between, centered, gap: 42px
- **Padding**: 12px 24px
- **Background**: rgba(50, 59, 18, 0.7)
- **Border**: 1px solid #C7C4A3
- **Backdrop filter**: blur(10px)
- **Border radius**: 12px

##### 4.1.1. Logo
- **Название слоя**: `logo`
- **Size**: 75x44
- **Image**: logo (imageRef: dd0b13e3e771de147d6b7fd933c78cfba4fe4980)

##### 4.1.2. Hall Wrapper (навигация)
- **Название слоя**: `hall-wrapper`
- **Layout**: row, centered, gap: 48px
- **Дети** (текстовые ссылки):
  - "Финский зал"
  - "Зал «Оазис»"
  - "Турецкий зал"
  - "Аппартаменты"
  - "Новый зал"
- **Font**: Alegreya Sans, 400, 14px
- **Color**: #F8F3D7
- **Line height**: 1.2em

##### 4.1.3. Contact Container
- **Название слоя**: `contact-container`
- **Layout**: row, centered, gap: 48px

###### 4.1.3.1. Social Wrapper
- **Название слоя**: `social-wrapper`
- **Type**: IMAGE-SVG
- **Layout**: row, centered, gap: 24px
- **Социальные иконки**: Telegram, WhatsApp (предположительно)

###### 4.1.3.2. Button
- **Название слоя**: `button`
- **Layout**: row, centered, gap: 10px
- **Padding**: 12px 24px
- **Width**: 156px
- **Background**: #F8F3D7
- **Border radius**: 12px
- **Текст**: "Забронировать"
  - Font: Alegreya Sans, 500, 14px
  - Color: #323B12
  - Line height: 1.2em
  - Text case: UPPER
  - Letter spacing: 2%

---

## Важные замечания из комментариев

1. **Background wrapper**: Всегда 100% по X и Y как Hero блок, всегда за Hero
2. **Hall covers**: Всегда 100% для X и Y относительно `hall-fin` (и других залов)
3. **Hall filters**: Всегда 100% для X и Y относительно зала
4. **Overflow hidden**: На карточках залов для скругления
5. **Изображения из папки hall-covers**: 
   - hall-cover-fin.jpg
   - hall-cover-oasis.jpg
   - hall-cover-turkey.jpg
   - hall-cover-apparts.jpg
   - (hall-cover-new.jpg - отсутствует, т.к. для "Нового зала" нет обложки)

---

## План действий по переносу в код

### Этап 1: Анализ текущей структуры кода
- [ ] Изучить существующие компоненты:
  - `src/app/page.tsx` - главная страница
  - `src/widgets/room-display/ui/room-display.tsx` - отображение залов
  - `src/widgets/header/ui/header.tsx` - хедер
  - `src/shared/ui/` - общие компоненты
- [ ] Понять текущую архитектуру и структуру данных
- [ ] Проверить наличие всех необходимых изображений в `public/images/hall-covers/`

### Этап 2: Создание/обновление компонентов Hero секции
- [ ] Создать компонент `Hero` или обновить существующий
  - [ ] Реализовать `heading-container` с заголовками
  - [ ] Использовать правильные шрифты:
    - "Оздоровительный центр" → Alegreya Sans 300, 32px
    - "1000 и 1 ночь" → Literature Decor 400, 64px
  - [ ] Добавить описание с правильными стилями
  - [ ] Реализовать `buttons-wrapper`:
    - [ ] Кнопка телефона (#323B12 фон)
    - [ ] Кнопка локации (#E1B45D фон)
    - [ ] Иконки для кнопок

### Этап 3: Создание компонента карточки зала (Hall Card)
- [ ] Создать переиспользуемый компонент `HallCard`
  - [ ] Структура слоев (снизу вверх):
    1. `hall-cover-{name}` - изображение из `hall-covers/`, всегда 100% размера
    2. `hall-filter-{name}-gradient` - градиентный оверлей (absolute, 100%)
    3. `hall-filter-{name}-color` - цветной оверлей (absolute, 100%)
    4. `hall-heading-wrapper` - заголовок и цена (z-index выше)
  - [ ] Реализовать overflow-hidden и border-radius для скругления
  - [ ] Правильное позиционирование: column, justify-end
  - [ ] Поддержка разных размеров (обычная карточка vs широкая для apparts)

### Этап 4: Обновление секции Halls Container
- [ ] Обновить `halls-container`:
  - [ ] Правильный layout: column, gap: 8px
  - [ ] Padding: 0px 64px
  - [ ] Две строки `hall-wrapper`:
    - [ ] Первая строка: fin, oasis, turkey (3 карточки равной ширины)
    - [ ] Вторая строка: apparts (широкая), new (обычная)
  - [ ] Использовать компонент `HallCard` для каждого зала
  - [ ] Подключить правильные изображения из `hall-covers/`

### Этап 5: Обновление Header
- [ ] Обновить `header` компонент:
  - [ ] Фон: rgba(50, 59, 18, 0.7) с backdrop-filter: blur(10px)
  - [ ] Border: 1px solid #C7C4A3
  - [ ] Border radius: 12px
  - [ ] Структура: logo | navigation | contacts
  - [ ] Навигация по залам: правильные стили текста
  - [ ] Социальные иконки в `social-wrapper`
  - [ ] Кнопка "Забронировать"

### Этап 6: Background Wrapper
- [ ] Реализовать фоновый элемент:
  - [ ] Всегда 100% по X и Y
  - [ ] Позиционирование: absolute, всегда за Hero секцией
  - [ ] Подключить фоновое изображение или градиент
  - [ ] Цвет фона: #F9F3D4

### Этап 7: Стили и типографика
- [ ] Проверить подключение шрифтов:
  - [ ] Alegreya Sans (есть в `public/fonts/`)
  - [ ] Literature Decor (есть в `public/fonts/`)
- [ ] Применить правильные цвета из макета:
  - [ ] Основные цвета текста: #626155, #46463D, #59584D
  - [ ] Цвета кнопок: #323B12, #E1B45D
  - [ ] Цвета залов: #F7F3C4 для текста
  - [ ] Фоновые цвета: #F9F3D4, rgba(245, 240, 153, 0.5)
- [ ] Проверить line-height и letter-spacing согласно макету

### Этап 8: Адаптивность и проверка
- [ ] Проверить адаптивность на разных разрешениях
- [ ] Убедиться, что все изображения загружаются корректно
- [ ] Проверить правильность наложения слоев (градиенты и оверлеи)
- [ ] Проверить z-index для правильного отображения текста поверх изображений

### Этап 9: Оптимизация
- [ ] Оптимизировать изображения при необходимости
- [ ] Проверить производительность рендеринга
- [ ] Убедиться в правильности семантики HTML

---

## Структура данных для залов

Предлагаемая структура данных на основе макета:

```typescript
interface Hall {
  id: string;
  name: string;
  price: string;
  coverImage: string; // путь к изображению из hall-covers/
  width?: 'normal' | 'wide'; // для apparts используется 'wide'
  status?: 'active' | 'coming-soon'; // для "Новый зал"
}

const halls: Hall[] = [
  { id: 'fin', name: 'Финский зал', price: '2500₽ / час', coverImage: '/images/hall-covers/hall-cover-fin.jpg' },
  { id: 'oasis', name: 'Зал «Оазис»', price: '2500₽ / час', coverImage: '/images/hall-covers/hall-cover-oasis.jpg' },
  { id: 'turkey', name: 'Турецкий зал', price: '2500₽ / час', coverImage: '/images/hall-covers/hall-cover-turkey.jpg' },
  { id: 'apparts', name: 'Аппартаменты', price: '2500₽ / час', coverImage: '/images/hall-covers/hall-cover-apparts.jpg', width: 'wide' },
  { id: 'new', name: 'Новый зал', price: 'скоро открытие', coverImage: '', status: 'coming-soon' },
];
```

---

## Цветовая палитра

### Основные цвета
- **Фон страницы**: #F9F3D4
- **Текст заголовка 1**: #626155
- **Текст заголовка 2**: #46463D
- **Текст описания**: #59584D
- **Текст кнопки телефона**: #D9D5A6
- **Текст кнопки локации**: #323B12

### Кнопки
- **Кнопка телефона фон**: #323B12
- **Кнопка локации фон**: #E1B45D

### Залы
- **Текст на карточках залов**: #F7F3C4
- **Оверлей залов**: rgba(245, 240, 153, 0.5)
- **Градиент залов**: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0) 50%)

### Header
- **Фон header**: rgba(50, 59, 18, 0.7)
- **Border header**: #C7C4A3
- **Текст навигации**: #F8F3D7
- **Кнопка "Забронировать" фон**: #F8F3D7
- **Кнопка "Забронировать" текст**: #323B12

---

## Слои для карточек залов (порядок наложения)

Для каждой карточки зала (hall-fin, hall-oasis, hall-turkey, hall-apparts):
1. **Фоновое изображение** (`hall-cover-{name}`)
   - Position: absolute
   - Top: 0, Left: 0
   - Width: 100%, Height: 100%
   - Z-index: 0 (самый нижний)

2. **Градиентный фильтр** (`hall-filter-{name}-gradient`)
   - Position: absolute
   - Top: 0, Left: 0
   - Width: 100%, Height: 100%
   - Gradient: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0) 50%)
   - Z-index: 1

3. **Цветной фильтр** (`hall-filter-{name}-color`)
   - Position: absolute
   - Top: 0, Left: 0
   - Width: 100%, Height: 100%
   - Background: rgba(245, 240, 153, 0.5)
   - Z-index: 2

4. **Контент (текст)** (`hall-heading-wrapper`)
   - Position: relative (или absolute с bottom/padding)
   - Z-index: 3 (самый верхний)
   - Padding: 24px

**Важно**: Родительский контейнер должен иметь `overflow: hidden` и `border-radius: 8px` для скругления карточек.

