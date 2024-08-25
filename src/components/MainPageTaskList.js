import React from 'react';
import { MainPageTaskItem } from './MainPageTaskItem';
import { filterTasks, sortTasks } from '../utils/utils';
import styles from './main-page_task-list.module.css';

export const TaskList = ({ tasks, searchQuery, isSorted, isLoading }) => {
	const filteredTasks = sortTasks(filterTasks(tasks, searchQuery), isSorted);

	return (
		<div>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<ul className={styles['tasks-block-list']}>
					{filteredTasks.map((task) => (
						<MainPageTaskItem key={task.id} task={task} />
					))}
				</ul>
			)}
		</div>
	);
};
