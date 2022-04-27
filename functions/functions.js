// Verbs
// The verb part of your function name is the most important part, responsible for describing what the function does.

// Accesses data immediately (i.e. shorthand getter of internal data).
function getFruitCount() {
    return this.fruits.length
}


//Sets a variable in a declarative way, with value A to value B.
function setFruits(nextFruits) {
    fruits = nextFruits
}

// Sets a variable back to its initial value or state.
const initialFruits = 5
function resetFruits() {
    fruits = initialFruits
}

// Request for some data, which takes some indeterminate time (i.e. async request).
function fetchFruits() {
    return fetch('https://api.dev/fruits', {})
}

// Removes something from somewhere NOT DELETE
function removeFruit(fruitName, fruits) {
    return fruits.filter((name) => name !== fruitName)
}

// Completely erases something from the realms of existence.
function deleteFruit(id) {
    return database.find({ id }).delete()
}

// Handles an action. Often used when naming a callback method.
function handleFruitClick() {
    console.log('Clicked a link!')
}

link.addEventListener('click', handleFruitClick)



// CONTEXT
// A function is often an action on something. It is important to state what is its operable domain, or at least an expected data type.

/* A pure function operating with primitives */
function filter(predicate, list) {
    return list.filter(predicate)
}

/* Function operating exactly on posts */
function getRecentPosts(posts) {
    return filter(posts, (post) => post.date === Date.now())
}
// Some language-specific assumptions may allow omitting the context. 
// For example, in JavaScript, it's common that filter operates on Array. 
// Adding explicit filterArray would be unnecessary.