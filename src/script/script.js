// script.js

function openModal(status) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('status').value = status;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('taskForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const prioridade = document.getElementById('prioridade').value;
    const status = document.getElementById('status').value;

    try {
        const response = await fetch('http://localhost:5000/tarefas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                titulo,
                descricao,
                data_vencimento: new Date(), 
                prioridade,
                status
            })
        });

        if (!response.ok) {
            throw new Error('Erro ao adicionar a tarefa.');
        }

        const novaTarefa = await response.json();
        alert('Tarefa adicionada com sucesso!');
        closeModal();
        
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao adicionar a tarefa.');
    }
});







