/**
 * The main class for the module Storage Wrapper.
 * @version 1.0.0
 */

import { Validator } from "./validate.js"



export class StorageWrapper {

    // Default local storage
    constructor(storageType = 'local') {

        this.storage = storageType === 'local' ? localStorage : sessionStorage
        this.storageType = storageType
        this.validator = new Validator()
    }

    //Toggle between local and session storage
    toggleStorage() {

        if(this.storage === localStorage) {

            this.storage = sessionStorage
            this.storageType = 'session'

            console.log('Now using Sessionstorage')

        } else if(this.storage === sessionStorage) {

            this.storage = localStorage
            this.storageType = 'local'

            console.log('Now using Localstorage')
        }

    }


    //Set data to storage with expiration(optional)
    setData(key, value, ttl = null) {

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
    getData(key) {

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

    //remove all data from storage
    clear() {
        this.storage.clear()
        console.log(`All data has been cleared from ${this.storageType}storage`)
    }

    //Check if localstorage is available
    isLocalStorageAvailable() {

        // Check if localStorage is not available
        if (this.storage === null ){
            return false
        } 
        try {
            localStorage.setItem('test', 'test')
            localStorage.removeItem('test')
            return true

        } catch(e) {
            return false
        }
    }

    //Validation of key
    #validateKey(key) {

        if(!this.validator.isValidKey(key)) {
            console.error('Invalid key. Get data failed.')
            return null
        }

    }

    //Validation of value
    #validateValue(value) {

        if(!this.validator.isValidValue(value)) {
            throw new Error('Invalid value. Please enter a valid value.')
        }

    }

    //Validation of ttl
    #validateTTL(ttl) {

        const ttlNumber = ttl ? Number(ttl) : null
        if(ttlNumber !== null && (!this.validator.isTTLvalid(ttlNumber) || isNaN(ttlNumber) )) {
            throw new Error('Invalid expiration. Please enter a valid time.')
        }

        return ttlNumber

    }


}
