document.getElementById('flightForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departure = document.getElementById('departureDate').value;
    const ret = document.getElementById('returnDate').value;
    const passengers = document.getElementById('passengers').value;
  
    const  ticketText = `
    <p id="local"> *****Flight Ticket Confirmation*****</p>
    Name       : ${name}
    From       : ${from}
    To         : ${to}
    Departure  : ${departure}
    ${ret ? `Return     : ${ret}` : ''}
    Passengers : ${passengers}
    Booking ID : FLT${Math.floor(Math.random() * 1000000)}`;
  
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').innerHTML = `<pre>${ticketText}</pre>`;
    document.getElementById('flightForm').style.display = 'none';
    document.getElementById('backBtn').style.display = 'block';
  });
  
  document.getElementById('backBtn').addEventListener('click', function () {
    document.getElementById('flightForm').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    this.style.display = 'none';
  });
  