import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './taskpage.module.css';
import { EditTask } from '../components/TaskPageEditTask';
import { useTask } from '../hooks/useTask';

export const TaskPage = () => {
	const { id } = useParams();
	const { task, error, isLoading, handleEditTask, handleDeleteTask } = useTask(id);
	const [isEditing, setIsEditing] = useState(false);
	const [isDeleted, setIsDeleted] = useState(false);
	const navigate = useNavigate();

	if (isLoading) {
		return <div className={styles.loader}></div>;
	}

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

	if (error || isDeleted) {
		return <h3 className={styles.error}>Задача не найдена</h3>;
	}

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

	const handleBackClick = () => {
		navigate(-1);
	};

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
