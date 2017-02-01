# Angular 2 AOT (Ahead Of Time) compilation with the Angular CLI Webpack plugin
[![Dependency Status](https://david-dm.org/blacksonic/angular2-aot-cli-webpack-plugin.svg)](https://david-dm.org/blacksonic/angular2-aot-cli-webpack-plugin)
[![devDependency Status](https://david-dm.org/blacksonic/angular2-aot-cli-webpack-plugin/dev-status.svg)](https://david-dm.org/blacksonic/angular2-aot-cli-webpack-plugin?type=dev)

This repository shows how to use the Angular CLI Webpack plugin (```@ngtools/webpack```) to achieve AOT offline compilation.

> If you prefer the command line tool (```ngc```) provided by Angular, 
it can be found in a [separate repository](https://github.com/blacksonic/angular2-aot-webpack).

The application consists of 
a module (```src/app/modules/main.module.ts```)
and a basic component (```src/app/components/hello-world.component.ts```) 
with template (```src/app/components/hello-world.template.pug```) 
and component specific style (```src/app/components/hello-world.style.sass```).

When the application starts (```npm start```) 
it generates the compiled files in memory 
and replaces the bootstrap logic to use the generated ```NgFactory``` files.

The application is bundled with Webpack from the main file and is available on ```http://localhost:9000```.

### Advantages

- Custom file types available for templates and styles through Webpack loaders (sass, pug,...)
- No separate process for compilation
- Watch mode for AOT compiled files
- No need to maintain AOT version of bootstrap file
- No output to disk for separate ```*.ngfactory.ts``` files during compilation

### Disadvantages

- Need to wait for new versions after Angular release to Angular CLI repository catch up
- Not good for AOT compatible package publishing, because it doesn't output separate compiled files

### Known issues

- [AOT related issues](https://github.com/angular/angular/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20aot)
- [AOT Webpack plugin related issues](https://github.com/angular/angular-cli/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20aot)

### Further reading

- [Ahead-of-Time Compilation - official](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)
- [Multiple solutions for Angular Ahead of Time (AOT) Compilation](https://blog.craftlab.hu/multiple-solutions-for-angular-ahead-of-time-aot-compilation-c474d9a0d508)
- [Ahead-of-Time Compilation in Angular 2](http://blog.mgechev.com/2016/08/14/ahead-of-time-compilation-angular-offline-precompilation/)
- [Building an Angular 2 Application for Production](http://blog.mgechev.com/2016/06/26/tree-shaking-angular2-production-build-rollup-javascript/)
- [Demystifying Ahead-Of-Time Compilation In Angular 2](http://slides.com/wassimchegham/demystifying-ahead-of-time-compilation-in-angular-2-aot-jit)

### Starters with AOT compilation available

- [Angular CLI](https://github.com/angular/angular-cli)
- [Angular 2 Seed](https://github.com/mgechev/angular-seed)
- [Angular 2 Universal Starter](https://github.com/angular/universal-starter)
