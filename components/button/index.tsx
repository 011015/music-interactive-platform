import styles from './index.module.scss'
import "@/components/index.global.scss"

function Button(props: any) {
    let typeClsName;
    switch(props.type) {
        case "default": typeClsName = `${styles.defaultButton}`; break;
        case "upNav": typeClsName = `${styles.upNavButton}`; break;
        case "nav": typeClsName = `${styles.navButton}`; break;
        default: typeClsName = `${styles.defaultButton}`;
    }
    
    let clsName;
    if (styles[props.className]) {
        clsName = `${typeClsName} ${styles[props.className]}`;
    } else if (props.className) {
        clsName = `${typeClsName} ${props.className}`;
    } else {
        clsName = `${typeClsName}`;
    }
    return (
        <button {...{...props, className: clsName}} />
    )
}

export default Button