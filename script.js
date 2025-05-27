const form = document.getElementById('loginForm');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const matricula = document.getElementById('matricula').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ matricula, senha })
        });

        const data = await response.json();

        if (response.ok) {
        console.log(data);
        } else {
        console.log(data)
        }
    } catch (error) {
        console.error('Erro:', error);
        console.log('Erro ao enviar os dados');
    }
});