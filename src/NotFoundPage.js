import React from 'react';
import { Link } from 'react-router-dom';
import styles from './notfoundpage.module.css';

export const NotFoundPage = () => (
	<div className={styles['not-found-page-container']}>
		<h3 className={styles.title}>404 - Страница не найдена</h3>
		<Link to="/">
			<button className={styles.button}>Вернуться на главную</button>
		</Link>
	</div>
);
