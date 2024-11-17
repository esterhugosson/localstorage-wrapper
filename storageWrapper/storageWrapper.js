/**
 * The main class for the module Storage Wrapper.
 * @version 1.0.0
 */

import { Validator } from "./validate.js"


export class StorageWrapper {

    
    constructor(storageType = 'local') {

        // Default local storage
        this.storage = storageType === 'local' ? localStorage : sessionStorage

        this.storageType = storageType

        this.validator = new Validator()
    }




    switchStorageType() { 

        this.storage = this.storage === localStorage ? sessionStorage : localStorage
        this.storageType = this.storage === localStorage ? 'local' : 'session'

    }




    //Set data to storage with expiration(optional)
    storeData(key, value, expirationTimeSec = null) { 

        this.#checkStorageAvailibility()

        this.validator.validateKey(key)
        this.validator.validateValue(value)

        const data = this.#prepareData(value, expirationTimeSec)

        this.storage.setItem(key, JSON.stringify(data))
    }

    #prepareData(value, expirationTimeSec) {

        const numberExpirationTimeSec = this.#convertExpirationToNumber(expirationTimeSec)
        this.#validateExpiration(numberExpirationTimeSec)

        return this.#createDataObject(value, numberExpirationTimeSec)

    }

    #createDataObject(value, numberExpirationTimeSec) {
        const MS_IN_SECOND = 1000;

        return { 
            value: JSON.stringify(value),
            expiry: numberExpirationTimeSec ? new Date().getTime() + numberExpirationTimeSec * MS_IN_SECOND : null 
        }
    }

    #convertExpirationToNumber(expirationTimeSec) {

        const numberExpiration = expirationTimeSec ? Number(expirationTimeSec) : null

        return numberExpiration
    }

    #validateExpiration(numberExpiration) {
        if(numberExpiration != null) {
            this.validator.validateExpiration(numberExpiration) 
        }
    }




    retrieveData(key) {

        
        this.validator.validateKey(key)
        this.#checkStorageAvailibility()

        const dataParsed = this.#getStoredItem(key)

        if(this.#isExpired(dataParsed)) {
            this.#handleExpiredData(key)
            return null
        }

        return JSON.parse(dataParsed.value)
        
    }

    #getStoredItem(key) {
        const storedData = this.storage.getItem(key)
        if (!storedData) {
            throw new Error(`Data does not exist in ${this.storageType}`)
        } else {
        return JSON.parse(storedData)
        }
    }

    #isExpired(dataParsed) {
        return dataParsed.expiry && new Date().getTime() > dataParsed.expiry
    }

    #handleExpiredData(key) {
        this.removeData(key)
    }



    removeData(key) { 
        this.validator.validateKey(key)
        this.#checkStorageAvailibility()

        if(!this.#getStoredItem(key)) {
            throw new Error(`Removel faild: Data for ${key} does not exist.`)
        }

        this.storage.removeItem(key)
       

    }

    clearAllStorage() { 
        this.storage.clear()
    }

    #checkStorageAvailibility() {
        if(!this.#isStorageAccessible) {
            throw new Error('Storage is not available!')
        }
    }

    #isStorageAccessible() { 
        try {
            this.storage.setItem('test', 'test')
            this.storage.removeItem('test')
            return true
        } catch(e) {
            return false
        }
    }
}
