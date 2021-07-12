import React from 'react'
import PropTypes from 'prop-types'
import TechSvg from 'assets/img/technology.svg'
import LicenseSvg from 'assets/img/license.svg'
import YearSvg from 'assets/img/year.svg'
import AuthorSvgfrom from 'assets/img/author.svg'
import Heart from 'assets/img/heart.svg'
import HeartFilled from 'assets/img/heart-filled.svg'
import Button from 'app/components/Button'
import { useAuth } from 'auth/hooks/useAuth'

import styles from './Technology.module.scss'

const Technology = ({
	tech = 'React',
	year = '2013',
	author = 'Jordan Walke',
	license = 'MIT',
	language = 'JavaScript',
	type = 'Front-End',
	logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png',
}) => {
	const { state, actions } = useAuth()
	const [favorite, setFavorite] = React.useState(false)
	React.useEffect(() => {
		if (state.favorites) {
			const isFavorite = state.favorites.filter((fav) => fav.tech === tech)
			if (isFavorite.length === 1) {
				setFavorite(true)
			}
		}
	}, [state, tech])

	const addFav = () => {
		if (favorite) {
			actions.removeFav(tech)
			setFavorite(false)
		} else {
			actions.addFav({
				tech,
				year,
				author,
				license,
				language,
				type,
				logo,
			})
			setFavorite(true)
		}
	}
	return (
		<div className={styles.technology}>
			<Button className={styles.fav} handleClick={addFav} theme="icon">
				<img alt="" className={styles.img} src={favorite ? HeartFilled : Heart} />
			</Button>
			<div className={styles.imgBox}>
				<img alt="" className={styles.img} src={logo} />
			</div>
			<h4 className={styles.title}>{tech}</h4>
			<h5 className={styles.subtitle}>{type}</h5>
			<div className={styles.list}>
				<div className={styles.row}>
					<span>
						<img alt="" className={styles.icon} src={AuthorSvgfrom} />
						{author}
					</span>
					<span>
						<img alt="" className={styles.icon} src={YearSvg} />
						{year}
					</span>
				</div>
				<div className={styles.row}>
					<span>
						<img alt="" className={styles.icon} src={TechSvg} />
						{language}
					</span>
					<span>
						<img alt="" className={styles.icon} src={LicenseSvg} />
						{license}
					</span>
				</div>
			</div>
		</div>
	)
}

Technology.propTypes = {
	tech: PropTypes.string,
	year: PropTypes.string,
	author: PropTypes.string,
	license: PropTypes.string,
	language: PropTypes.string,
	type: PropTypes.string,
	logo: PropTypes.string,
}

export default Technology
