import React from 'react';
import {SchemeColor} from '../SchemeColor';
import './style.css';

export const Palette = ({paletteData}) => {
    const { name, image, attribution, colors, direction, description } = paletteData;
    return (
        <div className="palette">
            <div className={(direction == 'vertical') ? 'palette-scheme palette-scheme--vertical':'palette-scheme palette-scheme--horizontal'}>
                <img className="scheme-image" src={image} alt="image" />
                <div className="scheme-colors">
                {colors.map((color) => (<SchemeColor key={color} color={color} />))}
                </div>
            </div>
            <div className="palette-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Photo by <a href={attribution.url} target="_blank">{attribution.name}</a>.</p>
            </div>
        </div>
    )
};
