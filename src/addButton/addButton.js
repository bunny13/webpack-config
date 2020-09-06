import './add-button.scss';

class AddButton {
    property = 'shashank'
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello Word';
        button.classList.add('hello-world-button'); 
        const body = document.querySelector('body');
        button.onclick = function () {
            const p =  document.createElement('p');
            p.innerHTML = 'hello world';
            p.classList.add('hello-world-p'); 
            body.appendChild(p);
        }
        body.append(button);
        console.log(this.property);
    }
}

export default AddButton;