document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    alert(`Próba logowania użytkownika: ${user} do serwisu Qooqle`);
});
