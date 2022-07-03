export const handleAddTask = params => {
  params.e.preventDefault();

  if (params.taskStatus === 'add') {
    const newTask = {
      id: params.tasks.length + 1,
      name: params.task,
      isComplete: false,
    };

    params.setTasks([...params.tasks, newTask]);
  } else {
    const newTasks = params.tasks.map(currentTask => {
      if (currentTask.id === params.id) {
        currentTask.name = params.task;
        return currentTask;
      }

      return currentTask;
    });

    params.setTasks(newTasks);
  }

  params.setTask('');
  params.setTaskStatus('add');
};

export const handleClearCompletedTasks = params => {
  const filteredTasks = params.tasks.filter(task => task.isComplete === false);

  params.setTasks(filteredTasks);
};

export const handleDeleteTask = params => {
  const filteredTasks = params.tasks.filter(task => task.id !== params.id);

  params.setTasks(filteredTasks);
};

export const handleEditTask = params => {
  params.setTaskStatus('edit');
  const foundTask = params.tasks.find(task => task.id === params.id);
  const inputs = window.document.getElementsByName('task');
  inputs[0].value = foundTask.name;

  params.setTask(inputs[0].value);
};

export const handleComplete = params => {

  const foundTask = params.tasks.find(task => task.id === params.id);

  const newTasks = params.tasks.map(currentTask => {
    if (currentTask.id === params.id) {
      currentTask.isComplete = !params.isComplete;
      return currentTask;
    }

    return currentTask;
  });

  params.setTasks(newTasks);

};
