import { useState, useEffect } from 'react';
import { tasksAPI } from '../api/api';

export const useTask = (id) => {
	const [task, setTask] = useState(null);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		tasksAPI
			.fetchById(id)
			.then(setTask)
			.catch(() => setError('Ошибка при загрузке задачи'))
			.finally(() => setIsLoading(false));
	}, [id]);

	const handleEditTask = (taskId, newText) => {
		setError('');
		tasksAPI
			.update(taskId, newText)
			.then((updatedTask) => {
				setTask(updatedTask);
			})
			.catch((err) => setError(err.message));
	};

	const handleDeleteTask = (taskId) => {
		setError('');
		tasksAPI
			.delete(taskId)
			.then(() => {
				setTask(null);
			})
			.catch((err) => setError(err.message));
	};

	return { task, error, isLoading, handleEditTask, handleDeleteTask };
};
