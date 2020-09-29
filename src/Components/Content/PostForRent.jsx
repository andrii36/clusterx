import React from 'react';
import styles from './Content.module.css';
import { Field, reduxForm } from 'redux-form';

const PostForm = (props) => {
  const required = (value) => {
    return value ? undefined : "Field must be filled"
  }
  return (
    <div>
        <form onSubmit={props.handleSubmit}>
          <div>
            <Field component="input" type="text" name="category" placeholder="category"/>
          </div>
          <div>
            <Field component="input" type="text" name="description" placeholder="description"/>
          </div>
          <div>
            <Field component="input" type="number" name="price" placeholder="price"/>
          </div>
          <button>save</button>
        </form>
    </div>
  );
}

const PostReduxForm = reduxForm({form: "postForRentForm"})(PostForm);

const PostForRent = (props) => {
  const onSubmit = (formData) => {
    alert(formData.category)
  }
  return (
    <div>
      <h1>Post My Ad</h1>
      <PostReduxForm onSubmit={onSubmit}/>
    </div>
    
  );
}

export default PostForRent;