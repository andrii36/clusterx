import React, { ChangeEvent, useState } from 'react';
import styles from './NewListing.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { postRealEstateThunk, RealEstateFormDataType } from '../../Redux/realEstate-reducer';
import { postTransportThunk, TransportFormDataType } from '../../Redux/transport-reducer';
import FormTitle from '../FormFields/FormTitle';
import FormDescription from '../FormFields/FormDescription';
import { maxLength, required } from '../Content/Utils/Validators/Validators';
import PostSuccess from './PostSuccess';
import FormImage from '../FormFields/FormImage';
import { StateType } from '../../Redux/redux-store';
import { Button, Spinner } from 'react-bootstrap';

const maxLength30 = maxLength(30)

type MapStatePropsType = {
  isAuth: boolean
  userName: string | null
  postSuccess: boolean
}
type MapDispatchPropsType = {
  postRealEstateThunk: (formData: RealEstateFormDataType) => void
  postTransportThunk: (formData: TransportFormDataType) => void
}
type OwnPropType = {
  category: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropType
type FormDataType = RealEstateFormDataType | TransportFormDataType

const PostForm: React.FC<InjectedFormProps<FormDataType, OwnPropType>&OwnPropType> = (props) => {
  const [storage, setStorage] = useState(null)
  let changePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    //setStorage(e.target)
  }
  return (
    <div style={{width: "50%", margin: "auto"}}>
      <h1 className={styles.title}>Add new listing</h1>
      <form className={styles.form} onSubmit={props.handleSubmit}>
        <Field component={FormTitle} type="text" name="title" placeholder="title" validate={[required, maxLength30]}/>
        <Field component={FormDescription} type="text" name="description" placeholder="description" validate={[required]}/>
        <div>
          <Field component="input" type="number" name="price" placeholder="price" />
        </div>
        <div>
          <Field component="input" type="number" name="contact" placeholder="phone number" />
        </div>
        {props.category == "RealEstate" &&
          <div>
            <Field component="input" type="number" name="rooms" placeholder="rooms number" />
          </div>}
        {props.category == "RealEstate" &&
          <div>
            <Field component="input" type="number" name="floor" placeholder="floor number" />
          </div>}
        {props.category == "Transport" &&
          <div>
            <Field component="input" type="text" name="color" placeholder="color" />
          </div>}
        {props.category == "Transport" &&
          <div>
            <Field component="input" type="text" name="engineType" placeholder="type of engine" />
          </div>}
          <div>
            <Field component="input" type="number" name="year" placeholder="year built" />
          </div>
          <div>
            <Field component="input" type="text" name="city" placeholder="city" />
          </div>
          <div>
            <Field component="input" type="text" name="region" placeholder="region" />
          </div>
          <Field component={FormImage} name="image" type="text" placeholder="image"/>
          <Button variant="success" type='submit'>Confirm</Button>
          <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
      </form>
    </div>
  );
}

const PostReduxForm = reduxForm<FormDataType, OwnPropType>({ form: "postForRentForm" })(PostForm);

const PostForRent: React.FC<PropsType> = (props) => {
  if (!props.isAuth) return <Redirect to='/login' />
  const onSubmit = (formData: any) => {
        formData.owner = props.userName
        switch(props.category){
          case "RealEstate": {
            props.postRealEstateThunk(formData)
            break
        }
          case "Transport": {
            props.postTransportThunk(formData)
            break
          }
        }
      }
  return (
      <div>
         {!props.postSuccess && <PostReduxForm onSubmit={onSubmit} {...props}/>}
         {props.postSuccess &&
          <PostSuccess/>}
      </div>

  );
}

const mapStateToProps = (state: StateType): MapStatePropsType => ({
        isAuth: state.auth.isAuth,
        userName: state.auth.name,
        postSuccess: state.transport.postSuccess
})

export default connect(mapStateToProps, { postRealEstateThunk, postTransportThunk })(PostForRent);