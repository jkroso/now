
# now

  get the highest resolution timestamp available x-browser

## Getting Started

_With [component](//github.com/component/component), [packin](//github.com/jkroso/packin) or [npm](//github.com/isaacs/npm)_  

	$ {package mananger} install jkroso/now

then in your app:

```js
var now = require('now')
```

## API

- [now()](#now)

### now()

  will return a timestamp relative to some arbitrary time in the past in milliseconds (ms). In older browsers that time happens to be the unix Epoch so is a lot bigger than it would be in a modern browser which will give you a time relative to page load.

```js
now() // => 15.333000003010966
```

### example

  one possible use case is benchmarking

```js
var start = now()
while (now() - start < 10) continue;
console.log('bench took %dms', start - now())
// => bench took 10ms
``` 

## Running the example

```bash
$ npm install
$ make
```

Then open your browser to the `./example.html`.

_Note: these commands don't work on windows._ 
