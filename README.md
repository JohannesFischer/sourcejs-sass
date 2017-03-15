SASS support for SourceJS Specs
===============

[SourceJS](http://sourcejs.com) middleware to support SASS files linked in spec files

Works with SourceJS v.0.5.6+.

## Install

To install, run npm in `sourcejs/user` folder:

```bash
npm i sourcejs-sass -S
```

Then restart your SourceJS application, middleware will be loaded automatically.

## Usage

After installing middleware, linked `.scss` files will be parsed and replaced with style tag containing rendered CSS

```html
<link href="style.scss" rel="stylesheet">

...

My Sepcs
```

Will be replaced with:

```html
<style type="text/css">
 ... my parsed CSS
</style>

...

My Sepcs
```