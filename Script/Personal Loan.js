// For Email Submit Form   
$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxgZO_ty-6gXdJsJiD_-SJHBD2y_X91DiWpeZpWhARxH7Tt8lTfaEYNe1AxGMgMjMJiRQ/exec",
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