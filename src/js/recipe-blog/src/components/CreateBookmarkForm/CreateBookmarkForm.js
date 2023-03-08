import React, { useState } from 'react';
import './CreateBookmarkForm.scss';

import Heading from '../Heading/Heading';

const CreateBookmarkForm = (props) => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [section, setSection] = useState(props.sections[0]);
    const [newSectionName, setNewSectionName] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = {};

        if (!name) {
            formErrors.name = 'Name is required';
        }

        if (!url) {
            formErrors.url = 'URL is required';
        } else if (!isValidUrl(url)) {
            formErrors.url = 'Please enter a valid URL';
        }

        if (section === 'Create new section' && !newSectionName) {
            formErrors.newSectionName = 'New section name is required';
        }

        setErrors(formErrors);
        if (Object.keys(formErrors).length > 0) {
            return;
        }

        // Is valid so submit to API
        let formData = {
            bookmarksPageId: props.bookmarksPageId,
            name,
            url,
            sectionId: section === '' ? undefined : section,
            newSectionName: section === '' ? newSectionName : undefined
        };

        if (!props.submitUrl) {
            console.error("No submitUrl provided, but check logs to see what would be submitted");
            console.log("Form data: ", formData);
            return;
        }

        fetch(props.submitUrl,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                response.json();
            })
            .then(data => {
                console.log(data);
                window.location.reload();
            })
            .catch(error => console.error(error));
    };

    const isValidUrl = (url) => {
        // Regular expression for URL validation
        const urlRegex = /^(https):\/\/[^ "]+$/;
        return urlRegex.test(url);
    };

    return (
        <form
            className='create-bookmark-form'
            onSubmit={handleSubmit}
        >
            <Heading
                text={props.heading}
                level={2}
            />
            <div className='field'>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    aria-describedby={errors.name ? 'name-error' : null}
                />
                {errors.name && <div id="name-error" className='error'>{errors.name}</div>}
            </div>
            <div className='field'>
                <label htmlFor="url">URL</label>
                <input
                    type="text"
                    id="url"
                    name="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                    aria-describedby={errors.url ? 'url-error' : null}
                />
                {errors.url && <div id="url-error" className='error'>{errors.url}</div>}
            </div>
            <div className='field'>
                <label htmlFor="section">Section</label>
                <select
                    id="section"
                    name="section"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    aria-label="Select section that the bookmark should live in"
                    required
                >
                    {props.sections.map((section, index) => (
                        <option key={index} value={section.sectionId}>
                            {section.heading}
                        </option>
                    ))}
                    <option value="">Create new section</option>
                </select>
            </div>
            <div className='field'>
                <label htmlFor="newSectionName">New Section Name</label>
                <input
                    type="text"
                    id="newSectionName"
                    name="newSectionName"
                    value={newSectionName}
                    disabled={section !== ''}
                    required={section === ''}
                    onChange={(e) => setNewSectionName(e.target.value)}
                    aria-describedby={errors.newSectionName ? 'newSectionName-error' : null}
                />
                {errors.newSectionName && <div id="newSectionName" className='error'>{errors.url}</div>}
            </div>
            <button type="submit" className='submit-button'>
                Submit
            </button>
        </form>
    );
};

export default CreateBookmarkForm;
