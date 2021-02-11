import React from 'react';

import './BeautifulImage.css';

export default ({ img }) => <div className="BeautifulImage">
    <div className="embed-responsive embed-responsive-16by9 position-relative">
        <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, background: `url("${img}") no-repeat center`, backgroundSize: 'contain' }} />
    </div>
</div>;