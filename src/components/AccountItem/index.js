import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import className from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = className.bind(styles)

function AccountItem() {
	return (
		<div className={cx('wrapper')}>
			<img
				className={cx('avatar')}
				src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/11dae3f0f4f7ad437f886790ee3724e5~c5_100x100.jpeg?x-expires=1660676400&x-signature=YxI5i3NrtS9jjqEUVysswwBKnSs%3D"
				alt="avatar"
			/>
			<div className={cx('info')}>
				<h4 className={cx('info-user')}>
					<span className={cx('username')}>test.dev</span>
					<FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
				</h4>
				<span className={cx('name')}>Test Dev</span>
			</div>
		</div>
	)
}

export default AccountItem
