import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import styles from './SelectBox.module.scss'

const SelectBox = ({ options, placeholder, name, handleChange, error, disabled = false }) => {
	const [t] = useTranslation()
	return (
		<React.Fragment>
			<select
				className={`${styles.selectBox} ${error !== undefined ? styles.errorSelectBox : ''}`}
				disabled={disabled}
				name={name}
				onChange={handleChange}
			>
				<option className={styles.option} value="">
					{placeholder !== undefined ? placeholder : t('common.select')}
				</option>
				{options.map((option) => (
					<option key={option.id} className={styles.option} value={option.value}>
						{option.name}
					</option>
				))}
			</select>
			{error !== undefined ? <p className={styles.error}>{t(error)}</p> : null}
		</React.Fragment>
	)
}

SelectBox.propTypes = {
	options: PropTypes.array.isRequired,
	placeholder: PropTypes.string,
	name: PropTypes.string,
	handleChange: PropTypes.func,
	error: PropTypes.string,
	disabled: PropTypes.bool,
}
export default SelectBox
