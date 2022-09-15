import { useState } from "react"
import CreateCarForm from "../components/CreateCarForm/CreateCarForm"
import { CreateCarPayload } from "../lib/types"

const Create = () => {
    return (
        <>
            <h1>Create/Update New Vehicle</h1>
            <CreateCarForm/>
        </>
    )
}
export default Create

