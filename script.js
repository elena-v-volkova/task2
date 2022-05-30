document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector('form')
    const values = {};

    form.addEventListener("submit", formSend);

    function formSend(e) {
        e.preventDefault();
        getFormData();
        showJson();
        sendRequest();
    }

    function getFormData() {
        const fields = document.querySelectorAll('input, select');

        fields.forEach(field => {
            const { name, value } = field;
            values[name] = value;
        })
    }

    function showJson() {
        const jsonOutput = document.querySelector('.json-output');

        console.log(jsonOutput)

        toJson = JSON.stringify(values, null, 2);

        jsonOutput.innerHTML = toJson
    }

    function sendRequest() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', 'sendForm.php');
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return
            } else {
                alert("Запрос отправлен")
            }
        }
    }

});