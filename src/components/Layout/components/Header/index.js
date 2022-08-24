import { useState } from 'react'
import { Link } from 'react-router-dom'
import className from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faQuestionCircle,
    faKeyboard,
    faUser,
    faCoins,
    faCog,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'

import routes from '~/config/routes'
import styles from './Header.module.scss'
import 'tippy.js/dist/tippy.css'
import images from '~/assets/images'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import { InboxIcon, MessagesIcon } from '~/components/Icons'
import Image from '~/components/Image'
import Search from '../Search'

const cx = className.bind(styles)

const MENU_ITEM = [
    {
        icon: { at: 'left', className: 'icon', name: faEarthAsia },
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: { at: 'left', className: 'icon', name: faQuestionCircle },
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: { at: 'left', className: 'icon', name: faKeyboard },
        title: 'Phím tắt trên bàn phím',
    },
]

function Header() {
    const currentUser = true
    const [currentInbox, setCurrentInbox] = useState(25)

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                alert('Đã đổi ngôn ngữ')
            default:
        }
    }

    const userMenu = [
        {
            icon: { at: 'left', className: 'icon', name: faUser },
            title: 'Xem hồ sơ',
            to: '/@devchau',
        },
        {
            icon: { at: 'left', className: 'icon', name: faCoins },
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: { at: 'left', className: 'icon', name: faCog },
            title: 'Cài đặt',
            to: '/setting',
        },

        ...MENU_ITEM,
        {
            icon: { at: 'left', className: 'icon', name: faSignOut },
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt='Logo' />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button
                                icon={{ at: 'left', className: `icon`, name: faPlus }}
                                outline
                                text
                            >
                                Tải lên
                            </Button>
                            <Tippy content='Tin nhắn'>
                                <button className={cx('actions-btn')}>
                                    <MessagesIcon width='26px' height='26px' />
                                </button>
                            </Tippy>
                            <Tippy content='Hộp thư'>
                                <button className={cx('actions-btn')}>
                                    <InboxIcon />
                                    {currentInbox > 0 && (
                                        <span className={cx('badge')}>{currentInbox}</span>
                                    )}
                                </button>
                            </Tippy>
                            <Menu items={userMenu} onChange={handleMenuChange}>
                                <Image
                                    className={cx('user-avatar')}
                                    alt=''
                                    src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/13f5ab14e955909ef3cc0fa9c01965ef~c5_100x100.jpeg?x-expires=1661270400&x-signature=7tqLA3zjzY18PPc9MazP8gS724E%3D'
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button
                                icon={{ at: 'left', className: `icon`, name: faPlus }}
                                outline
                                text
                            >
                                Tải lên
                            </Button>

                            {/* custom button add: className={cx('custom-login')} */}
                            <Button primary>Đăng nhập</Button>

                            <Menu items={MENU_ITEM} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
