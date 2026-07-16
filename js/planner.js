const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const totalTasksEl = document.getElementById('total-tasks');
const pendingTasksEl = document.getElementById('pending-tasks');
const completedTasksEl = document.getElementById('completed-tasks');

let tasks = [];

// Initialize
function renderTasks() {
  taskList.innerHTML = '';
  
  let completedCount = 0;
  
  tasks.forEach((task, index) => {
    if (task.completed) completedCount++;
    
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    
    li.innerHTML = `
      <span class="task-text">${task.text}</span>
      <div class="task-actions">
        <button class="btn-icon btn-complete" onclick="toggleTask(${index})" title="Toggle Complete">
          ${task.completed ? '&#8634;' : '&#10003;'}
        </button>
        <button class="btn-icon btn-delete" onclick="deleteTask(${index})" title="Delete Task">
          &times;
        </button>
      </div>
    `;
    
    taskList.appendChild(li);
  });
  
  // Update stats
  totalTasksEl.textContent = tasks.length;
  completedTasksEl.textContent = completedCount;
  pendingTasksEl.textContent = tasks.length - completedCount;
}

function addTask(e) {
  e.preventDefault();
  const text = taskInput.value.trim();
  
  if (text !== '') {
    tasks.push({
      text: text,
      completed: false
    });
    taskInput.value = '';
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Event Listeners
if (addTaskBtn) {
  addTaskBtn.addEventListener('click', addTask);
}

// Also allow pressing enter
if (taskInput) {
  taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addTask(e);
    }
  });
}

// Initial render
renderTasks();
