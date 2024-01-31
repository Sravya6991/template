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
        Username: "freelancesravya@gmail.com",
        Password: "37238646B52B46BDD56870AF23BBE6E380DC",
        To: "freelancesravya@gmail.com",
        From: "freelancesravya@gmail.com",
        Subject: myForm["mail-subject"],
        Body: `Client-name: ${myForm["client-name"]} <br/> Client-email: ${myForm["client-email"]} <br/>
        Subject: ${myForm["mail-subject"]} <br/> Body: ${myForm["mail-body"]} <br/>`
    })
    .then(mesaage => alert("mail sent successfully!"))
}