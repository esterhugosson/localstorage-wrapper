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

# Usage

To use the **Storage Wrapper**, first import the module in your JavaScript file:

import { StorageWrapper } from "./node_modules/simple-storage-wrapper/storageWrapper/storageWrapper.js"

Create an instance of storagewrapper:

const storage = new StorageWrapper()

# Examples

# Licens 
MIT

 