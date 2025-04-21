document.getElementById('flightForm').addEventListener('submit', function (e) {
    e.preventDefault();
  // from code 
    const name = document.getElementById('name').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departure = document.getElementById('departureDate').value;
    const ret = document.getElementById('returnDate').value;
    const passengers = document.getElementById('passengers').value;
  // tkt code
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
  //  back botton
  document.getElementById('backBtn').addEventListener('click', function () {
    document.getElementById('flightForm').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    this.style.display = 'none';
  });
  //  swiper code start
  const swiper = new Swiper('.swiper', {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    }
  });
  
  // SEC.. swiper img strat...

  const scrollContainer = document.querySelector('.punam');
const btnLeft = document.querySelector('.divya');
const btnRight = document.querySelector('.payal');

btnLeft.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});

btnRight.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});
