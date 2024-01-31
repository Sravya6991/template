const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    sendEmail(e)
});

function sendEmail(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const myForm = {}
    for(let [key, value] of formData) {
        myForm[key] = value
    }
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sender_emil",
        Password: "password",
        To: "reciver_emal",
        From: "sender_email",
        Subject: myForm["mail-subject"],
        Body: `Client-name: ${myForm["client-name"]} <br/> Client-email: ${myForm["client-email"]} <br/>
        Subject: ${myForm["mail-subject"]} <br/> Body: ${myForm["mail-body"]} <br/>`
    })
    .then(mesaage => alert("mail sent successfully!"))
}