document.querySelectorAll('.kaban-card').forEach(card => {
    card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('dragging');
    })

    card.addEventListener('dragend', e => {
        e.currentTarget.classList.remove('dragging');
    })
})

document.querySelectorAll('.kanban-cards').forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
        e.currentTarget.classList.add('cards-hover');
   
    })
})