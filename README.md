# Storage-wrapper

The **Storage Wrapper** simplifies working with `localStorage` and `sessionStorage` by handling common tasks like stringifying and parsing data behind the scenes. It saves you time by eliminating the need to write repetitive code, making it easier to store, retrieve, and remove key-value pairs with just a few lines.

### Key Features:
- Automatically stringifies and parses data, so you don’t have to.
- Easily toggle between `localStorage` (default) and `sessionStorage`.
- Supports setting expiration (TTL) for `localStorage` items.
- Built-in availability checks for `localStorage`.
- Clear and consistent console messages for success or errors.

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
const storage = new StorageWrapper();
```

### Set Data

To set data in localStorage or sessionStorage, use the `setData` method:

```javascript
storage.setData('myKey', 'myValue', 60); // Key: 'myKey', Value: 'myValue', Time to live: 60 seconds
```

### Get Data

To retrieve data, use the `getData` method:

```javascript
const value = storage.getData('myKey');
console.log(value); // Outputs: 'myValue'
```

### Remove Data

To remove data, use the `removeData` method:

```javascript
storage.removeData('myKey');
```

### Toggle Storage Type

To toggle between localStorage and sessionStorage, use the `toggleStorage` method:

```javascript
storage.toggleStorage();
```

### Clear All Data

To clear all data from the current storage, use the `clear` method:

```javascript
storage.clear();
```

### Check Local Storage Availability

(This is checked automatically before setting data in localStorage)

To check if localStorage is available, use the `isLocalStorageAvailable` method:

```javascript
if (!storage.isLocalStorageAvailable()) {
    console.log('localStorage is not available.');
}
```

## License

This project is licensed under the MIT License.
