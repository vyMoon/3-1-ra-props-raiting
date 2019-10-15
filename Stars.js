import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

const Stars = ({ count }) => {
    if ( count === null || count < 1 || count > 5) {
        return null;
    }

    const elements = [];

    for (let i = 0; i < count; i++) {
        elements.push(
            <li key={i}>
                <Star />
            </li>
        )
    }
    return (
        <ul className="card-body-stars u-clearfix">
            {elements}
        </ul>
    )
}

Stars.propTypes = {
    count: PropTypes.number
};

Stars.defaultProps = {
    count: null
}

export default Stars;