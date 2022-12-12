import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm({ onSubmit }) {
    const form = useForm({
        defaultValues: {
            title: '',
        },
    })

    const handleSubmitForm = (values) => {
        console.log('Todo Form: ', values)
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmitForm)}>
            <InputField name="title" label='Todo' form={form} />
        </form>
    );
}

export default TodoForm;