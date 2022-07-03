# MyNodeJsUnitTest&Logging

this repo is a project where I deepen the jest feature, also as my Jest cheat sheet, and logging feature in nodejs

## Dokumentasi Unit Test

-https://jestjs.io/docs/expect

jest and babel

- npx jest --help
- npx jest --testNamePattern "nama test" --> jalanin satu satu testnya

- npx jest test/sum.test.js (nama file test)

## Dokumentasi Logging

Nodejs punya fitur untuk logging dengan object console tapi kurang flexible dan minim fitur

- https://nodejs.org/api/console.html

Banyak Library untuk logging

- Winston, Bunyan, Pino, Loglevel, NPMLog

- https://www.npmjs.com/package/winston
- https://github.com/winstonjs/winston

winston level = menentukan pentingnya log contoh:

- error, warn, info, http, verbose, debug, silly

Daily Rotate File solusi file transport yang sangat berbahaya ketika app berjalan dalam jangka waktu lama, sehingga menyebabkan ukuran file semakin membesar

Daily Rotate File bisa otomatis menghpaus file lama yang sudah tidak dibutuhkan
