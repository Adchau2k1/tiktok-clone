import className from 'classnames/bind'
import styles from './Menu.module.scss'
import Button from '~/components/Button'

const cx = className.bind(styles)

function MenuItem({ item, onClick }) {
    const classes = cx('menu-item', { separate: item.separate })

    return (
        <Button className={classes} icon={item.icon} to={item.to} onClick={onClick}>
            {item.title}
        </Button>
    )
}

export default MenuItem
