import styles from './button.module.css'

export function Button({ has = true, name }){
	return(
		<button className={ has ? styles.withFill : styles.withBorder}>
			{name}
		</button>
	)
}