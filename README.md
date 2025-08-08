# Tooltips
A tooltip rendering system for KubeJS on Minecraft 1.20.1

## Installing

Drop the `client_scripts` folder into your `/kubejs` folder.

## Using

A new `Tooltips` object should become available to all your other scripts in your `client_scripts` folder.

You can grab the tooltip builder from it like this:
```js
const tooltip = Tooltips.getBuilder(event);
```
And then use the builder to make your summary tooltips:
```js
tooltip.addSummary('#forge:tools/knives', [
    'Can harvest *Straw from grass*, and garantees *secondary drops* from animals. Sometimes makes monsters drop their head when killed.'
]);
```
