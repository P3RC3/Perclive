document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.onclick = function() {
        alert('Hello, welcome to my website!');
    };

    document.body.appendChild(button);
});