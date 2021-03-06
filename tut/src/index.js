import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';

const heading1 = new Heading();
const helloWorldButton = new HelloWorldButton();

heading1.render();
helloWorldButton.render();

if(process.env.NODE_ENV === 'production') {
    console.log('Production mode');
} else if(process.env.NODE_ENV === 'development'){
    console.log('Development mode');
}