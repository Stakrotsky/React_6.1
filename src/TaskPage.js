import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './taskpage.module.css';
import { EditTask } from './components/TaskPageEditTask';
import { useTasks } from './hooks/useTasks';

export const TaskPage = () => {
	const { tasks, handleEditTask, handleDeleteTask } = useTasks();
	const [isEditing, setIsEditing] = useState(false);
	const [isDeleted, setIsDeleted] = useState(false);
	const navigate = useNavigate();
	const { id } = useParams();

	const task = tasks.find((task) => task.id === Number(id));

	if (!task && !isDeleted) {
		return <h3 className={styles.error}>Задача не найдена</h3>;
	}

	const handleBackClick = () => {
		navigate(-1);
	};

	const handleSaveEdit = (taskId, newText) => {
		handleEditTask(taskId, newText);
		setIsEditing(false);
	};

	const cancelEdit = () => {
		setIsEditing(false);
	};

	const handleDelete = (taskId) => {
		handleDeleteTask(taskId);
		setIsDeleted(true);

		setTimeout(() => {
			navigate(-1);
		}, 5000);
	};

	if (isDeleted) {
		return (
			<div>
				<div className={styles.loader}></div>
				<p>
					Задача была удалена. Возврат на предыдущую страницу через 5 секунд...
				</p>
			</div>
		);
	}

	return (
		<div>
			<h3 className={styles.title}>Выбранная задача:</h3>
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
								onClick={() => handleDelete(task.id)}
								className={styles['delete-button']}
							>
								Удалить
							</button>
							<button onClick={handleBackClick}>Назад</button>
						</div>
					</div>
				)}
			</li>
		</div>
	);
};
