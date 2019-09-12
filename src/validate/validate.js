const validate = values => {
    const errors = {};
    if(!values.title) {
        errors.title = 'Заполните поле';
    }
    if(!values.request) {
        errors.request = 'Заполните поле';
    }
    if(!values.email) {
        errors.email = 'Заполните поле';
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Неправильно введен email';
    }
    if(!values.sex) {
        errors.sex = 'Выберите свой пол';
    }
    if(!values.name) {
        errors.name = 'Заполните поле';
    }
    if(!values.surname) {
        errors.surname = 'Заполните поле';
    }

    return errors;
};

export default validate;