import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const EditProfile = ({
    profile: { profile, loading },
    createProfile,
    getCurrentProfile,
    history,
}) => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: '',
    });
    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    useEffect(() => {
        getCurrentProfile();
        setFormData({
            company: loading || !profile.company ? '' : profile.company,
            website: loading || !profile.website ? '' : profile.website,
            location: loading || !profile.location ? '' : profile.location,
            status: loading || !profile.status ? '' : profile.status,
            skills: loading || !profile.skills ? '' : profile.skills.join(','),
            githubusername:
                loading || !profile.githubusername
                    ? ''
                    : profile.githubusername,
            bio: loading || !profile.bio ? '' : profile.bio,
            twitter: loading || !profile.social ? '' : profile.social.twitter,
            facebook: loading || !profile.social ? '' : profile.social.facebook,
            linkedin: loading || !profile.social ? '' : profile.social.linkedin,
            youtube: loading || !profile.social ? '' : profile.social.youtube,
            instagram:
                loading || !profile.social ? '' : profile.social.instagram,
        });
    }, [loading]);

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram,
    } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, history, true);
    };
    return (
        <Fragment>
            <h1 className='large text-primary'>Create Your Profile</h1>
            <p className='lead'>
                <i className='fa fa-user'></i> Dodajte informacije o sebi
            </p>
            <small>* = obavezna polja</small>
            <form className='form' onSubmit={(e) => onSubmit(e)}>
                <div className='form-group'>
                    <select
                        name='status'
                        value={status}
                        onChange={(e) => onChange(e)}
                    >
                        <option value='0'>* Izaberite status</option>
                        <option value='Developer'>Developer</option>
                        <option value='Junior Developer'>
                            Junior Developer
                        </option>
                        <option value='Senior Developer'>
                            Senior Developer
                        </option>
                        <option value='Manager'>Manager</option>
                        <option value='Student or Learning'>
                            Student or Learning
                        </option>
                        <option value='Instructor'>
                            Instructor or Teacher
                        </option>
                        <option value='Intern'>Intern</option>
                        <option value='Other'>Other</option>
                    </select>
                    <small className='form-text'>
                    Trenutni poslovni status
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Company'
                        name='company'
                        value={company}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='form-text'>
                    Vaša ili kompanija za koju radite
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Website'
                        name='website'
                        value={website}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='form-text'>
                    Website vaše ili kompanija za koju radite
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Location'
                        name='location'
                        value={location}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='form-text'>
                    Grad, Drzava
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* Skills'
                        name='skills'
                        value={skills}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='form-text'>
                    (eg.
                        HTML,CSS,JavaScript,PHP)
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Github Username'
                        name='githubusername'
                        value={githubusername}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='form-text'>
                        
                    </small>
                </div>
                <div className='form-group'>
                    <textarea
                        placeholder='Kratka biografija'
                        name='bio'
                        value={bio}
                        onChange={(e) => onChange(e)}
                    ></textarea>
                    <small className='form-text'>
                    Recite nam više o sebi
                    </small>
                </div>

                <div className='my-2'>
                    <button
                        onClick={() => toggleSocialInputs(!displaySocialInputs)}
                        type='button'
                        className='btn btn-light'
                    >
                        Dodajte linkove do drugih mreža
                    </button>
                    <span>Opciono</span>
                </div>

                {displaySocialInputs && (
                    <Fragment>
                        <div className='form-group social-input'>
                            <i className='fa fa-twitter fa-2x'></i>
                            <input
                                type='text'
                                placeholder='Twitter URL'
                                name='twitter'
                                value={twitter}
                                onChange={(e) => onChange(e)}
                            />
                        </div>

                        <div className='form-group social-input'>
                            <i className='fa fa-facebook fa-2x'></i>
                            <input
                                type='text'
                                placeholder='Facebook URL'
                                name='facebook'
                                value={facebook}
                                onChange={(e) => onChange(e)}
                            />
                        </div>

                        <div className='form-group social-input'>
                            <i className='fa fa-youtube fa-2x'></i>
                            <input
                                type='text'
                                placeholder='YouTube URL'
                                name='youtube'
                                value={youtube}
                                onChange={(e) => onChange(e)}
                            />
                        </div>

                        <div className='form-group social-input'>
                            <i className='fa fa-linkedin fa-2x'></i>
                            <input
                                type='text'
                                placeholder='Linkedin URL'
                                name='linkedin'
                                value={linkedin}
                                onChange={(e) => onChange(e)}
                            />
                        </div>

                        <div className='form-group social-input'>
                            <i className='fa fa-instagram fa-2x'></i>
                            <input
                                type='text'
                                placeholder='Instagram URL'
                                name='instagram'
                                value={instagram}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                    </Fragment>
                )}

                <input type='submit' className='btn btn-primary my-1' />
                <Link className='btn btn-light my-1' to='/dashboard'>
                    Nazad
                </Link>
            </form>
        </Fragment>
    );
};

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
    withRouter(EditProfile)
);
