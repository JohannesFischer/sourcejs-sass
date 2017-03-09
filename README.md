Pug support for SourceJS
===============

[SourceJS](http://sourcejs.com) middleware to support [Pug](https://pugjs.org/) markup language (`*.pug`) instead of native `*.src`.

Works with SourceJS v.0.5.6+.

## Install

To install, run npm in `sourcejs/user` folder:

```
npm i sourcejs-pug -S
```

Then restart your SourceJS application, middleware will be loaded automatically.

## Usage

After installing middleware, instead of `index.src` pages, you can `index.pug` files with Pug markup.

index.pug

```
h1 Pug - node template engine

#container.col
  p.
    Pug is a terse and simple
    templating language with a
    strong focus on performance
    and powerful features.
```