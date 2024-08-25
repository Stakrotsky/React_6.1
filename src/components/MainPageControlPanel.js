import { useState } from 'react';
import styles from './main-page_control-panel.module.css';

export const ControlPanel = ({ handleAddTask, setSearchQuery, toggleSort, isSorted }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleAdd = (e) => {
		e.preventDefault();
		handleAddTask(inputValue);
		setInputValue('');
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<div>
			<form onSubmit={handleAdd}>
				<div className={styles['input-block']}>
					<input
						type="text"
						value={inputValue}
						onChange={handleInputChange}
						placeholder="Ввести новую задачу"
					/>
					<button
						type="submit"
						className={styles.button + ' ' + styles['add-task-button']}
					>
						Добавить задачу
					</button>
				</div>
			</form>
			<div className={styles['input-block']}>
				<input
					type="text"
					onChange={handleSearchChange}
					placeholder="Поиск задач"
				/>
				<button
					className={styles.button + ' ' + styles['sort-button']}
					onClick={toggleSort}
				>
					{isSorted ? 'Отмена сортировки' : 'Сортировать по алфавиту'}
				</button>
			</div>
		</div>
	);
};
