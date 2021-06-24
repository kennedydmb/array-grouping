const groupArrayElements = (array, divsions) => {

    let outputArray = [] // initialise an empty array that we will send back
    const maxInArray = Math.ceil(array.length / divsions) // Get the maximum number of elements that can be in each idivudual array
    let tempArray = [] // initialise a temporary array

    let elementsRemaining = array.length // Elements remaining intitally will be the length of the array

    // For each element in the ingested array
    array.forEach((element) => {
        elementsRemaining -= 1 // Reduce the elements remaining by 1

        // if the length of the temporary array is less than the maximum elements in an individual array
        if (tempArray.length < maxInArray) {
            tempArray = [...tempArray, element] // Add the element to the temp array
            // else the individual array is full and needs to be added to the output array
        } else {
            outputArray = [...outputArray, tempArray] // Take what is already in the output array and add the temp array
            tempArray = [element] // The temp array should now only contain this new element
        }

        // If there are no elements after this current one
        if (elementsRemaining === 0) {
            outputArray = [...outputArray, tempArray] // Take what is already in the output array and add the temp array
        }
    })

    return outputArray
}

const array = [1, 2, 3, 4, 5] // The array we want to divde
const divsionAmount = 3 // How many divsions there should be

// Some tests
console.log(`Input: [${array}]\tOutput:`, groupArrayElements([1, 2, 3, 4, 5], 1))
console.log(`Input: [${array}]\tOutput:`, groupArrayElements([1, 2, 3, 4, 5], 2))
console.log(`Input: [${array}]\tOutput:`, groupArrayElements([1, 2, 3, 4, 5], 3))