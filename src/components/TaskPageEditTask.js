import React, { useState } from 'react';
import styles from '../taskpage.module.css';

export const EditTask = ({ task, handleSaveEdit, cancelEdit }) => {
	const [editText, setEditText] = useState(task.text);

	const handleSave = (e) => {
		e.preventDefault();
		handleSaveEdit(task.id, editText);
	};

	return (
		<form onSubmit={handleSave} className={styles['task-item-content']}>
			<input
				type="text"
				value={editText}
				onChange={(e) => setEditText(e.target.value)}
				className={styles['task-input']}
			/>
			<div className={styles['task-item-buttons']}>
				<button type="submit" className={styles['save-button']}>
					Сохранить
				</button>
				<button
					type="button"
					onClick={cancelEdit}
					className={styles['cancel-save-button']}
				>
					Отмена
				</button>
			</div>
		</form>
	);
};
