// Country → State → District Data
const locationData = {
    "India": {
        "Kerala": ["Ernakulam", "Kozhikode", "Thiruvananthapuram", "Kollam"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
        "Karnataka": ["Bengaluru Urban", "Mysuru", "Mangaluru"]
    },
    "USA": {
        "California": ["Los Angeles County", "San Diego County", "Orange County"],
        "Texas": ["Harris County", "Dallas County", "Tarrant County"]
    }
};

// Populate 
const countrySelect = document.getElementById("country");
const stateSelect = document.getElementById("state");
const districtSelect = document.getElementById("district");

for (let country in locationData) {
    let option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
}

// Country Change Event
countrySelect.addEventListener("change", function () {
    stateSelect.innerHTML = '<option value="">-- Select State --</option>';
    districtSelect.innerHTML = '<option value="">-- Select District --</option>';
    districtSelect.disabled = true;

    if (this.value) {
        stateSelect.disabled = false;
        for (let state in locationData[this.value]) {
            let option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        }
    } else {
        stateSelect.disabled = true;
    }
});

// State Change Event
stateSelect.addEventListener("change", function () {
    districtSelect.innerHTML = '<option value="">-- Select District --</option>';

    if (this.value) {
        districtSelect.disabled = false;
        let districts = locationData[countrySelect.value][this.value];
        districts.forEach(district => {
            let option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    } else {
        districtSelect.disabled = true;
    }
});

// For Email Submit Form   
$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzCyG5kOSxnyi-u9hm81VsIU6eFsQmScHKHBXpplDshl4cYPpHHM8rzDxGwFELbVJTPZg/exec",
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