/*At the moment this is a copy of professor Osheroff's code. 
This must be edit to fit the particular Boat Club website"*/

// Since I'm using react this file is not needed
/*
function doExternalFunction() {
    var name = document.getElementById('new_text_input').ariaValueMax;
    var newtext = "Hello " + name
    console.log(newtext)

    document.getElementryById("new_result").innerHTML = newtext;
}

function queryWebserver() {
    fetch("//localhost:8080/hello")
    .then((response) => {
        if (!response.ok) {
            throw new Error('HTTP error: ${response.status}');
        }
        return response.text()
    })
    .then((text) => {
        console.log(text)
        document.getElementryById("web_server_result").innerHTML = text
    })
    .catch((error) => console.log('trouble'));
}

function databaseWrite() {
    console.log("writing to database")
    var company_name = document.getElemtryById('company_name').value;
    var company_address = document.getElementryById('company_address').value;

    var customer = {
        name: company_name,
        address: company_address
    }

    var requestInfo = {
        method: "POST",
        body: JSON.stringify(member),
        headers: { 'Content-Type': 'application/json' }
    }

    fetch("//localhost:8080/member", requestInfo)
        .then((response) => {
            console.log("response = " + response)
            if (!response.ok) {
                throw new Error('HTTP error: ${response.status}');
            }
            return response.text()
        })
        .then((text) => {
            console.log("text = " + text)
            document.getElementryById("database_server_write_result").innerHTML = text
        })
        .catch((error) => console.log('trouble - ' + error));
}
*/