document.addEventListener("DOMContentLoaded", function () {

    const container = document.createElement('div');
    container.classList.add('container')

    const header = document.createElement('div');
    header.classList.add('header')

    const headerText = document.createElement('h2');
    headerText.innerHTML = 'Форма'

    const form = document.createElement('form');
    form.classList.add('form')
    form.setAttribute('id', 'form');

    for (let i = 0; i < 5; i++) {

        const formControl = document.createElement('div')
        formControl.classList.add('form-control')

        const label = document.createElement('label')
        label.innerHTML = `Выпадающий список № ${i + 1}`
        label.setAttribute('for', `select-${i + 1}`)

        const select = document.createElement('select')
        select.setAttribute('name', `select-${i + 1}`)
        select.setAttribute('id', `select-${i + 1}`)



        for (let j = 0; j < 5; j++) {
            const option = document.createElement('option')
            option.value = `${j + 1}`
            option.innerHTML = `${j + 1}`
            select.append(option)
        }




        form.append(formControl)
        formControl.append(label)
        formControl.append(select)

    }

    for (let i = 0; i < 2; i++) {

        const formControl = document.createElement('div')
        formControl.classList.add('form-control')

        const label = document.createElement('label')
        label.innerHTML = `Поле для ввода № ${i + 1}`
        label.setAttribute('for', `input-${i + 1}`)

        const input = document.createElement('input')
        input.setAttribute('type', `text`)
        input.setAttribute('placeholder', `Добавьте текст`)
        input.setAttribute('id', `input-${i + 1}`)
        input.setAttribute('name', `input-${i + 1}`)

        form.append(formControl)
        formControl.append(label)
        formControl.append(input)
    }

    const button = document.createElement('button')
    button.innerHTML = 'Submit'

    document.body.append(container)
    container.append(header)
    header.append(headerText)
    container.append(form)
    form.append(button)



    form.addEventListener("submit", formSend);

    function formSend(e) {
        e.preventDefault();

        const fields = document.querySelectorAll('input, select');
        const values = {};

        function getFormData() {
            fields.forEach(field => {
                const { name, value } = field;
                values[name] = value;
            })
        }

        function showJson() {
            toJson = JSON.stringify(values);

            const showJson = document.createElement('div')
            showJson.classList.add('json-container')
            const showJsonText = document.createElement('p')
            const container = document.querySelector('.container')

            showJsonText.innerHTML = toJson
            container.after(showJson)
            showJson.append(showJsonText)

        }

        getFormData();
        showJson();

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