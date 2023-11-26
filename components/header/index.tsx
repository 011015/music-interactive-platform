import { ReactNode } from 'react'
import Image from 'next/image'
import styles from './index.module.scss'

interface HeaderProps {
    imgSrc: string;
    titleName: string;
    children: ReactNode;
}

function Header({imgSrc, titleName, children}: HeaderProps) {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>
                <Image src={imgSrc} alt="图片" width={30} height={30} />
                <span>{titleName}</span>
            </h3>
            {children}
        </div>
    )
}

export {
    Header
}