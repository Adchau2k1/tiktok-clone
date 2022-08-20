import className from 'classnames/bind'
import styles from './Menu.module.scss'
import Button from '~/components/Button'

const cx = className.bind(styles)

function MenuItem({ item, onClick }) {
    return (
        <Button className={cx('menu-item')} icon={item.icon} to={item.to} onClick={onClick}>
            {item.title}
        </Button>
    )
}

export default MenuItem
