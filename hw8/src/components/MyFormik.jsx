import {Formik, Form, Field, ErrorMessage} from 'formik'
import { object, string} from 'yup';

let userSchema = object({
    username: string().min(3).max(10).required('Invalide Username'),
    pass: string().min(6).max(12).required('Invalide Password'),
    repass: string().min(6).max(12).required('Invalide Pasword')
})

export function MyFormik() {

    const submitForm = (data) => {
        console.log(data);
    }
    return (
      <div>  
        <b>formik + yup</b>
        <br />
        <br />
          <Formik 
            onSubmit={submitForm} 
            initialValues={{username:'',pass:'',repass:''}} 
            validationSchema={userSchema}
            >     
              <Form style={{color: 'red'}}>  
                <Field
                    className = 'style-field'
                     type = 'text'
                     placeholder = 'username' 
                     id = 'username'
                     name = 'username'  
                />  
                <ErrorMessage name='username'/>
                <br />
                <Field
                    className = 'style-field'
                     type = 'text'
                     placeholder = 'pass' 
                     id = 'pass'
                     name = 'pass'  
                />   
                <ErrorMessage name='pass'/>
                <br />
                <Field 
                    className = 'style-field'
                     type = 'text'
                     placeholder = 'repass' 
                     id = 'repass'
                     name = 'repass'  
                />   
                <ErrorMessage name='repass'/>   
                <br />
                <br />
                <Field value = 'Send' type = 'submit' name = 'submit'/>             
              </Form>  
          </Formik>  
      </div>  
    )
}