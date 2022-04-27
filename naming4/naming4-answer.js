// Avoid context duplication
// A name should not duplicate the context in which it is defined. Always remove the context from a name if that doesn't decrease its readability.

class MenuItem {
    /* Method name duplicates the context (which is "MenuItem") */
    handleMenuItemClick = (event) => { }
}

class MenuItem {

    /* Reads nicely as `MenuItem.handleClick()` */
    handleClick = (event) => { }
}