import { StorageWrapper  } from "../storageWrapper/storageWrapper.js"

const wrapper = new StorageWrapper()
const resultdiv = document.getElementById('result')
const storageDiv = document.getElementById('storageType')

storageDiv.innerHTML = 'Storage type now being used: local'

//form elements
const keyInput = document.getElementById('key')
const valueInput = document.getElementById('value')
const ttlInput  = document.getElementById('ttl')

//buttons 
const setButton = document.getElementById('setSubmitButton')
const getButton = document.getElementById('getSubmitButton')
const deleteButton = document.getElementById('deleteSubmitButton')
const toggleButton = document.getElementById('switchSubmitButton')
const clearButton = document.getElementById('clearSubmitButton')
const availableButton = document.getElementById('avaialbleSubmitButton')

// Set data
setButton.addEventListener('click', () => {
    const key = keyInput.value
    const value = valueInput.value
    const ttl = ttlInput.value // time to live in seconds

    wrapper.setData(key, value, ttl)
    
    resultdiv.innerHTML = `Data for key "${key}" was successfully set.`

})

//Get data
getButton.addEventListener('click', () => {

    const key = keyInput.value

    const data = wrapper.getData(key)
    resultdiv.innerHTML = data ? `Data for key "${key}": ${data}` : `No data found for key "${key}".`
    
})

//Remove data
deleteButton.addEventListener('click', () => {

    const key = keyInput.value

    wrapper.removeData(key)
    resultdiv.innerHTML = `Data for key "${key}" has been removed.`
    
})

//Toggle storage 
toggleButton.addEventListener('click', () => {

    wrapper.toggleStorage()
    storageDiv.innerHTML = `Storage type now being used: ${wrapper.storageType}`

    
})

//Clear storage
clearButton.addEventListener('click', () => {

    wrapper.clear()
    resultdiv.innerHTML = 'All data has been cleared from storage.'
    
}) 

//Availibility

availableButton.addEventListener('click', () => {

    if(wrapper.isLocalStorageAvailable()) {

        resultdiv.innerHTML = 'Localstorage is availble.'

    } else {

        resultdiv.innerHTML = 'Localstorage is not availble.'

    }
})



