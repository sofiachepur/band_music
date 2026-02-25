
    fetch("data.json")
    .then(res => res.json())
    .then(data => {
    const tbody = document.getElementById("tableBody");

    data.events.forEach(event => {
    tbody.innerHTML += `
        <tr>
          <td>${event.city}</td>
          <td>${event.seats}</td>
          <td>${event.date}</td>
          <td>${event.time}</td>
          <td> <button onclick="buyTicket('${event.city}', '${event.date}')" class="buy">
              ЗАМОВИТИ КВИТОК</button>
              </td>
        </tr>
      `;
});
});


    const contactForm = document.getElementById('contactForm');


    let jsonData = [];

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();


        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('messageError').textContent = '';

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let valid = true;

        if (name.length < 2) {
            document.getElementById('nameError').textContent = 'Введіть ім\'я (мінімум 2 символи)';
            valid = false;
        }
        if (!email.includes('@')) {
            document.getElementById('emailError').textContent = 'Введіть коректний email';
            valid = false;
        }
        if (message.length < 5) {
            document.getElementById('messageError').textContent = 'Повідомлення занадто коротке';
            valid = false;
        }

        if (!valid) return;

        const entry = { name, email, message, date: new Date().toISOString() };
        jsonData.push(entry);

        console.log('Дані для запису в JSON:', JSON.stringify(jsonData, null, 2));
        alert('Дані успішно відправлено!');


        contactForm.reset();
    });








    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('buy')) {
            const modal = new bootstrap.Modal(
                document.getElementById('ticketModal')
            );
            modal.show();
        }
    });