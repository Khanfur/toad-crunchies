import Image from 'next/image'
import logoColor from '../../../assets/images/logo-color.svg'
import styles from './styles.module.scss'

export default function SiteHeader() {
    return (
        <main>
            <Image priority
                   src={ logoColor }
                   width={ 128 }
                   height={ 128 }
                   alt="Toad Crunchies Recipes"
                   className={ styles.logo }
            />
        </main>
    )
}
