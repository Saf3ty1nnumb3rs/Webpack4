import Katsu from './katsu.jpg';
import './katsu-image.scss';

class KatsuImage {
    render() {
        const img = document.createElement('img');
        img.src = Katsu;
        img.alt = 'Katsu';
        img.classList.add('katsu-image');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}

export default KatsuImage;