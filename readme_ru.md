# webpack-typescript-react

Пустой Hello world SPA проект. Используется следующий стек технологий:  
**TypeScript** - собирается в ES5
**Stylus** - css препроцессор  
**React** **Reflux**
**Webpack** - сборщик  
**Karma** - Запускает юнит тесты  
**Jasmine** - Библиотека для юнит тестов  
**tsd** - Загружает d.ts файлы из DefinitelyTyped  

Только для node.js начиная 4 версии, т.к. везде используется ES6
### Установка
```
npm install
```

### Использование
Запуск http сервера и вотчера
```
npm start
```

Открыть в браузере
```
http://localhost:8080/  
http://localhost:8080/webpack-dev-server/ с обновлением на лету
```

Запускает юнит тесты через Карму
```
npm test
```

Собирает билд. (папка /build).
```
npm run build
```
