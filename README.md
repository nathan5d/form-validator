# FormValidator Framework

FormValidator is a lightweight JavaScript framework for client-side form validation. It allows you to easily add customizable form validation to your web applications. The framework provides default error messages in multiple languages and allows you to customize these messages according to your application's needs.

## Features

- **Multilingual Support:** Default error messages are provided in English, Portuguese (Brazil), Spanish, and French. You can also customize messages for other languages.

- **Customization:** Easily customize validation messages for each form field based on your application's requirements.

- **Extensible:** Add custom validation functions for specific fields.

## Usage

### Include the Script

Include the FormValidator script in your HTML file:

```html
<script src="path/to/FormValidator.js"></script>
```
## Basic Setup
Define your form fields with unique IDs and associated error elements:

```html
<form id="myForm">
    <label for="username">Username:</label>
    <input type="text" id="username">
    <div id="username-error"></div>

    <label for="email">Email:</label>
    <input type="email" id="email">
    <div id="email-error"></div>

    <!-- Add more form fields as needed -->
    
    <button type="submit">Submit</button>
</form>
```
Use the framework in your script.js file:
```html
// Custom validation function
function validateMyForm(event) {
    event.preventDefault();

    // Validation logic using FormValidator

    const fields = ['username', 'email'];
    const validationOptions = {
        username: { required: true, minLength: 3 },
        email: { required: true, isEmail: true },
    };

    // Specify the desired language (e.g., 'en' for English or 'pt' for Portuguese)
    const language = 'en';

    // Custom translations for error messages
    const customTranslations = {
        en: {
            required: 'This field is required.',
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

    const isValid = FormValidator.validateForm(fields, validationOptions, language, customTranslations);

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
```

## Customization
***Custom Translations:*** You can customize error messages for different languages by providing your own translations using the customTranslations parameter.

***Custom Validation:*** Add custom validation functions for specific fields by extending the validationOptions object.
```html
const validationOptions = {
    customField: {
        customValidation: function(value) {
            // Your custom validation logic
            return value === 'custom';
        },
        custom: 'This field must be "custom".',
    },
};
```

## Contributing
Feel free to contribute to the FormValidator framework by reporting issues or submitting pull requests on the [GitHub repository](#).

## License
FormValidator is licensed under the [MIT License](#).