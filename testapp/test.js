import { StorageWrapper  } from "../storageWrapper/storageWrapper.js"

const wrapper = new StorageWrapper()
const resultdiv = document.getElementById('result')
const storageDiv = document.getElementById('storageType')

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
