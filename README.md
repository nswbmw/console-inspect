## console-inspect

A shortcut to `console.log(util.inspect(...))`.

### Usage

```javascript
require('console-inspect')

console.inspect(obj, options)
inspect(obj, options)
```

equal to:

```javascript
console.log(util.inspect(obj, options))
```

options see [util.inspect](https://nodejs.org/api/util.html#util_util_inspect_object_options).

### License

MIT