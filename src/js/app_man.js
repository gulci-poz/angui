/*
npm install -g bower

bower install angular

musimy mieć zainstalowany git
bower instaluje w bieżącej ścieżce w folderze bower_components
jeśli chcemy instalować pakiety gdzie indziej, musimy to wyszczególnić w pliku .bowerrc
{
    "directory": "src/bower_components"
}
dodaję bower_components w do .gitignore

bower init

bower tworzy konfigurację dla bowera w pliku bower.json (jest pytanie o dodanie do zależności ściągniętych pakietów)

bower install

bower instaluje zależności z listy

bower install --save angular-mocks
*/

// mamy strukturę folderów oraz test runner script zainspirowane angular-seed

// Karma - test runner
// Jasmine - JS testing lib, z jej pomocą będziemy pisali testy; można korzystać z innego frameworka
// angular-mocks - mocking dla testów, wstrzykiwanie i mocking serwisów angulara w testach jednostkowych
// test launchery dla przeglądarek

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

// ** uwzględnia path separator /
// dodatkowo dla skryptu test.sh: chmod +x scripts/test.sh

// integration/end-to-end tests (functional tests), Protractor
