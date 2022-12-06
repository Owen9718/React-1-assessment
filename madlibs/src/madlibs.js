import React, { useState } from "react";


const MadLibs = () => {
    const [showForm, setShowForm] = useState(true)
    const [formData, setFormData] = useState({
        noun: "",
        noun2: "",
        adj: "",
        color: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        setShowForm(form => !form)
        console.log(showForm)
    }
    console.log(formData)
    return (
        <div>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input id="noun" name="noun" placeholder="Noun" value={formData.noun} onChange={handleChange} />
                    <input id="noun2" name="noun2" placeholder="Noun2" value={formData.noun2} onChange={handleChange} />
                    <input id="adj" name="adj" placeholder="Adj" value={formData.adj} onChange={handleChange} />
                    <input id="color" name="color" placeholder="Color" value={formData.color} onChange={handleChange} />
                    <button>Submit</button>
                </form>
            )}
            {!showForm && (
                <div>
                    There was a {formData.color} {formData.noun} who loved a {formData.adj} {formData.noun2}
                </div>
            )}
        </div>
    )
}

export default MadLibs