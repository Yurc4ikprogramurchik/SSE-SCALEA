document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const name = document.getElementById("contactName").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
            const subject = document.getElementById("contactSubject").value.trim();
            const message = document.getElementById("contactMessage").value.trim();

            if (!name || !email || !subject || !message) {
                alert("❌ Заполните все поля!");
                return;
            }

            alert("✅ Сообщение отправлено! Мы свяжемся с вами.");
            this.reset();
        });
    }
});

