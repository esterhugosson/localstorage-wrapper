export class StorageWrapper {

    // Default local storage
    constructor(storageType = 'local') {

        this.storage = storageType === 'local' ? localStorage : sessionStorage

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


    //Save data from storage
    setData(key, value, options = {}) {

        /* if(key !== '' && value !== '') {
        this.storage.setItem(key, JSON.stringify(value))
        } else {
            console.error(' Key or value is empty ')
        } */

        if(key === '') {
            console.error('Key is empty')
        } else if(value === '') {
            console.error('Value is empty')
        } else {

            const data = {
                value: JSON.stringify(value),
                expiry: Date.now() + options
            }

            this.storage.setItem(key, JSON.stringify(data))
            console.log(`${key} was saved succesfully in ${this.storageType}storage`)

        }

        
    }

    //get specifik data from storage
    getData(key) {

        let value = JSON.parse(this.storage.getItem(key))

        if(value === null) {
            console.log('This data does not exist')
        }
            
        return value
        
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
