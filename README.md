# youtube-angular-lambda

This is a test project to demonstrate using Youtube API with Angular 7-lambda. It lists set of videos by default and search option to get preferred videos on yotube.

## Get started

### Clone the repo

```shell
git clone https://github.com/shilpaHS/youtube-angular.git
cd youtube-angular
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

Shut it down manually with `Ctrl-C`.

#### npm scripts

These are the most useful commands defined in `package.json`:

* `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
* `npm run build` - runs the TypeScript compiler and asset copier once.
* `npm run build:watch` - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into `dist/`.
* `npm run lint` - runs `tslint` on the project files.

These are the test-related scripts:

* `npm test` - builds the application and runs Intern tests (both unit and functional) one time.
