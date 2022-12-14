import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience, history }) => {
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: '',
    });

    const {
        company,
        title,
        location,
        from,
        to,
        current,
        description,
    } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <Fragment>
            <h1 className='large text-primary'>Dodaj iskustvo</h1>
            <p className='lead'>
                <i className='fas fa-code-branch' /> Developerske pozicije u prošlosti
            </p>
            <small>* = obavezna polja</small>
            <form
                className='form'
                onSubmit={(e) => {
                    e.preventDefault();
                    addExperience(formData, history);
                }}
            >
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* Zvanje'
                        name='title'
                        value={title}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* Firma'
                        name='company'
                        value={company}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Lokacija'
                        name='location'
                        value={location}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <h4>Datum od:</h4>
                    <input
                        type='date'
                        name='from'
                        value={from}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <p>
                        <input
                            type='checkbox'
                            name='current'
                            checked={current}
                            value={current}
                            onChange={() => {
                                setFormData({ ...formData, current: !current });
                            }}
                        />{' '}
                        trenutni posao
                    </p>
                </div>
                <div className='form-group'>
                    <h4>Datum do:</h4>
                    <input
                        type='date'
                        name='to'
                        value={to}
                        onChange={onChange}
                        disabled={current}
                    />
                </div>
                <div className='form-group'>
                    <textarea
                        name='description'
                        cols='30'
                        rows='5'
                        placeholder='Opis posla/pozicije'
                        value={description}
                        onChange={onChange}
                    />
                </div>
                <input type='submit' className='btn btn-primary my-1' />
                <Link className='btn btn-light my-1' to='/dashboard'>
                    Nazad
                </Link>
            </form>
        </Fragment>
    );
};

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
