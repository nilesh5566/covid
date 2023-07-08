const draggableItems = document.querySelectorAll('.draggable');
const droppableContainer = document.getElementById('droppable-container');
const successMessage = document.getElementById('success-message');

draggableItems.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

droppableContainer.addEventListener('dragover', dragOver);
droppableContainer.addEventListener('dragenter', dragEnter);
droppableContainer.addEventListener('dragleave', dragLeave);
droppableContainer.addEventListener('drop', drop);

function dragStart(e) {
  e.target.classList.add('dragging');
}

function dragEnd(e) {
  e.target.classList.remove('dragging');
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.target.classList.add('drag-over');
}

function dragLeave(e) {
  e.target.classList.remove('drag-over');
}

function drop(e) {
  e.preventDefault();
  const draggedItem = document.querySelector('.dragging');
  e.target.appendChild(draggedItem);
  e.target.classList.remove('drag-over');
  
  successMessage.textContent = 'Item dropped successfully!';
}

function resetContainers() {
  droppableContainer.innerHTML = '<p>Drop items here</p>';
  successMessage.textContent = '';
  draggableItems.forEach(item => {
    document.querySelector('.container').appendChild(item);
  });
}