import CreateCarForm from "../components/CreateCarForm/CreateCarForm"
import PageHeader from "../components/PageHeader/PageHeader"

const p = {maxWidth: 600}
const Create = () => {
    return (
        <>
            <PageHeader title="Create New or Update Existing Vehicle"/>
            <p style={p}>
                To update an existing asset, please enter that asset's existing ID number. All existing
                data will be overwritten with submitted data, including empty fields. In the case of 
                empty fields, values will be removed from existing asset.
                
            </p>
            <p style={p}>To create a new car, simply fill out the available data.</p>
            <CreateCarForm/>
        </>
    )
}
export default Create

