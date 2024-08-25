import React, { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import { TaskList } from './components/MainPageTaskList';
import { ControlPanel } from './components/MainPageControlPanel';
import styles from './app.module.css';

export const MainPage = () => {
	const { tasks, error, isLoading, handleAddTask } = useTasks();

	const [searchQuery, setSearchQuery] = useState('');
	const [isSorted, setIsSorted] = useState(false);

	const toggleSort = () => {
		setIsSorted((prevIsSorted) => !prevIsSorted);
	};

	return (
		<div>
			<h3 className={styles.title}>Текущие задачи:</h3>
			<ControlPanel
				handleAddTask={handleAddTask}
				setSearchQuery={setSearchQuery}
				toggleSort={toggleSort}
				isSorted={isSorted}
			/>
			<TaskList
				tasks={tasks}
				searchQuery={searchQuery}
				isSorted={isSorted}
				isLoading={isLoading}
			/>
			{error && <div className={styles.error}>{error}</div>}
		</div>
	);
};
