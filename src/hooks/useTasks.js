import { useState, useEffect } from 'react';
import { tasksAPI } from '../api/api';

export const useTasks = () => {
	const [tasks, setTasks] = useState([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		tasksAPI
			.fetchAll()
			.then(setTasks)
			.catch(() => setError('Ошибка при загрузке задач'))
			.finally(() => setIsLoading(false));
	}, []);

	const handleAddTask = (taskText) => {
		setError('');
		tasksAPI
			.create(taskText)
			.then((newTask) => {
				setTasks((prevTasks) => [...prevTasks, newTask]);
			})
			.catch((err) => setError(err.message));
	};

	const handleEditTask = (taskId, newText) => {
		setError('');
		tasksAPI
			.update(taskId, newText)
			.then((updatedTask) => {
				setTasks((prevTasks) =>
					prevTasks.map((task) => (task.id === taskId ? updatedTask : task)),
				);
			})
			.catch((err) => setError(err.message));
	};

	const handleDeleteTask = (taskId) => {
		setError('');
		tasksAPI
			.delete(taskId)
			.then(() => {
				setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
			})
			.catch((err) => setError(err.message));
	};

	return {
		tasks,
		error,
		isLoading,
		handleAddTask,
		handleEditTask,
		handleDeleteTask,
		setIsLoading,
	};
};
