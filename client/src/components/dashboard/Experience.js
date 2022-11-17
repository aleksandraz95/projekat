import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import Moment from 'react-moment';
const Experience = ({ experience, deleteExperience }) => {
    const experiences = experience.map((exp) => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td className='hide-sm'>{exp.title}</td>
            <td>
                <Moment format='DD/MM/YYYY'>{exp.from}</Moment> -{' '}
                {exp.to === null ? (
                    'Now'
                ) : (
                    <Moment format='DD/MM/YYYY'>{exp.to}</Moment>
                )}
            </td>
            <td>
                <button
                    onClick={() => deleteExperience(exp._id)}
                    className='btn btn-danger'
                >
                    Obriši
                </button>
            </td>
        </tr>
    ));
    return (
        <Fragment>
            <h2 className='my-2'>Iskustvo</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Firma</th>
                        <th className='hide-sm'>Pozicija</th>
                        <th className='hide-sm'>Godine</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </Fragment>
    );
};

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
