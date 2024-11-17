/**
 * Validation class for storage wrapper. 
 * @version 1.0.1
 * @author Ester Hugosson 
 */

export class Validator {

    validateKey(key) {
        if (!this.#isValidKey(key)) {
            throw new Error('Invalid key: must be a non-empty string. ')
        }
        return true
    }

    #isValidKey(key) {
        return typeof key === 'string' && key.trim() !== ''
    }



    validateValue(value) {
        if (!this.#isValidValue(value)) {
            throw new Error('Invalid value: cannot be undefined or null. ')
        }
        return true
    }

    #isValidValue(value) {
        return value !== undefined && value !== null && value !== ''
    }



    validateExpiration(expiration) {
        if (!this.#isValidExpiration(expiration)) {
            throw new Error('Invalid expiration: must be a positive number. ')
        }
        return true     
    }

    #isValidExpiration(expiration) {
        return typeof expiration === 'number' && expiration > 0
    }

}