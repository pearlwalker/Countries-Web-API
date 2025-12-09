

const handleResponse = async (res, hasBody) => {
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
const submitGetEvery = async (form, method) => {
    console.log(form, method);
};

const submitGetCountry = async (form, method) => {
    console.log(form, method);
};

const submitGetTimezones = async (form, method) => {
    console.log(form, method);
};

const submitGetSun = async (form, method) => {
    console.log(form, method);
};

const submitRenameTZ = async (form, method) => {
    console.log(form, method);
};

const submitCreateTZ = async (form, method) => {
    console.log(form, method);
};
const sendFetch = async (form, method, url = undefined) => {
    let hasBody = true;
    if (!url) {
        url = form.getAttribute('actions');
    };
    const options = {
        method: method,
        headers: {
            'Accept': 'application/json',
        },
    };

    if (method === 'POST' || method === 'post') {

    };

    if (method === 'HEAD' || method === 'head') {

    } else {

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
    createCollapsibles();
const getEveryForm = document.querySelector('#getEvery');
const getCountryForm = document.querySelector('#getCountry');
const getTimezonesForm = document.querySelector('#getTimezones');
const getSunForm = document.querySelector('#getSun');
const renameForm = document.querySelector('#renameTZ');
const createForm = document.querySelector('#createTZ');
    const formData = [
        {
            form: getEveryForm,
            handler: submitGetEvery,
        },
        {
            form: getCountryForm,
            handler: submitGetCountry,
        },
        {
            form: getTimezonesForm,
            handler: submitGetTimezones,
        },
        {
            form: getSunForm,
            handler: submitGetSun,
        },
        {
            form: renameForm,
            handler: submitRenameTZ,
        },
        {
            form: createForm,
            handler: submitCreateTZ,
        },
    ];

    formData.forEach((item) => {
        const submitCallback = (e) => {
            const method = item.form.querySelector('.methodSelect').value ?? item.form.getAttribute('method') ?? undefined;
            e.preventDefault();
            item.handler(item.form, method);
            return false;
        };
        item.form.addEventListener('submit', submitCallback);
    });
};

window.onload = init;