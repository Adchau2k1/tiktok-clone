import PropTypes from 'prop-types'
import className from 'classnames/bind'
import styles from './Menu.module.scss'
import Button from '~/components/Button'

const cx = className.bind(styles)

function MenuItem({ item, onClick }) {
    const classes = cx('menu-item', { separate: item.separate })

    return (
        <Button className={classes} leftIcon={item.icon} to={item.to} onClick={onClick}>
            {item.title}
        </Button>
    )
}

MenuItem.prototype = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

export default MenuItem
