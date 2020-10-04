import '../css/style.css';

(async function() {
    let { text } = await (await fetch(`/api/message`)).json();
    document.querySelector('#name').textContent = text;
}())