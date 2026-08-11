import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
	return (
		<header className={styles.header}>
			<div className={styles.brand}>
				<div className={styles.logo} aria-hidden="true">
					<span className={styles.logoDot} />
				</div>
				<span className={styles.brandName}>Ecom</span>
			</div>

			<nav className={styles.nav} aria-label="Primary">
				<Link href="/" className={styles.link}>
					Home
				</Link>
			</nav>

			<button type="button" className={styles.cartButton} aria-label="Cart">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					aria-hidden="true"
					className={styles.cartIcon}
				>
					<path
						d="M6 6h15l-1.5 8.5a2 2 0 0 1-2 1.6H9a2 2 0 0 1-2-1.5L5 3H2"
						stroke="currentColor"
						strokeWidth="1.8"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<circle cx="10" cy="20" r="1.5" fill="currentColor" />
					<circle cx="17" cy="20" r="1.5" fill="currentColor" />
				</svg>
			</button>
		</header>
	);
}
