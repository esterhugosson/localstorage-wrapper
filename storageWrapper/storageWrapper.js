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
    setData(key, value, ttl) {

        if(key === '') {
            console.error('Key is empty')
        } else if(value === '') {
            console.error('Value is empty')
        } else {

            const now = new Date()

            const data = {
                value: JSON.stringify(value),
                expiry: now.getTime() + ttl
            }

            this.storage.setItem(key, JSON.stringify(data))
            console.log(`${key} was saved succesfully in ${this.storageType}storage`)

        }

        
    }

    //get specifik data from storage
    getData(key) {

        const value = this.storage.getItem(key)

        //If the value does not exist, return null
        if(!value) {
            console.error('This data does not exist')
            return null
        }

        const valueParsed = JSON.parse(value)

        const now = new Date()

        if(now.getTime() > valueParsed.expiry) {
            this.storage.removeData(key)
            return null
        }


            
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
