// For Email Submit Form   
$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyo348UGrb1bQI5dRJi-iDJ8fl2TBnX39KKxHL6avpcBMEDgCz0FM5GC8LJ5YkiBlIK/exec",
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