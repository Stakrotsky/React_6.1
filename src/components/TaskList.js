import React from 'react';
import styles from './TaskList.module.css';
import { TaskItem } from './TaskItem';
import { filterTasks, sortTasks } from '../utils/utils';

export const TaskList = ({
	tasks,
	searchQuery,
	isSorted,
	isLoading,
	handleEditTask,
	handleDeleteTask,
}) => {
	const filteredTasks = sortTasks(filterTasks(tasks, searchQuery), isSorted);

	return (
		<div>
			<h3 className={styles.title}>Текущие задачи:</h3>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<ul className={styles['tasks-block-list']}>
					{filteredTasks.map((task) => (
						<TaskItem
							key={task.id}
							task={task}
							handleEditTask={handleEditTask}
							handleDeleteTask={handleDeleteTask}
						/>
					))}
				</ul>
			)}
		</div>
	);
};
