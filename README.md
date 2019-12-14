# Dynamiczna strona internetowa

Autor: Bartłomiej Szlachta

Strona internetowa, różniąca się w zależności od urządzenia, na którym jest wyświetlana. Dostępne wersje to:
- przeglądarkowa
- tabletowa
- mobilna

Aplikacja decyduje o wyborze strony do wyświetlenia w zależności od podanego nagłówka HTTP.
 
 Serwer udostępniający pliki projektu został utworzony w [node.js](https://nodejs.org/en/) przy użyciu biblioteki [express.js](https://expressjs.com/).

## Przygotowanie środowiska

Aplikacja wymaga na komputerze zainstalowanego [node.js](https://nodejs.org/en/). Przed uruchomieniem, należy pobrać pliki bibliotek, wykonując w głównym katalogu polecenie:
```
npm i
```

## Uruchamianie

Aby uruchomić serwer, należy wykonać w katalogu `src` polecenie:
```
node app.js
```
To uruchomi lokalny api serwer deweloperski pod adresem `http://localhost:8000`. Teraz można otworzyć stronę, wpisując powyższy adres w pasku przeglądarki, dodając `/index.html`.

Aby otworzyć stronę na telefonie, należy uruchomić serwer na komputerze zgodnie z powyższymi instrukcjami oraz mieć podłączone urządzenie do tej samej sieci bezprzewodowej, do której podłączony jest komputer. Następnie należy wpisać w pasku przeglądarki na aplikacji mobilnej adres IP komputera oraz `:8000/index.html`.

## Dostępne endpointy

- zapytanie metodą `GET` na adres `/index.html` zwróci plik HTML, różny w zależności od urządzenia
- zapytanie metodą `GET` na adres `/index.css` zwróci plik CSS, różny w zależności od urządzenia
- zapytanie metodą `GET` na adres `/index.js` zwróci plik JS, różny w zależności od urządzenia

