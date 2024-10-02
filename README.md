# Storage-wrapper
Simplifie the interaction with localstorage and sessionstorage, making it easier for users to store, retrieve and delete key-value pairs without having to write repetetive code. 
You can with this wrapper, set, get and remove items. You can also switch between using localstorage(default) and sessionstorage. 
It also supports:
- Expiration possibility for localstorage items
- Console messages for success and or errors
- Check availibility for localStorage


# Installation 

For Node.js or Browserify usage:

`npm i simple-storage-wrapper`

# Example Usage

To use the **Storage Wrapper**, first import the module in your JavaScript file:

`import { StorageWrapper } from "./node_modules/simple-storage-wrapper/storageWrapper/storageWrapper.js"`

Create an instance of storagewrapper:

`const storage = new StorageWrapper()`

Set data:
To set data in localStorage or sessionStorage, use the setData method:
`storage.setData('myKey', 'myValue', 60); // Key: 'myKey', Value: 'myValue', Time to live: 60 seconds`

Get data:
To retrieve data, use the getData method:
`const value = storage.getData('myKey');console.log(value); // Outputs: 'myValue'
`

Remove data:
To remove data, use the removeData method:
`storage.removeData('myKey');`

Toggle Storage Type
To toggle between localStorage and sessionStorage, use the toggleStorage method:
`storage.toggleStorage() `

Clear All Data
To clear all data from the current storage, use the clear method:
`storage.clear() `

Check Local Storage Availability (This is checked automaticlly before setting data in localstorage)
To check if localStorage is available, use the isLocalStorageAvailable method:
`if (!storage.isLocalStorageAvailable()) {
    console.log('localStorage is not available.');
}
`

# Licens 
MIT

 