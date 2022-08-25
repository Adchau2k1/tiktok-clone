import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import className from 'classnames/bind'
import styles from './AccountItem.module.scss'
import Image from '../Image'
import images from '~/assets/images'

const cx = className.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.nickname}
                fallback={images.avatarDefault}
            />
            <div className={cx('info')}>
                <h4 className={cx('info-user')}>
                    <span className={cx('username')}>{data.nickname}</span>
                    {data.tick && (
                        <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                    )}
                </h4>
                <span className={cx('name')}>{data.full_name}</span>
            </div>
        </Link>
    )
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem
