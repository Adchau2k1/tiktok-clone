import className from 'classnames/bind'
import styles from './Wrapper.module.scss'

const cx = className.bind(styles)

function Wrapper({ className, children }) {
    return <div className={cx('wrapper', className)}>{children}</div>
}

export default Wrapper
