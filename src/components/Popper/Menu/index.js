import { useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import className from 'classnames/bind'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Menu.module.scss'
import Header from './Header'
import MenuItem from './MenuItem'

const cx = className.bind(styles)
const defaultFn = () => {}

function Menu({ items = [], onChange = defaultFn, children }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItems = () =>
        current.data.map((item, index) => {
            const isParent = !!item.children
            const handleNext = (item) => {
                if (isParent) setHistory((prev) => [...prev, item.children])
                else onChange(item)
            }

            return <MenuItem key={index} item={item} onClick={() => handleNext(item)} />
        })

    const handleBack = () => setHistory((prev) => prev.slice(0, prev.length - 1))

    return (
        <Tippy
            delay={(0, 500)}
            offset={[16, 8]}
            interactive
            placement='bottom-end'
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu
