import styles from './style.module.css'
import { Car } from '../../lib/types'

const { inputWrapper } = styles

interface FormInputProps {
    children?: JSX.Element | JSX.Element[]
    label: string;
    id: string;
    name?: keyof Car;
    value?: string | undefined;
    required?: boolean;
    placeholder?: string;
    error?: string | null;
    onChange: (e:any)=>void
}

const FormInput = ({
    children, 
    label,
    id,
    name,
    value,
    placeholder,
    required = false,
    error,
    onChange
}: FormInputProps) => (
    <>
        <label htmlFor={id}>
            {label}
            {required && <span>*</span>}:
        </label>
        {!children ? (
            <div className={inputWrapper}>
                <input 
                    type="text" 
                    id={id} 
                    name={name} 
                    value={value} 
                    placeholder={placeholder}
                    onChange={onChange}
                />
                {required && error && 
                    <p style={{color: 'tomato', margin: 0}}>
                        {error}
                    </p>
                }
            </div>
        ) : (
            children
        )}
    </>
)

export default FormInput