// Prefix enhances the meaning of a variable. It is rarely used in function names.


// IS
// Describes a characteristic or state of the current context (usually boolean).
const color = 'blue'
const isBlue = color === 'blue' // characteristic
const isPresent = true // state

if (isBlue && isPresent) {
    console.log('Blue is present!')
}


// HAS 
// Describes whether the current context possesses a certain value or state (usually boolean).

/* Bad */
const isProductsExist = productsCount > 0
const areProductsPresent = productsCount > 0

/* Good */
const hasProducts = productsCount > 0


// SHOULD
// Reflects a positive conditional statement (usually boolean) coupled with a certain action.
function shouldUpdateUrl(url, expectedUrl) {
    return url !== expectedUrl
}

// MIN/ MAX
// Represents a minimum or maximum value. Used when describing boundaries or limits.
function renderPosts(posts, minPosts, maxPosts) {
    return posts.slice(0, randomBetween(minPosts, maxPosts))
}

// PREV/ NEXT
// Indicate the previous or the next state of a variable in the current context. Used when describing state transitions
function fetchPosts() {
    const prevPosts = this.state.posts

    const fetchedPosts = fetch('...')
    const nextPosts = concat(prevPosts, fetchedPosts)

    this.setState({ posts: nextPosts })
}