document.querySelectorAll('.kaban-card').forEach(card => {
    card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('dragging');
    })
})