/**
 * The main class for the module Storage Wrapper.
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
        if(!this.validator.isValidKey(key)) {
            throw new Error('Invalid Key. Please enter a valid key.')
        }
        if(!this.validator.isValidValue(value)) {
            throw new Error('Invalid value. Please enter a valid value.')
        }
        if(!this.validator.isTTLvalid(ttl)) {
            throw new Error('Invalid expiration. Please enter a valid time.')
        }

        const data = {
            value: JSON.stringify(value),
            expiry: ttl ? new Date().getTime() + ttl * 1000 : null 
        }

        this.storage.setItem(key, JSON.stringify(data))
        console.log(`${key} was saved succesfully in ${this.storageType}storage`)

        
    }


    //get specifik data from storage
    getData(key) {


        if(!this.validator.isValidKey(key)) {
            console.error('Invalid key. Get data failed.')
            return null
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

        if(!this.validator.isValidKey(key)) {
            console.error('Invalid key. Data removal failed.')
            return
        }

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

}
