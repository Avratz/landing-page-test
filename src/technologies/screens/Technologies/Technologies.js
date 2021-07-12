import React from 'react'
import Technology from 'technologies/components/Technology'
import { useTechs } from 'technologies/hooks/useTechs'
import Button from 'app/components/Button'
import Input from 'app/components/Input'
import Asc from 'assets/img/sort-desc.svg'
import Desc from 'assets/img/sort-asc.svg'
import { useTranslation } from 'react-i18next'

import styles from './Technologies.module.scss'

const Technologies = () => {
	const { t } = useTranslation()
	const { state } = useTechs()
	const [technologies, setTechnologies] = React.useState(state)
	const [order, setOrder] = React.useState('ASC')
	const [key, setKey] = React.useState('')

	React.useEffect(() => {
		const ordered = [
			...state
				.sort((a, b) => a.tech.localeCompare(b.tech))
				.filter(
					({ tech, type }) =>
						tech.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
						type.toLowerCase().indexOf(key.toLowerCase()) !== -1,
				),
		]
		if (order === 'ASC') {
			setTechnologies(ordered)
		} else if (order === 'DESC') {
			setTechnologies(ordered.reverse())
		}
	}, [order, state, key])

	const toggleOrderByName = () => {
		if (order === 'ASC') {
			setOrder('DESC')
		} else if (order === 'DESC') {
			setOrder('ASC')
		}
	}

	const searchBy = (e) => {
		let val = e.target.value
		if (val !== undefined) {
			setKey(val)
		}
	}

	return (
		<div className={styles.technologies}>
			<div className={styles.header}>
				<Input
					className={styles.search}
					placeholder={t('technologies.filters.search')}
					onChange={searchBy}
				/>
				<div className={styles.sortBy}>
					<span>{t('technologies.filters.sortByName')}</span>
					<Button className={styles.button} handleClick={toggleOrderByName} theme="icon">
						<img alt="" src={order === 'ASC' ? Asc : Desc} />
					</Button>
				</div>
			</div>

			{technologies.map((tech, k) => (
				<Technology key={tech.tech + k} {...tech} />
			))}
			<div className={styles.total}>
				{t('technologies.filters.quantity') + ' ' + technologies.length}
			</div>
		</div>
	)
}

export default Technologies
