import styles from './main-page_task-item.module.css';
import { Link } from 'react-router-dom';

export const MainPageTaskItem = ({ task }) => {
	return (
		<Link to={`/task/${task.id}`} className={styles['task-link']}>
			<li className={styles['tasks-block-item']}>
				{task.text.length > 80 ? `${task.text.substring(0, 80)}...` : task.text}
			</li>
		</Link>
	);
};
