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
            console.log('Now using localstorage')
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

        const data = {
            value: JSON.stringify(value),
            expiry: ttl ? new Date().getTime() + ttl : null 
        }

        this.storage.setItem(key, JSON.stringify(data))
        console.log(`${key} was saved succesfully in ${this.storageType}storage`)

        
    }


    //get specifik data from storage
    getData(key) {


        if(!this.validator.isValidKey(key)) {
            throw new Error('Invalid key. Get data failed.')
        }



        const value = this.storage.getItem(key)

        //If the value does not exist, return null
        if(!value) {
            console.error('This data does not exist')
            return null
        }

        const valueParsed = JSON.parse(value)

        const now = new Date()

        if(now.getTime() > valueParsed.expiry) {
            this.removeData(this.key)
            console.log('This data is expired')
            return null
        }

        console.log(`Sucessfully retirived the data from key: ${key}, data: ${valueParsed.value}`)


            
        return valueParsed.value
        
    }

    // remove certain key and its value from storage
    removeData(key) {

        if(this.getData(key) === null ) {

            console.log('This data does not exist')

        }
        
        this.storage.removeItem(key)

    }

    //remove all data from storage
    clear() {
        this.storage.clear()
    }

}
