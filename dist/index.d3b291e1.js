document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const templateParams = {
            name: event.target.name.value,
            email: event.target.email.value,
            number: event.target.number.value,
            message: event.target.message.value
        };
        emailjs.send("service_qxbwwir", "template_ohz2uwe", templateParams).then((response)=>{
            console.log("Email successfully sent!", response);
            alert("E-postmeddelandet har skickats!");
            contactForm.reset();
        }).catch((err)=>{
            console.error("Error sending email:", err);
            alert("E-postmeddelandet kunde inte skickas. F\xf6rs\xf6k igen senare.");
        });
    });
});

//# sourceMappingURL=index.d3b291e1.js.map
