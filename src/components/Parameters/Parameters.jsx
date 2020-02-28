import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import './Parameters.scss';
import {setPreview} from "../../redux/preview-reducer";
import history from './../../history';

const validate = values => {
    const errors = {}
    if (!values.bannerTitle) {
        errors.bannerTitle = 'Введите название баннера'
    }
    if (!values.bannerType) {
        errors.bannerType = 'Определите тип баннера'
    }
    if (!values.verticalImage) {
        errors.verticalImage = 'Укажите вертикальное изображение'
    }
    if (!values.gorizontalImage) {
        errors.gorizontalImage = 'Укажите горизонтальное изобаржение'
    }
    if (!values.targetLink) {
        errors.targetLink = 'Укажите целевую ссылку'
    }
    return errors
}

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className="parameters__form-field">
        <label className="parameters__form-label">{label}</label>
        <div className="parameters__form-field-container">
            <input {...input} type={type} className="parameters__form-control"/>
            {touched && ((error && <span className="parameters__form-text-danger">{error}</span>) || (warning &&
                <span>{warning}</span>))}
        </div>
    </div>
)

export const selectField = ({
                                input,
                                label,
                                meta: {touched, error},
                                children
                            }) => (
    <div className="parameters__form-field">
        <label className="parameters__form-label">{label}</label>
        <div className="parameters__form-field-container">
                <select {...input} className="parameters__form-control-select"> >
                    {children}
                </select>
                {touched && (error && <p className="parameters__form-text-danger">{error}</p>)}
        </div>
    </div>
);

const ParametersForm = ({handleSubmit, error, pristine, invalid, submitting, isLoading}) => {
    return (
        <form className='parameters__form' onSubmit={handleSubmit}>
            <Field
                name="bannerTitle"
                component={renderField}
                label='Название баннера'
                className='parameters__form-input'
            />
            <Field name="bannerType"
                   component={selectField}
                   label="Тип баннера"
            >
                <option></option>
                <option name="direct">Прямой</option>
                <option name="reverse">Обратный</option>
            </Field>
            <Field
                name="verticalImage"
                component={renderField}
                label='Вертикальное изображение'
                className='parameters__form-input'
            />
            <Field
                name="gorizontalImage"
                component={renderField}
                label='Горизонтальное изображение'
                className='parameters__form-input'
            />
            <Field
                name="targetLink"
                component={renderField}
                label='Целевая ссылка'
                className='parameters__form-input'
            />
            {error && <div className='parameters__form-error'>
                {error}
            </div>
            }
            <div>{isLoading
                ? <button>Подождите...</button>
                : <button className='parameters__form-submit-button' type='submit' disabled={invalid ||pristine || submitting}>
                    Предпросмотр
                </button>
            }
            </div>
        </form>
    )
}

const ParametersReduxForm = reduxForm({form: 'parameters', validate})(ParametersForm)

const Parameters = (props) => {
    const onSubmit = (formData) => {
        props.setPreview(formData.bannerTitle, formData.bannerType, formData.verticalImage,formData.gorizontalImage, formData.targetLink)
        history.push('/preview');
    }

    return <div className='parameters'>
        <h2 className='parameters__header'>Параметры</h2>
        <ParametersReduxForm onSubmit={onSubmit} isLoading={props.isLoading}/>
    </div>
}
const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {setPreview})(Parameters);