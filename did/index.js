const draggables = document.querySelectorAll(".draggable")//this makes an array of all the elemenstw ith the draggabke cklass
const containers = document.querySelectorAll(".container")// this is the 
//now we need events for the draggabke abs the contaueners
// we tryna make a class of draggabing when we start a drag event
draggables.forEach(draggable => { // we going through each draggable 
    draggable.addEventListener("dragstart", () => { // adding an event listener for a start efent
        draggable.classList.add("dragging")//we add this draggig class for eacdg drag start evebnt 
    })

    draggable.addEventListener("dragend", () => {// for each drag end ebent we remove the class list of dragging 
        draggable.classList.remove("dragging")
    })//we make an event the when we drag end it remoev the dragging class
})

//event for the container

containers.forEach(container => { // we go through eavh container nd and an evebt fior drsgiver and the e prevent defaukt s the cursore dont dunct up 
    container.addEventListener("dragover", e => {
        e.preventDefault()
        const draggable = document.querySelector(".dragging")// so we get this because we are getting the oine that moves iin the container
        const afterElement = getDragAfterElement(container, e.clientY)//this nu,ebr is from a fnuncgtion we use to get position tyhe y ans the containeers is whayw we pittting
        console.log(afterElement)
        // this conditionnal we are seeing if the afterelement is equal to null and if if it its then we appens the draggabke elemenet to the container 
        // this if not then we put the container insertber=ofr draggabkes and the after ekeemnet
        if (afterElement == null) {
            container.appendChild(draggable)

        } else {
            container.insertBefore(container, afterElement)
        }

    })
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")]
    //we reduce through the elemest closrst and child cause chiukd givesd bbox and offset 
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect() // here we get the object that show the rectangle shape 
        const offset = y - box.top - box.offset // the offest is the mouse positiion minus to the top and offset
        if (offset < 0 && offset > closest.offset) {//if the offset is les thatn zero or below the elemenet and above the vlosest offset
            return { // if it this is the case then the offset changes and elements and teh chikd elemeny
                offset: offset,
                element: child
            }
        } else {
            return closest //return closeest if the ofset is positive of 
        }
    }, { offset: Number.negative_INFINITY }).element
}

