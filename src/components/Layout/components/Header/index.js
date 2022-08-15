import { useState } from 'react'
import className from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCircleXmark,
	faMagnifyingGlass,
	faPlus,
	faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'
import styles from './Header.module.scss'
import images from '~/assets/images'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'

const cx = className.bind(styles)

function Header() {
	const [searchResult, setSearchResult] = useState([])

	return (
		<header className={cx('wrapper')}>
			<div className={cx('logo')}>
				<div className={cx('inner')}>
					<img src={images.logo} alt="Logo" />

					<Tippy
						interactive={true}
						visible={searchResult.length > 0}
						render={attrs => (
							<div className={cx('search-result')} tabIndex="-1" {...attrs}>
								<PopperWrapper>
									<h4 className={cx('title')}>Tài khoản</h4>
									<AccountItem />
									<AccountItem />
									<AccountItem />
									<AccountItem />
									<AccountItem />
								</PopperWrapper>
							</div>
						)}
					>
						<div className={cx('search')}>
							<input placeholder="Tìm kiếm tài khoản và video" />
							<button className={cx('clear')}>
								<FontAwesomeIcon icon={faCircleXmark} />
							</button>
							<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
							<button className={cx('search-btn')}>
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</button>
						</div>
					</Tippy>

					<div className={cx('actions')}>
						<Button icon={{ at: 'left', className: `icon`, name: faPlus }} outline text>
							Tải lên
						</Button>

						{/* custom button add: className={cx('custom-login')} */}
						<Button primary>Đăng nhập</Button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
