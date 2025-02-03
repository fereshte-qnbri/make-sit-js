fetch('https://jsonplaceholder.typicode.com/users/2')
    .then(response => response.json()) 
    .then(data => {
        document.getElementById("user-name").textContent = data.name;
        document.getElementById("user-email").textContent = data.email;
    })
    .catch(error => console.error("خطا در دریافت داده‌ها:", error));



document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (!fullName) {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("successMessage").style.display = "block";

    setTimeout(() => {
        document.getElementById("successMessage").style.display = "none";
        document.getElementById("contactForm").reset();
    }, 3000);
});

// دریافت اطلاعات یک کاربر از API



