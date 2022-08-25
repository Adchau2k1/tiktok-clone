import { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'
import styles from './Image.module.scss'
import images from '~/assets/images'

const cx = className.bind(styles)

const Image = forwardRef(
    ({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
        const [fallback, setFallback] = useState('')
        const handleError = () => setFallback(customFallback)

        return (
            <img
                ref={ref}
                src={fallback || src}
                alt={alt}
                className={cx('wrapper', className)}
                {...props}
                onError={handleError}
            />
        )
    }
)

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image
