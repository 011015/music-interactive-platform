import React, { useState } from "react"
import Button from "../button"
import styles from "./index.module.scss"
import "@/components/index.global.scss"

interface TextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    dataid?: string;
}

function Text(textProps: TextProps) {
    const {dataid, className, ...props} = textProps;
    if (dataid) {
        props.id = dataid;
    }
    const clsName = className ? 
    `${styles.input} ${className}` : 
    `${styles.input}`;
    return (
        <>
            <input type="text" {...{...props, className: clsName}} />
        </>
    )
}

function Password(passwordProps: TextProps) {
    const {dataid, className, ...props} = passwordProps;
    if (dataid) {
        props.id = dataid;
    }
    const clsName = className ? 
    `${styles.input} ${className}` : 
    `${styles.input}`;
    const [show, setShow] = useState(false);
    const handleClick = (e: any) => {
        e.preventDefault();
        setShow(!show);
    }
    return (
        <>
            <input type={show ? "text" : "password"} {...{...props, className: clsName}} />
            <Button 
                style={{marginLeft: '0.5em'}}
                onClick={handleClick}
            >
                {show ? "隐藏" : "显示"}密码
            </Button>
        </>
    )
}

function File(fileProps: TextProps) {
    const {dataid, ...props} = fileProps;
    if (dataid) {
        props.id = dataid;
    }
    return (
        <div className={styles.file}>
            选择文件
            <input 
                type="file" 
                accept="image/*" 
                multiple={true} 
                {...props} 
            />
        </div>
    )
}

function Select(selectProps: any) {
    const {dataid, name, children, onChange, ...props} = selectProps;
    if (dataid) {
        props.id = dataid;
    }

    const childProps = new Map();
    name && childProps.set("name", name);
    if (onChange) {
        let values: Array<string> = [];
        const handleChange = (e: any) => {
            if (values.find(value => value === e.target.value)) {
                values = values.filter(value => value !== e.target.value);
            } else {
                values.push(e.target.value);
            }
            onChange.call(undefined, e, values);
        }
        childProps.set("onChange", handleChange);
    }

    const newChildren = childProps ? React.Children.map(children, (child: any) => {
        return React.cloneElement(child, Object.fromEntries(childProps));
    }) : children;
    return (
        <div {...props}>{newChildren}</div>
    )
}

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

function RadioItem(radioProps: RadioProps) {
    const {label, ...props} = radioProps;

    return (
        <label className={`${styles.radioLabel} ${styles.radioAnim}`}>
            <input type="radio" {...{...props, value: label}} />
            <i className={styles.radio}></i>
            {label}
        </label>
    )
}

function CheckboxItem(checkboxProps: RadioProps) {
    const {label, ...props} = checkboxProps;

    return (
        <label className={`${styles.checkboxLabel} ${styles.checkboxAnim}`}>
            <input type="checkbox" {...{value: label, ...props}} />
            <i className={styles.checkbox}></i>
            {label}
        </label>
    )
}

interface SelectGroupProps {
    onChange?: Function,
    name?: string,
    activeIndex?: number,
    list: Array<Record<string, string>>
}

function SelectGroup(props: SelectGroupProps) {
    const {name, onChange, activeIndex, list} = props;
    const [activeItem, setActiveItem] = useState(activeIndex ? list[activeIndex].name: list[0].name);
    const handleClick = (e: any, item: any) => {
        e.preventDefault();
        setActiveItem(item.name);
        onChange?.call(undefined, e, {[name as string]: item.value});
    }
    return (
        <div className="dropdown">
            <Button className="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown">
                <input type="hidden" defaultChecked={true} name={name} value={activeItem} />
                {activeItem}
                <span className="caret"></span>
            </Button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                {list.map((item, index) => 
                    <li key={index}>
                        <a href="#" onClick={e => {handleClick(e, item)}}>{item.name}</a>
                    </li>
                )}
            </ul>
        </div>
    )
}

Select.RadioItem = RadioItem
Select.CheckboxItem = CheckboxItem
Select.SelectGroup = SelectGroup

export default {
    Text,
    Password,
    File,
    Select,
}