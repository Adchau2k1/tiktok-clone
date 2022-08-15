import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import className from 'classnames/bind'
import styles from './Button.module.scss'

const cx = className.bind(styles)

function Button({
	to,
	href,
	icon = false,
	primary = false,
	outline = false,
	text = false,
	rounded = false,
	disabled = false,
	small = false,
	large = false,
	className,
	onClick,
	children,
	...passProps
}) {
	let Component = 'button'
	const classes = cx('wrapper', {
		[className]: className,
		primary,
		outline,
		text,
		rounded,
		disabled,
		small,
		large,
	})
	const props = {
		onClick,
		...passProps,
	}

	if (to) {
		props.to = to
		Component = Link
	} else if (href) {
		props.href = href
		Component = 'a'
	}

	// Xóa bỏ onClick khi có disabled
	if (disabled)
		Object.keys(props).forEach(key => {
			if (key.startsWith('on') && typeof props[key] === 'function') delete props[key]
		})

	return (
		<Component className={classes} {...props}>
			{icon.at === 'left' && (
				<FontAwesomeIcon className={cx(icon.className)} icon={icon.name} />
			)}
			<span className={cx('title')}>{children}</span>
			{icon.at === 'right' && (
				<FontAwesomeIcon className={cx(icon.className)} icon={icon.name} />
			)}
		</Component>
	)
}

export default Button
