import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
    education: { school, degree, fieldofstudy, current, to, from, description },
}) => {
    return (
        <div>
            <h3 className='text-dark'>{school}</h3>
            <p>
                <Moment format='DD/MM/YYYY'>{from}</Moment> -{' '}
                {!to ? 'Now' : <Moment format='DD/MM/YYYY'>{to}</Moment>}
            </p>
            <p>
                <strong>Diploma: </strong>
                {degree}
            </p>
            <p>
                <strong>Oblast: </strong>
                {fieldofstudy}
            </p>
            <p>
                <strong>Opis: </strong>
                {description}
            </p>
        </div>
    );
};

ProfileEducation.propTypes = { education: PropTypes.array.isRequired };

export default ProfileEducation;
