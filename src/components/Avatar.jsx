import React from 'react';
import '../styles/styles.css';
import Images from './Images'

const Avatar = () => {
    return (
        <div className="avatar">
            <img src= {Images.pro} alt="Avatar" />
        </div>
    );
}

export default Avatar;