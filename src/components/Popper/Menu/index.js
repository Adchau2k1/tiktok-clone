import Tippy from '@tippyjs/react/headless'
import className from 'classnames/bind'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

const cx = className.bind(styles)

function Menu({ items, children }) {
    const renderItems = () => items.map((item, index) => <MenuItem key={index} item={item} />)

    return (
        <Tippy
            delay={(0, 500)}
            interactive
            placement='bottom-end'
            // visible
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu
