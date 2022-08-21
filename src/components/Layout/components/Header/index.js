import { useState } from 'react'
import className from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleXmark,
    faPlus,
    faSpinner,
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
import HeadlessTippy from '@tippyjs/react/headless'
import styles from './Header.module.scss'
import 'tippy.js/dist/tippy.css'
import images from '~/assets/images'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import { InboxIcon, MessagesIcon, SearchIcon } from '~/components/Icons'
import Image from '~/components/Image'

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
    const [searchResult, setSearchResult] = useState('')
    const [currentInbox, setCurrentInbox] = useState(20)

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log(1)
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
            <div className={cx('logo')}>
                <div className={cx('inner')}>
                    <img src={images.logo} alt='Logo' />

                    <HeadlessTippy
                        interactive
                        offset={[0, 8]}
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('title')}>Tài khoản</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input
                                value={searchResult}
                                onChange={(e) => setSearchResult(e.target.value)}
                                placeholder='Tìm kiếm tài khoản và video'
                            />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                            <button className={cx('search-btn')}>
                                <SearchIcon />
                            </button>
                        </div>
                    </HeadlessTippy>

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
                                <HeadlessTippy
                                    offset={[13, -15]}
                                    visible={currentInbox > 0}
                                    render={(attrs) => (
                                        <div
                                            className={cx('notify-current')}
                                            tabIndex='-1'
                                            {...attrs}
                                        >
                                            {currentInbox}
                                        </div>
                                    )}
                                >
                                    <Tippy content='Hộp thư'>
                                        <button className={cx('actions-btn')}>
                                            <InboxIcon />
                                        </button>
                                    </Tippy>
                                </HeadlessTippy>
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
            </div>
        </header>
    )
}

export default Header
