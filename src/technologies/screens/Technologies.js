import React from 'react'
import Technology from 'technologies/components/Technology'
import { useTechs } from 'technologies/hooks/useTechs'
import Button from 'app/components/Button'
import Input from 'app/components/Input'
import Asc from 'assets/img/sort-desc.svg'
import Desc from 'assets/img/sort-asc.svg'
import { useTranslation } from 'react-i18next'
import useTechFilters from 'technologies/hooks/useTechFilters'

import styles from '../styles/Technologies.module.scss'

const Technologies = () => {
	const { t } = useTranslation()
	const { state } = useTechs()
	const { searchBy, toggleOrderByName, technologies, order } = useTechFilters(state)

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
