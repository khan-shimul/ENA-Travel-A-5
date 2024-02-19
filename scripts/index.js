// Append Child
function appendElement (id) {
    const element = searchElementById(id);
    const elementValue = element.innerText;
    const ticketDetailsContainer = searchElementById('ticket-details');
    // Create Element and Append
    const div = document.createElement('div');
    const h5_1 = document.createElement('h5');
    const h5_2 = document.createElement('h5');
    const h5_3 = document.createElement('h5');
    ticketDetailsContainer.appendChild(div);
    // Add Class List
    div.classList.add('flex');
    div.classList.add('justify-between');
    div.classList.add('items-center');
    div.classList.add('text-gray-500');
    div.classList.add('mt-3');
    // Set the Value
    h5_1.innerText = elementValue;
    h5_2.innerText = 'Economy';
    h5_3.innerText = 550;
    // Append them to the div
    div.appendChild(h5_1)
    div.appendChild(h5_2)
    div.appendChild(h5_3)
    
}



// Get Element By Id
function searchElementById (id) {
    const element = document.getElementById(id);
    return element;
    
}

// Add styles
function addBgColor (elementId) {
    const element = searchElementById(elementId);
    element.classList.add('bg-green-400');
}

// Set Inner Text By Id
function setInnerTextById (id, newValue) {
    const element = searchElementById(id);
    element.innerText = newValue;
}

document.getElementById('seat-container').addEventListener('click', function handleTicketClick (e) {
    // If User Clicked
    const userClicked = e.target;
    const userClickedValue = userClicked.innerText.toLowerCase();
    // console.log(userClickedValue);
    // Current Seat Number
    const currentSeat = searchElementById('current-available-seat');
    const currentSeatNumber = parseInt(currentSeat.innerText);
    // Get the ticket booked number
    const ticketBookedElement = searchElementById('ticket-booked');
    const ticketBooked = parseInt(ticketBookedElement.innerText);

    // Conditionally Set The Available Tickets Number
    if(userClicked && ticketBooked < 4) {
        const remainingSeat = currentSeatNumber -1 ;
        setInnerTextById('current-available-seat', remainingSeat);
        // Set the total ticket count number
        const newTicketCount = ticketBooked + 1;
        setInnerTextById('ticket-booked', newTicketCount);
        // Set the Bg Color
        addBgColor(userClickedValue);
        // Call the append child func
        appendElement(userClickedValue);
    }
    // Set Error Msg
    if(currentSeatNumber === 4){
        alert('You already get 4 tickets');
        return
    }

})