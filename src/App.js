import React, { useState } from 'react';
import './App.css';
import {useFormik} from 'formik'
import * as Yup from 'yup';


function App() {

  const [login, setLogin] = useState(false)

  const formik = useFormik({
    validationSchema: Yup.object().shape({
      firstname:Yup.string().label('First Name are reuired').required(),
      lastname:Yup.string().label('Last Name are reuired').required(),
      email: Yup.string().email('Required email').required()

    }),
    initialValues:{
      firstname: '',
      lastname: '',
      email:''
    },
    onSubmit : (values) =>{
      setLogin(true)
    }

  })
  return (
    <div className="App app-container">
      <form onSubmit={formik.handleSubmit}>
    <div className='input-fld'>
      <label>First Name</label>
      <input type="text" name="firstname" id="firstname" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.firstname ? <label className='lbl-error'>{formik.errors.firstname}</label> : null }
    </div>
    <div className='input-fld'>
      <label>Last Name</label>
      <input type="text" name="lastname" id="lastname" value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.lastname ? <label className='lbl-error'>{formik.errors.lastname}</label> : null }
    </div>

    <div className='input-fld'>
      <label>Email</label>
      <input type="text" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.email ? <label className='lbl-error'>{formik.errors.email}</label> : null }
    </div>
    <input type="submit" value="Submit" />

      </form>

      {

        login ? 
        <p className='welcom'>Congats Your Welcom again</p>
        : null
      }
     
    </div>
  );
}

export default App;
