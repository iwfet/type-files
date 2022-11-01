# type-files

> Detect the file type of a base64
The file type is detected by checking the [magic number] of the base64.

This package is for detecting bas64 based file formats, not binary based formats.


## Install

```sh
npm install type-files
```

## Usage

#### Node.js

Determine file type from a file:

```js
import {detectMimeType} from 'type-files';
console.log(detectMimeType('iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB'));
//=> {ext: 'png', mime: 'image/png'}
```