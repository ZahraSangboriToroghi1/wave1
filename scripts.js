document.getElementById('account-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Account settings saved');
});

document.querySelector('.save-username').addEventListener('click', function() {
    console.log('Username saved');
});

document.querySelectorAll('.connect-account').forEach(button => {
    button.addEventListener('click', function() {
        console.log('Connected to ' + this.previousElementSibling.textContent);
    });
});

document.querySelector('.delete-account').addEventListener('click', function() {
    console.log('Account deleted');
});
