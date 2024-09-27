class storageSetter {

    // Required key and value to set 
    constructor(key, value) {

        this.key = key
        this.value = value

    }

    saveDataToLocalStorage() {
        localStorage.setItem(this.key, this.value)
    }

}