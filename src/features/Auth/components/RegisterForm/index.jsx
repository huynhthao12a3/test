import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
RegisterForm.propTypes = {

};

function RegisterForm(props) {
     const scheme = yup.object().shape({
          title: yup.string().required('Please enter title').min(5, 'Tittle is to short')
     })
     // const form = useForm({
     //      defaultValues: {
     //           tit
     //      }
     // })
     return (
          <div>

          </div>
     );
}

export default RegisterForm;