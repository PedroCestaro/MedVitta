import React,{InputHTMLAttributes} from 'react';
import './styles.css';

interface InputProps extends InputHTMLAttributes <HTMLInputElement>{
    name: string;
    label: string;
}

const Input: React.FC<InputProps>= ({label,name, ...rest}) => {/*fc == functional component*/
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="" id={name} {...rest} /*Esse comando importa todas as demais tags do html*/ />
        </div>
    );

}


export default Input;