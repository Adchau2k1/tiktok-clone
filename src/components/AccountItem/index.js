import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import className from 'classnames/bind'
import styles from './AccountItem.module.scss'
import images from '~/assets/images'

const cx = className.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/cb9f67fa55c3dd4934a535d15e5dd8c2~c5_100x100.jpeg?x-expires=1661011200&x-signature=UlmQghuFJ0rUGoaWEkBljb%2BGpDk%3D'
                alt='avatar'
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
