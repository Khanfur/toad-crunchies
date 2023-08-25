import Image from 'next/image'
import logoColor from '@app-images/logo-color.svg'
import styles from './styles.module.scss'

export default function SiteHeader() {
    return (
        <div>
            <div>
                <Image priority
                       src={ logoColor }
                       width={ 128 }
                       height={ 128 }
                       alt="Toad Crunchies Recipes"
                       className={ styles.logo }
                />
            </div>
        </div>
    )
}
