import className from 'classnames/bind'
import Header from '../components/Header'
import Sidebar from './Sidebar'
import styles from './Default.module.scss'

const cx = className.bind(styles)

function DefaultLayout({ children }) {
	return (
		<div className={cx('wrapper')}>
			<Header />
			<div className={cx('container')}>
				<Sidebar />
				<div className={cx('content')}>{children}</div>
			</div>
		</div>
	)
}

export default DefaultLayout
