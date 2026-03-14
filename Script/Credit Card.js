// For Email Submit Form   
$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzLNAWnYKzmIDWFrjJ7YQtcQslS8LB7LRIPliYNJ3_t04RvFWJcpGrsLrgcjCsqj-53lA/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})