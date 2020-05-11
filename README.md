# highlightjs-ocl

![Node.js CI](https://github.com/nhomble/highlightjs-ocl/workflows/Node.js%20CI/badge.svg)


This project registers the [Object Constraint Language](https://www.omg.org/spec/OCL) for [highlight.js](https://github.com/highlightjs/highlight.js/)

## Usage
```javascript
import hljs from 'highlight.js';
import hljsocl from 'highlightjs-ocl'

hljs.registerLanguage('ocl', hljsocl);
hljs.initHighlightingOnLoad();
```
