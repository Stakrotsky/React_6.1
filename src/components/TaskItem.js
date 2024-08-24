import React, { useState } from 'react';
import styles from './TaskItem.module.css';
import { EditTask } from './EditTask';

export const TaskItem = ({ task, handleEditTask, handleDeleteTask }) => {
	const [isEditing, setIsEditing] = useState(false);

	const handleSaveEdit = (taskId, newText) => {
		handleEditTask(taskId, newText);
		setIsEditing(false);
	};

	const cancelEdit = () => {
		setIsEditing(false);
	};

	return (
		<li className={styles['tasks-block-item']}>
			{isEditing ? (
				<EditTask
					task={task}
					handleSaveEdit={handleSaveEdit}
					cancelEdit={cancelEdit}
				/>
			) : (
				<div className={styles['task-item-content']}>
					<span>{task.text}</span>
					<div className={styles['task-item-buttons']}>
						<button onClick={() => setIsEditing(true)}>Изменить</button>
						<button
							onClick={() => handleDeleteTask(task.id)}
							className={styles['delete-button']}
						>
							Удалить
						</button>
					</div>
				</div>
			)}
		</li>
	);
};
