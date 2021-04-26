# ida-project-frontend

## Test task for IDA Project

Основное задание
Необходимо реализовать страницу вывода списка товаров c возможностью добавления/удаления товаров в корзине.

#### Требования к стеку и исполнению:

1. При выполнении работы не разрешается использовать никакие UI библиотеки.
2. Верстка должна совпадать с макетами.
3. Работа должна быть выполнена с использованием фреймворка Nuxt.
4. Каждый компонент должен являться SFC.
5. В секции template не разрешается использовать HTML препроцессоры.
6. В секции script допускается использование только JavaScript.
7. Секция style должна быть написана с использованием css-modules.
8. Проект должен храниться у вас в личном репозитории GitHub/GitLab/Bitbucket в котором должно быть описание запуска проекта на локальной машине.
При разработке требуется следовать компонентному подходу, показать знания современных стандартов JavaScript ES6+, грамотно использовать все преимущества SCSS/SASS.


#### Требования к функциональности

1. Первая страница проекта представляет из себя список товаров первой категории из имеющихся и выбранной первой категорией в списке (данные должны быть получены и отрисованы на сервере);

2. Переключение между категориями, при этом список товаров обновляется в соответствии с выбранной категорией;

3. Добавление в корзину и удаление из нее любого из представленных товаров, посредством нажатия соответствующего триггера на карточке товара, при этом иконка меняет свое состояния в зависимости от наличия данного товара в корзине;

4. Открытие корзины в модальной панели по клику соответствующего триггера в шапке сайта;

5. Просмотр пустой корзины;

6. Просмотр корзины с товарами;

7. Удаление из корзины товаров из списка по клику соответствующего триггера на карточке товара в корзине;

8. Отправка заявки на исполнение заказа с валидацией и масками для соответствующих полей;

9. Отображение блока удачной отправки заявки;

10. Удаление товаров из корзины после удачной отправки заявки;

#### Макет

[Ссылка на макет](https://www.figma.com/file/nePGt9gt9kOhrPYZjhp4eO/IDA-Frontend-Test?node-id=1%3A1409)

#### Документация RestAPI

[Ссылка](https://frontend-test.idaproject.com/api/docs/)

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## author
Iakovleva Irina

e-mail: irinatrifonovna@gmail.com