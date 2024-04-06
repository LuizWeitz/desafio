document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
  
    // Criar as células do tabuleiro
    for (let i = 0; i < 64; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      if ((i + Math.floor(i / 8)) % 2 === 0) {
        cell.classList.add('white');
      } else {
        cell.classList.add('black');
      }
  
      // Adicionar eventos de drag and drop
      cell.setAttribute('ondragover', 'allowDrop(event)');
      cell.setAttribute('ondrop', 'drop(event)');
  
      board.appendChild(cell);
    }
  
    // Adicionar rainha
    const queen = document.createElement('div');
    queen.classList.add('queen');
    queen.setAttribute('draggable', 'true');
    queen.setAttribute('ondragstart', 'drag(event)');
    document.querySelector('.cell').appendChild(queen);
  });
  
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
  }
  