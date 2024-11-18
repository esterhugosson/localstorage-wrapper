# Storage-wrapper

The **Storage Wrapper** simplifies working with `localStorage` and `sessionStorage` by handling common tasks like stringifying and parsing data behind the scenes. It saves you time by eliminating the need to write repetitive code, making it easier to store, retrieve, and remove key-value pairs with just a few lines.

### Key Features:
- Automatically stringifies and parses data, so you don’t have to.
- Easily toggle between `localStorage` (default) and `sessionStorage`.
- Supports setting expiration for `localStorage` items.
- Built-in availability checks for storage in use
- Validating key, value and expiration input. 


## Installation 

For Node.js or Browserify usage:

```
npm i simple-storage-wrapper
```

## Example Usage

To use the **Storage Wrapper**, first import the module in your JavaScript file:

```javascript
import { StorageWrapper } from "./node_modules/simple-storage-wrapper/storageWrapper/storageWrapper.js";
```

Create an instance of StorageWrapper:

```javascript
const wrapper = new StorageWrapper();
```

### These are the 5 methods you can use:

To set data in localStorage or sessionStorage, use the `setData` method:

```javascript
wrapper.storeData('myKey', 'myValue', 60); // Key: 'myKey', Value: 'myValue', Expiration: 60 seconds

const value = wrapper.retrievdate('myKey');
console.log(value); // Outputs: 'myValue'

wrapper.removeData('myKey');


wrapper.switchStorageType(); // To toggle between localStorage(default) and sessionStorage

wrapper.clearAllStorage(); // To clear all data from the current storage
```


## License

This project is licensed under the MIT License.
