

const handleResponse = async (res, hasBody, resText) => {
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
    if (hasBody && res.status !== 204) {
        content.innerHTML += resText;
    };
};
const submitGetEvery = async (form, method, options, url) => {
    const response = await fetch(url, options);

    let checklistData = [];
    let resText = "";
    let hasBody = false;

    const attrChecklist = document.getElementById('attrChecklist');
    const boxes = attrChecklist.getElementsByTagName('input');
    for (let box of boxes) {
        checklistData.push(
            {
                attr: box.name,
                showAttr: box.checked,
            }
        );
    };

    if (method === 'HEAD' || method === 'head') {
        return handleResponse(response, hasBody, resText);
    };
    hasBody = true;
    const resObj = await response.json();

    if (!resObj) {
        resText = `<p>Generic Error message! :3</p>`;
        return handleResponse(response, hasBody, resText);
    };

    for (const country in resObj) {
        resText += `<h3>${country.name}</h3>`;
        resText += `<ul>`
        checklistData.forEach((item) => {
            if (item.showAttr === true) {
                
            }
        })
        resText += `</ul>`;
    };
    return handleResponse(response, hasBody, resText);
};

const submitGetCountry = async (form, method, options, url) => {
    let hasBody = true;
    if (method === 'HEAD' || method === 'head') {
        hasBody = false;
    }
    const response = await fetch(url, options);
    if (hasBody) {
        const resObj = await response.json();
        console.log(resObj);
    };
};

const submitGetTimezones = async (form, method, options, url) => {
    let hasBody = true;
    if (method === 'HEAD' || method === 'head') {
        hasBody = false;
    }
    const response = await fetch(url, options);
    if (hasBody) {
        const resObj = await response.json();
        console.log(resObj);
    };
};

const submitGetSun = async (form, method, options, url) => {
    let hasBody = true;
    if (method === 'HEAD' || method === 'head') {
        hasBody = false;
    }
    const response = await fetch(url, options);
    if (hasBody) {
        const resObj = await response.json();
        console.log(resObj);
    };
};

const submitRenameTZ = async (form, method, options, url) => {
    console.log(form, method);
};

const submitCreateTZ = async (form, method, options, url) => {
    console.log(form, method);
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
            const formMethod = item.form.querySelector('.methodSelect')?.value ?? item.form.getAttribute('method') ?? null;
            const options = {
                method: formMethod,
                headers: {
                    'Accept': 'application/json',
                },
            };
            const url = item.form.getAttribute('action');
            e.preventDefault();
            item.handler(item.form, formMethod, options, url);
            return false;
        };
        item.form.addEventListener('submit', submitCallback);
    });
};

window.onload = init;