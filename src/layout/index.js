import template from './layout.html';
console.log("template==> " + template);


export default class Layout {
    render() {
        document.querySelector('body').innerHTML = template;

    }

}