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

	return {
		tasks,
		error,
		isLoading,
		handleAddTask,
		setIsLoading,
	};
};
