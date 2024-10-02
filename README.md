# Storage Wrapper

Simplifies the interaction with localStorage and sessionStorage, making it easier for users to store, retrieve, and delete key-value pairs without having to write repetitive code. 

With this wrapper, you can set, get, and remove items. You can also switch between using localStorage (default) and sessionStorage. 

It also supports:
- Expiration possibility for localStorage items
- Console messages for success and/or errors
- Check availability for localStorage

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
