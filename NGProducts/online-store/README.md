# OnlineStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


[1]
    PS C:\repo\2021\NGProducts> ng new online-store --style scss --minimal
    PS C:\repo\2021\NGProducts> cd .\online-store\
    PS C:\repo\2021\NGProducts\online-store> npm install @ngrx/store @ngrx/core -S
    PS C:\repo\2021\NGProducts\online-store> npm install bootstrap -S

[2]
    PS C:\repo\2021\NGProducts\online-store> ng g c products --inline-style=true --skipTests=true
    PS C:\repo\2021\NGProducts\online-store> ng g c cart --inline-style=true --skipTests=true
    PS C:\repo\2021\NGProducts\online-store> ng g c product --inline-style=true --skipTests=true

[3] 
    PS C:\repo\2021\NGProducts\online-store> mkdir src/app/store
    PS C:\repo\2021\NGProducts\online-store> echo '//Author: Lin, Song' > src/app/store/reducer.ts
    PS C:\repo\2021\NGProducts\online-store> ng serve -o
