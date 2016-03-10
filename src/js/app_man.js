// robimy sami cały scaffolding, na razie bez użycia yeoman

/*
npm install -g bower

bower install --save angular

musimy mieć zainstalowany git
bower instaluje w bieżącej ścieżce w folderze bower_components
jeśli chcemy instalować pakiety gdzie indziej, musimy to wyszczególnić w pliku .bowerrc
{
    "directory": "src/bower_components"
}
dodaję bower_components do .gitignore

bower init

bower tworzy konfigurację dla bowera w pliku bower.json (jest pytanie o dodanie do zależności ściągniętych pakietów)

bower install

bower instaluje zależności z listy

bower install --save angular-mocks
*/

// mamy strukturę folderów oraz test runner script zainspirowane angular-seed

// Karma - test runner, od angular team
// Jasmine - JS testing lib, z jej pomocą będziemy pisali testy; można korzystać z innego frameworka
// angular-mocks - mocking dla testów, wstrzykiwanie i mocking serwisów angulara w testach jednostkowych
// test launchery dla przeglądarek
// protractor - integration/end-to-end tests (functional tests), od angular team; to też jest test runner, który korzysta z jasmine

// tworzę package.json na potrzeby zarządzania modułami npm
// npm init

/*
npm install karma --save
npm install jasmine-core --save
npm install karma-jasmine --save
npm install karma-chrome-launcher --save
npm install karma-firefox-launcher --save
*/

// lepiej mieć wszędzie dostępną komendę karma
// npm install -g karma-cli

// uruchomienie testów jednostkowych scripts/test.bat

// ** uwzględnia path separator /
// dodatkowo dla skryptu test.sh: chmod +x scripts/test.sh

// warto najpierw zainstalować pythona 2
// jest problem z msbuild z .net 4, warto zainstalować vs 2015 community
// trzeba też doinstalować narzędzia C++ (wybranie projektu C++)
// npm install -g protractor

// jako zależność zainstaluje się webdriver-manager, robimy update
// webdriver-manager update

// uruchamiamy serwer Selenium (musimy mieć Java runtime), który kontroluje przeglądarki i wykonuje na nich testy
// webdriver-manager start

// konieczny jest też serwer http, który będzie serwował nasz projekt
// npm install -g http-server

// z poziomu root projektu
// http-server -a localhost -p 8000

// uruchomienie testu protractor
// protractor conf/protractor.conf.js
// selenium źle działa z nowymi wersjami firefoksa (na pewno 44 i 45)

// npm install -g grunt-cli

// w package.json zamieniamy dependencies na devDependencies, dodajemy:
// npm install --save-dev grunt
// npm install --save-dev grunt-contrib-concat
// npm install --save-dev grunt-contrib-copy
// npm install --save-dev grunt-targethtml
// npm install --save-dev grunt-karma

// npm install --save-dev grunt-protractor-runner

// po przygotowaniu pliku Gruntfile.js
// (musimy mieć uruchomione webdriver-manager oraz http-server; można to również skonfigurować w grunt)
// grunt dist
