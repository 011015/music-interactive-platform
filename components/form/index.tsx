import React, {ReactNode} from "react"
import styles from "./index.module.scss"
import "@/components/index.global.scss"

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    titleName?: string;
    onFinish?: Function;
    noStyle?: boolean;
}

interface FormItemProps {
    label?: string;
    name?: string;
    required?: boolean;
    className?: string;
    style?: Object;
    children: ReactNode;
}

let formId: string, formItemsId: string[] = [];

function Form(formProps: FormProps) {
    const { titleName, children, onFinish, noStyle, ...props } = formProps;
    let clsName;
    if (noStyle && props.className) {
        clsName = `${props.className}`;
    } else if (props.className) {
        clsName = `${styles.form} ${props.className}`
    } else if (!noStyle) {
        clsName = `${styles.form}`;
    }
    formId = props.name as string ?? '';
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const values = new Map();
        formItemsId.map(formItemId => {
            const ele = document.getElementById(formItemId);
            if (ele instanceof HTMLInputElement) {
                values.set(ele.name, ele.value);
            } else if (ele instanceof HTMLDivElement) {
                const childEles = ele.querySelectorAll('input');
                let key = childEles[0]?.name, value: string[] = [];
                Array.from(childEles).map(childEle => {
                    (childEle.defaultChecked || childEle.checked === true) && value.push(childEle.value);
                })
                values.set(key, value);
            }
        });
        onFinish?.call(undefined, e, Object.fromEntries(values));
    }
    return (
        <form {...{...props, className: clsName}} onSubmit={handleSubmit}>
            {titleName && <h1 className={styles.formTitle}>{titleName}</h1>}
            {children}
        </form>
    )
}

function FormItem(fromItemProps: FormItemProps) {
    const { label, name, className, required, children, ...props } = fromItemProps;
    const clsName = className ? 
    `${styles.formItem} ${className}`:
    `${styles.formItem}`;
    let formItemName = formId && name ? `${formId}_${name}` : '';
    formItemsId.push(formItemName);
    const newChildren = React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {dataid: formItemName, name});
    });
    return (
        <div {...{...props, className: clsName}}>
            {label ?
            <>
                <div className={styles.itemTitle}>
                    <label {...(formItemName ? { htmlFor: formItemName } : {})}>
                        {required && <span className={styles.required}>*</span>}
                        {label}: 
                    </label>
                </div>
                <div className={styles.itemData}>
                    {newChildren}
                </div>
            </> : newChildren
            }
        </div>
    )
}

Form.Item = FormItem;

export default Form