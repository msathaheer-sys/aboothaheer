// For Email Submit Form
$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyKIB59RTeqGWT8oa73pXqiNUeYaXCpv6FH5NkGTKGUhC8arXSK7YgUYLityDxvsaMx/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            alert("Thank You For Submiting");
            window.location.reload();
            //window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error");

        }
    });
});

// For Whatsapp
document.getElementById("submit-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    let Name = document.getElementById("Name").value.trim();
    let Place = document.getElementById("Place").value.trim();
    let Email = document.getElementById("Email").value.trim();
    let Message = document.getElementById("Message").value.trim();

    // Validate inputs
    if (!Name || !Place || !Email || !Message) {
        alert("Please fill in all fields.");
        return;
    }

    // Your WhatsApp number in international format (without + or spaces)
    let phoneNumber = "917356348133"; // Example: India number

    // Format message
    let whatsappMessage = `Hello, My Name is ${Name}.%0A My Place is ${Place}.%0A My Email is ${Email}.%0A${Message}`;

    // Open WhatsApp
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
});