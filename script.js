document.getElementById('createEventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventDescription = document.getElementById('eventDescription').value;

    const eventList = document.getElementById('eventList');
    const newEvent = document.createElement('div');
    newEvent.classList.add('event');
    newEvent.innerHTML = `
        <h3>${eventName}</h3>
        <p><strong>Date:</strong> ${eventDate}</p>
        <p>${eventDescription}</p>
    `;
    eventList.appendChild(newEvent);

    alert('Event created successfully!');
    document.getElementById('createEventForm').reset();
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
