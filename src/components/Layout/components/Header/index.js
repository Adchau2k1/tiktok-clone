import { Link } from 'react-router-dom'
import className from 'classnames/bind'
import styles from './Header.module.scss'

const cx = className.bind(styles)

function Header() {
	return (
		<header className={cx('wrapper')}>
			<nav className={cx('inner')}>
				<ul className={cx('nav')}>
					<li>
						<Link className={cx('nav__item')} to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className={cx('nav__item')} to="/search">
							Search
						</Link>
					</li>
					<li>
						<Link className={cx('nav__item')} to="/following">
							Follow
						</Link>
					</li>
					<li>
						<Link className={cx('nav__item')} to="/upload">
							Upload
						</Link>
					</li>
					<li>
						<Link className={cx('nav__item')} to="/profile">
							Profile
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
