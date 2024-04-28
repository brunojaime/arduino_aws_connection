import config from './end_points.js'; //File with the endpoints
const form = document.getElementById('myForm');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Crea un objeto para almacenar los datos del formulario.
    const formData = new FormData(form);
    const formProps = {};
    formData.forEach((value, key) => {
        formProps[key] = value;
    });

    // Convertir los datos del formulario a JSON.
    const jsonData = JSON.stringify(formProps);

    try {
        const response = await fetch(config.apiEndpoint, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData,
        });
        alert('Datos cargados correctamente'); // Asumir éxito si no hay excepción
    } catch (error) {
        console.error('Fetch error: ', error);
        alert('Hubo un problema en la carga');
    }
    
});

const dateTimeInput = document.getElementById('date_time');
dateTimeInput.valueAsNumber = Date.now();

const categoriesSelect = document.getElementById('categories');
const categories = ['cat1', 'cat2', 'cat3'];

categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoriesSelect.appendChild(option);
});
