const handleResponse = async (res) => {
    const content = document.getElementById('content');
    switch (res.status) {
        case 200:
            content.innerHTML = `<b>Success</b>`;
            break;
        case 201:
            content.innerHTML = `<b>Created</b>`;
            break;
        case 204:
            content.innerHTML = `<b>Updated</b>`;
            break;
        case 400:
            content.innerHTML = `<b>Bad Request</b>`;
            break;
        case 404:
            content.innerHTML = `<b>Not Found</b>`;
            break;
        default:
            content.innerHTML = `<p>Status code not implemented by client</p>`;
            break;
    };
};

const sendFetch = async (form, method, url = undefined) => {
    if(!url) {
        url = form.getAttribute('actions');
    };
    const options = {
        method: method,
        headers: {
            'Accept': 'application/json',
        },
    };
};

const createCollapsibles = () => {
    const collapsibles = document.querySelectorAll('.collapsible');
    const requestForm = document.querySelectorAll('.requestForm');
    collapsibles.forEach((button, index) => {
        button.addEventListener('click', () => {
            console.log(`Clicked ${button} at ${index}`)
            const content = requestForm[index];
            console.log(`${content}`);
            requestForm.forEach((form) => {
                if (form !== content) {
                    form.style.display = 'none';
                };
            });
            if (content.style.display === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            };
        });
    });
};

const init = () => {
    createCollapsibles;

    const getEveryForm = document.querySelector('#getEvery');
    const getCountryForm = document.querySelector('#getCountry');
    const getTimezonesForm = document.querySelector('#getTimezones');
    const getSunForm = document.querySelector('#getSun');
    const renameForm = document.querySelector('#renameTZ');
    const createForm = document.querySelector('#createTZ');

};

window.onload = init;