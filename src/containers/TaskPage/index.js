import React, { useState } from 'react';
import Button from '../../components/Button';
import Entry from '../../components/Entry';
import TextField from '../../components/TextField';
import './index.css';
import data from '../../data/tasks.json';
import {
  handleAddTask,
  handleClearCompletedTasks,
  handleDeleteTask,
  handleEditTask,
  handleComplete,
} from './utils';

export default function TaskPage() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(data);
  const [taskStatus, setTaskStatus] = useState('add');
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedTaskIdForComplete, setSelectedTaskIdForComplete] =
    useState(null);

  return (
    <div id='taskContainer'>
      <p>Task</p>
      <form
        id='addTaskGroup'
        onSubmit={e =>
          handleAddTask({
            e,
            task,
            tasks,
            setTask,
            setTasks,
            taskStatus,
            setTaskStatus,
            id: selectedTaskId,
          })
        }
      >
        <TextField
          type='text'
          label=''
          name='task'
          value={task}
          onChange={e => setTask(e.target.value)}
          status={taskStatus}
          handleAddTask={e =>
            handleAddTask({
              e,
              task,
              tasks,
              setTask,
              setTasks,
              taskStatus,
              setTaskStatus,
              id: selectedTaskId,
            })
          }
        />
      </form>
      <div id='clearCompletedGroup'>
        <Button onClick={() => handleClearCompletedTasks({ tasks, setTasks })}>
          Clear completed
        </Button>
      </div>

      <div id='entryGroup'>
        {tasks.map((task, index) => (
          <Entry
            key={index}
            onClickComplete={() => {
              handleComplete({
                id: task.id,
                tasks,
                setTasks,
                isComplete: task.isComplete,
              });
            }}
            onClickEdit={() => {
              setSelectedTaskId(task.id);
              handleEditTask({ id: task.id, tasks, setTask, setTaskStatus });
            }}
            onClickDelete={() =>
              handleDeleteTask({ id: task.id, tasks, setTasks })
            }
            isComplete={task.isComplete}
          >
            {task.name}
          </Entry>
        ))}
      </div>
    </div>
  );
}
