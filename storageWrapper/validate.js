/**
 * Validation class for storage wrapper. 
 * @version 1.0.1
 * @author Ester Hugosson 
 */

export class Validator {

    isValidKey(key) {

        return typeof key === 'string' && key.trim() !== ''
        
    }

    // value must be defiened and not null 
    isValidValue(value) {

        
        return value !== undefined && value !== null && value.trim() !== ''

    }

    // is expiration a number, greater than zero
    isValidExpiration(expiration) {

        return typeof expiration === 'number' && expiration > 0 &&  !isNaN(expiration)

    }

    validateAll(key, value, expiration) {

        if (!this.isValidKey(key)) {
            throw new Error('Invalid key: must be a non-empty string. ')
        }

        if (!this.isValidValue(value)) {
            throw new Error('Invalid value: cannot be undefined or null. ')
        }

        if (!this.isValidExpiration(expiration)) {
            throw new Error('Invalid expiration: must be a positive number. ')
        }

        return true

    }


}