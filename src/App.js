import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import { MainPage } from './MainPage';
import { TaskPage } from './TaskPage';
import { NotFoundPage } from './NotFoundPage';

export const App = () => {
	return (
		<Router>
			<div className={styles.app}>
				<Routes>
					<Route exact path="/" element={<MainPage />} />
					<Route path="/task/:id" element={<TaskPage />} />
					<Route path="/404" element={<NotFoundPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</div>
		</Router>
	);
};
