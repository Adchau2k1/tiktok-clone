import { Link } from 'react-router-dom'

function Header() {
	return (
		<header>
			<nav
				style={{
					display: 'flex',
					listStyle: 'none',
					backgroundColor: 'pink',
				}}
			>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li style={{ marginLeft: 10 }}>
					<Link to="/search">Search</Link>
				</li>
				<li style={{ marginLeft: 10 }}>
					<Link to="/following">Follow</Link>
				</li>
				<li style={{ marginLeft: 10 }}>
					<Link to="/upload">Upload</Link>
				</li>
				<li style={{ marginLeft: 10 }}>
					<Link to="/profile">Profile</Link>
				</li>
			</nav>
		</header>
	)
}

export default Header
