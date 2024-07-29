
const submit = document.getElementById("submit");
submit.addEventListener("click", function validate(event) {
    event.preventDefault();
    const tbody = document.querySelector(".table tbody");
    var row = tbody.insertRow();
    const fname = document.getElementById("first-name").value;
    const lname = document.getElementById("last-name").value;
    const mailid = document.getElementById("email").value;
    const Pcode = document.getElementById("pincode").value;
    const address = document.getElementById("address").value;
    let genderValue = '';
    const genderRadios = document.getElementsByName("gender");
    for (const radio of genderRadios) {
        if (radio.checked) {
            genderValue = radio.id;
            break;
        }
    }
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    var food = "";
    let foodcount = 0;

    ['food1', 'food2', 'food3', 'food4', 'food5'].forEach(foodId => {
        if (document.getElementById(foodId).checked) {
            food += " " + document.getElementById(foodId).value;
            foodcount++;
        }
    });

    if (fname && lname && address && food && foodcount >= 2 && Pcode && state && country && genderValue) {
        let cell1 = row.insertCell(0);
        cell1.innerHTML = fname;
        let cell2 = row.insertCell(1);
        cell2.innerHTML = lname;
        let cell3 = row.insertCell(2);
        cell3.innerHTML = address;
        let cell4 = row.insertCell(3);
        cell4.innerHTML = Pcode;
        let cell5 = row.insertCell(4);
        cell5.innerHTML = genderValue;
        let cell6 = row.insertCell(5);
        cell6.innerHTML = food.trim();
        let cell7 = row.insertCell(6);
        cell7.innerHTML = state;
        let cell8 = row.insertCell(7);
        cell8.innerHTML = country;

        var form = document.getElementById("form");
        form.reset();

    } else if (foodcount < 2) {
        alert("At least 2 foods must be selected.");

    } else {
        alert("Please fill all the details.");

    }
});
