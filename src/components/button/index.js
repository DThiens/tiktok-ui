import styles from './button.module.scss'
import clsx from 'clsx'

function Button ({primary, disabled}) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.disabled]: disabled

    })

    return (
        <div >
            <button className={classes}>Click me</button>
            
        </div>
    )
}

export default Button