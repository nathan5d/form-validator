// Custom validation function
function validateMyForm(event) {
    event.preventDefault();

    // Validation logic using your framework

    const fields = ['username', 'email'];
    /*const validationOptions = {
        username: { required: true, minLength: 3 },
        email: { required: true, isEmail: true },
    };*/
    const validationOptions = {
        // username: { required: true, minLength: 3 },
        email: {
            required: true,
            isEmail: true,
            custom: 'precisa ser email'
        },
        username: {
            customValidation: function (value) {
                // Your custom validation logic
                return value === 'custom';
            },
            custom: 'This field must be "custom".',
        },

    };
    // Specify the desired language (e.g., 'en' for English or 'pt' for Portuguese)
    const language = 'fr';
    const translations = {
        en: {
            required: 'This field is requiredfg.',
            minLength: 'This field must have at least {minLength} characters.',
            isEmail: 'Please enter a valid email.',
            custom: 'This field does not meet custom validation requirements.'
        },
        pt: {
            required: 'Este campo é obrigatório.',
            minLength: 'Este campo deve ter no mínimo {minLength} caracteres.',
            isEmail: 'Por favor, insira um e-mail válido.',
            custom: 'Este campo não atende aos requisitos personalizados de validação.'
        },
    };

    const isValid = FormValidator.validateForm(fields, validationOptions, language, translations);

    if (isValid) {
        alert('Form is valid. Submitting...');
        // Add your form submission logic here
    } else {
        // Display or handle error messages, if necessary
        alert('Form is invalid. Please check the errors.');
    }
}

// Assign the function above to the onsubmit event of the form
document.getElementById('myForm').onsubmit = validateMyForm;