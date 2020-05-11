# highlightjs-ocl

![Node.js CI](https://github.com/nhomble/highlightjs-ocl/workflows/Node.js%20CI/badge.svg)


This project registers the [Object Constraint Language](https://www.omg.org/spec/OCL) for [highlight.js](https://github.com/highlightjs/highlight.js/)

## Usage

### unpkg
```html
<script type="text/javascript"
  src="https://unpkg.com/highlightjs-ocl@1.0.3/dist/ocl.min.js"></script>
```
which links to a [minified version](https://unpkg.com/highlightjs-ocl@1.0.3/dist/ocl.min.js) of ```ocl.js``` which depends on ```hljs``` being available.
### node
```javascript
import hljs from 'highlight.js';
import hljsocl from 'highlightjs-ocl'

hljs.registerLanguage('ocl', hljsocl);
hljs.initHighlightingOnLoad();
```

## Building
Go to [highlight.js](https://github.com/highlightjs/highlight.js) and update ```ocl.js``` directly into the library. Then run their build tool
```shell script
$  node ./tools/build.js ocl
```
