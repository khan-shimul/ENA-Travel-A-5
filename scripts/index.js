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

// Handle Next
function handleSuccess () {
    const ticketBookedStr = searchElementById('ticket-booked').innerText;
    const ticketBooked = parseInt(ticketBookedStr);
    if(ticketBooked > 0) {
        my_modal_5.showModal();


    }
    else{
        alert('Please get your ticket first')
    }
}

// Apply Cupon Code
function applyCupon () {
    const cuponInputValue = searchElementById('cupon-input').value;
    const currentGrandTotalStr = searchElementById('grand-total').innerText;
    const currentGrandTotal = parseInt(currentGrandTotalStr);
    
    if(cuponInputValue === 'NEW15'){
        const discount = currentGrandTotal / 100 * 15;
        const newGrandTotal = currentGrandTotal - discount;
        setInnerTextById('grand-total', Math.round(newGrandTotal));
        // Hidden Cupon
        searchElementById('cupon-container').classList.add('hidden');
    }
    else if(cuponInputValue === 'Couple 20') {
        const discount = currentGrandTotal / 100 * 20;
        const newGrandTotal = currentGrandTotal - discount;
        setInnerTextById('grand-total', Math.round(newGrandTotal));
        // Hidden Cupon
        searchElementById('cupon-container').classList.add('hidden');
    }
    else {
        alert('Please give us a valid cupon');
        searchElementById('cupon-input').value = ''
    }
}

// Calculate grand total
function grandTotal (total) {
    const grandTotalElement = searchElementById('grand-total');
    const grandTotalNumber = parseInt(grandTotalElement.innerText);
    setInnerTextById('grand-total', total);
}

// Calculate Total
function calculateTotal (priceStr) {
    const price = parseInt(priceStr);
    const totalElement = searchElementById('total-price');
    const totalPriceNumber = parseInt(totalElement.innerText)
    const total = totalPriceNumber + price;
    setInnerTextById('total-price', total);
    grandTotal(total);
    
}

// Append Child
function appendElement (id) {
    const element = searchElementById(id);
    const elementValue = element.innerText;
    const ticketDetailsContainer = searchElementById('ticket-details');
    // Create Element and Append
    const div = document.createElement('div');
    const h5_1 = document.createElement('h5');
    const h5_2 = document.createElement('h5');
    const p = document.createElement('p');
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
    p.innerText = '550';
    // Append them to the div
    div.appendChild(h5_1);
    div.appendChild(h5_2);
    div.appendChild(p);
    const PriceString = p.innerText;
    // Call the calc total func
    calculateTotal(PriceString)
}

// Event Handler
document.getElementById('seat-container').addEventListener('click', function (e) {
    // If User Clicked
    const userClicked = e.target;
    const userClickedValue = userClicked.innerText.toLowerCase();
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