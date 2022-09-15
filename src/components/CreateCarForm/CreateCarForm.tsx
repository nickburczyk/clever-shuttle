import { FormEvent, useState } from "react"
import { CreateCarPayload } from "../../lib/types"
import styles from './style.module.css'
import cn from 'classnames'
import FormInput from "./FormInput"
const shortid = require('shortid')

const { form, submit } = styles
const CreateCarForm = () => {
    const [error, setError] = useState<string|null>(null)
    const [formData, setFormData] = useState<CreateCarPayload>({
        id: 0,
    })
    
    const handleInput = (e: {target: HTMLInputElement|HTMLSelectElement}): void => {
        setError(null)
        const { name, value } = e.target
        const coercedIdValue = value ? parseInt(value) : 0
        setFormData(prev => ({
            ...prev,
            [name]: name === "id" ? coercedIdValue : value
        }))
    }

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        if (!formData.id) {
            setError("ID is required")
            return
        }
        //TODO: SUBMIT
        console.log("submitted!")
        // THEN: NAVIGATE to /profile/NEWID
    }
    console.log("FORM", formData)
    return (
        <form className={form} onSubmit={e => handleSubmit(e)}>
            <FormInput
                label="ID"
                id={shortid.generate()}
                name={'id'}
                value={(formData.id).toString() || "0"}
                onChange={e => handleInput(e)}
                error={error && error}
                required
            />
            <FormInput
                label="License Plate"
                id={shortid.generate()}
                name={'licensePlate'}
                value={formData.licensePlate}
                onChange={e => handleInput(e)}
            />
            <FormInput
                label="Brand"
                id={shortid.generate()}
                name={'brand'}
                value={formData.brand}
                onChange={e => handleInput(e)}
            />
            <FormInput
                label="Manufacturer"
                id={shortid.generate()}
                name={'manufacturer'}
                value={formData.manufacturer}
                onChange={e => handleInput(e)}
            />
            <FormInput
                label="Operation City"
                id={shortid.generate()}
                name={'operationCity'}
                value={formData.operationCity}
                onChange={e => handleInput(e)}
            />
            <FormInput
                label="Status"
                id={"status"}
                name={'status'}
                value={formData.operationCity}
                onChange={e => handleInput(e)}
            >
                <select 
                    id="status" 
                    value={formData.status || ""} 
                    name={"status"}
                    onChange={e => handleInput(e)}
                >
                    <option disabled value="">Please Select...</option>
                    <option value="available">Available</option>
                    <option value="in-maintenance">In Maintenance</option>
                    <option value="out-of-service">Out Of Service</option>
                </select>
            </FormInput>
            <button className={cn(submit, "btn primary")} type={"submit"}>Submit</button>
        </form>
    )
}

export default CreateCarForm