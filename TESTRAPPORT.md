# Storage Wrapper Module - Test Report

## Test Environment
- **Browser**: Chrome (version 129.0.6668.60)
- **Operating System**: Mac
- **Module Version**: 1.0.0

## Manual Test Cases

### Test Case 1: Set Data in Local Storage
- **Test Steps**:
  1. Open the test application.
  2. Input `Key: "testKey"` and `Value: "testValue"`.
  3. Click on the "Set" button.
- **Expected Result**: `testKey` should be saved successfully in localStorage.
- **Actual Result**: The testKey is saved in localstorage, as expected result. 
- **Outcome**: ✅ 

### Test Case 2: Get Data from Local Storage
- **Test Steps**:
  1. Click on "Get Data" with `Key: "testKey"`.
  2. Check if the correct value is retrieved.
- **Expected Result**: `testValue` should be returned and displayed.
- **Actual Result**: Testvalue is retrieved.
- **Outcome**: ✅

### Test Case 3: Set Data with Expiration (expiration)
- **Test Steps**:
  1. Set `Key: "testTtl"`, `Value: "testValueTtl"`, and `TTL: 5` seconds.
  2. Wait 6 seconds.
  3. Attempt to get the value for `testKey`.
- **Expected Result**: Data should be expired and automatically removed.
- **Actual Result**: StorageWrapper throws error, invalid time.
- **Outcome**: ❌

### Test Case 3.1: Set Data with Expiration (TTL)
- **Test Steps**:
  1. Set `Key: "testTtl"`, `Value: "testValueTtl"`, and `TTL: 5` seconds.
  2. Wait 6 seconds.
  3. Attempt to get the value for `testKey`.
- **Expected Result**: Data should be expired and automatically removed.
- **Actual Result**: Data is expired and removed automaticlly
- **Outcome**: ✅

### Test Case 4: Toggle between Local and Session Storage
- **Test Steps**:
  1. Store a value in localStorage.
  2. Toggle to sessionStorage and store a different value.
  3. Retrieve data after toggling from both storage.
- **Expected Result**: Correct values should be retrieved depending on the storage type.
- **Actual Result**: Both value is stored and retrieved correctly. 
- **Outcome**: ✅

### Test Case 5: Remove Data from local storage
- **Test Steps**:
  1. Set `Key: "removeKey"`, `Value: "testValue"`.
  2. Click on the "Remove Data" button.
  3. Try to get the value for `removeKey`.
- **Expected Result**: Data should be removed successfully, with a confirmation message.
- **Actual Result**: Data is removed with sucess message. 
- **Outcome**: ✅

### Test Case 6: Set data in session storage
- **Test Steps**:
  1. Set `Key: "testKey"`, `Value: "testValue"`.
  2. Click on the "Set data" button.
  3. Try to get the value for `testKey`.
- **Expected Result**: `testKey` should be saved successfully in sessionstorage, with a success message displayed.
- **Actual Result**: As expected, testkey is stored in sessionstorage. 
- **Outcome**: ✅

### Test Case 7: Get Data from session Storage
- **Test Steps**:
  1. Click on "Get Data" with `Key: "testKey"`.
  2. Check if the correct value is retrieved.
- **Expected Result**: `testValue` should be returned and displayed.
- **Actual Result**: Testvalue is retrieved and sucessmessages is shown. 
- **Outcome**: ✅

### Test Case 8: Set pair without key
- **Test Steps**:
  1. Set `Key: " "`, `Value: "testValue"`.
  2. Check if it value is stored. 
- **Expected Result**: ` An error should be thrown, and no data should be stored.
- **Actual Result**: An error is thrown, message about invalid key and no data is stored.
- **Outcome**: ✅

### Test Case 9: Set pair without value
- **Test Steps**:
  1. Set `Key: "testKey"`, `Value: " "`.
  2. Check if the value is stored.
- **Expected Result**: An error should be thrown, and no data should be stored.
- **Actual Result**: Data is stored an no error is thrown. 
- **Outcome**: ❌

### Test Case 9.1: Set pair without value
- **Test Steps**:
  1. Set `Key: "testKey"`, `Value: " "`.
  2. Check if the value is stored.
- **Expected Result**: An error should be thrown, and no data should be stored.
- **Actual Result**: An error is thrown, no data i shown and error message shown. 
- **Outcome**: ✅

### Test Case 10: Set pair with expiration and retrieve before expiry 
- **Test Steps**:
  1. Set `Key: "testKey"`, `Value: "testValue"`, `TTL: 10` (10 seconds).
  2. Retrieve the value before 10 seconds.
- **Expected Result**: Data should still be available before expiry.
- **Actual Result**: Data is retrieved and success message is shown.
- **Outcome**: ✅

### Test case 11: Clear all storage
-**Test Steps**:
 1. Set keys with values in localstorage.
 2. Press button `Clear all storage`
 3. Controll that all key-value pairs is gone from localstorage. 
-**Expected Result**: All data should be removed from localstorage and success message should be shown. 
-**Actual Result**: All data has been cleared from storage and message is shown.
-**Outcome**: ✅

### Test Case 12: Attempt to Set Data When LocalStorage is Unavailable
- **Test Steps**:
  1. Simulate localStorage unavailability by setting `localStorage` to `null`. In webbconsole: Object.defineProperty(window, "localStorage", {value: null})
  2. Attempt to set a value with `Key: "testKey"`, `Value: "testValue"`.
- **Expected Result**: An error should be thrown indicating that localStorage is not available, and no data should be stored.
- **Actual Result**: An error is thrown and no data is stored. 
- **Outcome**: ✅

### Test Case 13: Attempt to Get Data When LocalStorage is Unavailable
- **Test Steps**:
  1. Simulate localStorage unavailability by setting `localStorage` to `null`.
  2. Attempt to get data with `Key: "testKey"`.
- **Expected Result**: An error should be logged indicating that localStorage is not available, and no data should be retrieved.
- **Actual Result**: An error is shown that localstorage is now available. 
- **Outcome**: ✅

### Test Case 14: Attempt to Remove Data When LocalStorage is Unavailable
- **Test Steps**:
  1. Simulate localStorage unavailability by setting `localStorage` to `null`.
  2. Attempt to remove data with `Key: "testKey"`.
- **Expected Result**: An error should be thrown indicating that localStorage is not available, and no data should be removed.
- **Actual Result**: Error thrown, localStorage is not available.
- **Outcome**: ✅

### Conclusion of first try
- Summary of test results: 
  - Passed: 8/11 
  - Failed: 3/11
- Potential issues found and improvements: Problem with ttl and setting data with no value.

### Conclusion of second try
- Summary of test results: 
  - Passed: 14/14
  - Failed: 0/14

### Conclusion of third try
- Summary of test results: 
  - Passed: 14/14
  - Failed: 0/14
