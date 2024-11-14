/**
 * The main class for the module Storage Wrapper.
 * @version 1.0.0
 */

import { Validator } from "./validate.js"
import { Logger } from "./logger.js"



export class StorageWrapper {

    
    constructor(storageType = 'local') {

        // Default local storage
        this.storage = storageType === 'local' ? localStorage : sessionStorage

        this.storageType = storageType

        this.validator = new Validator()
        this.logger = new Logger()
    }

    //Toggle between local and session storage
    switchStorageType() { //switchStorageType

        if(this.storage === localStorage) {

            this.storage = sessionStorage
            this.storageType = 'session'

            this.logger.logInfo('Now using Sessionstorage')

        } else if(this.storage === sessionStorage) {

            this.storage = localStorage
            this.storageType = 'local'

            this.logger.logInfo('Now using Localstorage')
        }

    }


    //Set data to storage with expiration(optional)
    storeData(key, value, ttl = null) { //storeData

        //Validate key and value
        this.#validateKey(key)
        this.#validateValue(value)
        

        // Check availability
        if (!this.isLocalStorageAvailable()) {  
            throw new Error('Localstorage is not available!')
        }


        //Converting ttl to a number before validation.
        const ttlNumber = this.#validateTTL(ttl)

        const data = {
            value: JSON.stringify(value),
            expiry: ttlNumber ? new Date().getTime() + ttlNumber * 1000 : null 
        }

        this.storage.setItem(key, JSON.stringify(data))
        console.log(`${key} was saved succesfully in ${this.storageType}storage`)

        
    }


    //get specifik data from storage
    retrieveData(key) { //retrieveData

        // validate key
        this.#validateKey(key)

        // Check availability
        if (!this.isLocalStorageAvailable()) {  
            throw new Error('Localstorage is not available!')
        }

        const storedData = this.storage.getItem(key)

        //If the value does not exist for given key
        if(!storedData) {
            console.error(`Data does not exist in ${this.storageType} for given key: ${key}`)
            return null
        }

        const dataParsed = JSON.parse(storedData)


        //Expiration controll (if data has an expiration time)
        if(dataParsed.expiry && new Date().getTime() > dataParsed.expiry) {
            this.removeData(key)
            console.log(`Data for key ${key} is expired and been removed.`)
            return null
        }


        console.log(`Sucessfully retirived the data from key: ${key}`)
        return JSON.parse(dataParsed.value)
        
    }

    // remove certain key and its value from storage
    removeData(key) {

        // Check availability
        if (!this.isLocalStorageAvailable()) {  
            throw new Error('Localstorage is not available!')
        }

        //check key
        this.#validateKey(key)

        if(!this.storage.getItem(key)) {
            console.error(`Data for ${key} does not exist. Removal failed.`)
            return
        }
        

        this.storage.removeItem(key)
        console.log(` Data for key: ${key} has been sucessfully removed from ${this.storageType}storage`)

    }

    clearAllStorage() { 
        this.storage.clear()
        console.log(`All data has been cleared from ${this.storageType}storage`)
    }

    isStorageAccessible() { 
        try {

            this.storage.setItem('test', 'test')
            this.storage.removeItem('test')
            return true

        } catch(e) {
            return false
        }
    }


}
