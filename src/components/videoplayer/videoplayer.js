import React from 'react';
import ReactPlayer from 'react-player';

function videoplayer () {
    return (
        <div>
            <ReactPlayer controls url='https://www.youtube.com/watch?v=7sDY4m8KNLc' />
        </div>
    )
}

export default videoplayer