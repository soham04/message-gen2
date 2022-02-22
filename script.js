let r = "hi"

let output = ""

function gen() {
    // alert("hi")
    output = ""

    let title = document.getElementById('title').value
    let company_name = document.getElementById('company-name').value
    let type = document.getElementById('type').value
    let ctc = document.getElementById('ctc').value
    let about = document.getElementById('about').value
    let location = document.getElementById('location').value
    let stipend = document.getElementById('stipend').value
    let time = document.getElementById('time').value
    let duration = document.getElementById('duration').value
    let position = document.getElementById('position').value
    let number_of_positions = document.getElementById('number-of-positions').value
    let form_link = document.getElementById('form-link').value
    let deadline = document.getElementById('deadline').value

    let outputbox = document.getElementById('outputbox')



    if (title.length != 0) {
        output = output + "🚨 *" + title + "*"
    }
    if (type.length != 0) {
        output = output + "\nType : *" + type + "*"
    }
    if (company_name.length != 0) {
        output = output + "\nCompany name : *" + company_name + "*"
    }
    if (about.length != 0) {
        output = output + "\nAbout : *" + about + "*"
    }
    if (stipend.length != 0) {
        output = output + "\nStipend : *" + stipend + "*"
    }
    if (time != "Not selected") {
        output = output + "\nTime : *" + time + "*"
    }
    if (ctc.length != 0) {
        output = output + "\nCTC : *" + ctc + "*"
    }
    if (location.length != 0) {
        output = output + "\nLocation : *" + location + "*"
    }
    if (duration.length != 0) {
        output = output + "\nDuration : *" + duration + "*"
    }
    if (position.length != 0) {
        output = output + "\nPosition : *" + position + "*"
    }
    if (number_of_positions.length != 0) {
        output = output + "\nNumber of openings : *" + number_of_positions + "*"
    }
    if (form_link.length != 0) {
        output = output + "\nForm Link : *" + form_link + "*"
    }
    if (deadline.length != 0) {
        output = output + "\nDeadline : *" + deadline + "*"
    }

    console.log(output);
    outputbox.innerHTML = output

    if (output.length != 0) {
        document.getElementById("copy").style.display = "block";
    } else {
        document.getElementById("copy").style.display = "none";
    }

}

function copy() {
    navigator.clipboard.writeText(output);
}