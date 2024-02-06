import { addDoc, collection, getDoc } from "firebase/firestore"
import { db } from "../firebass-config"
import "./add.css"
import { useState } from "react"

const Add = () => {

    const [list, setList] = useState("")

    let record = collection(db, "jigar")

    console.log(record);

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await addDoc(record, {
                list: list
            })
            alert("Record Add")
            setList('')
        } catch (err) {
            console.log(err);
            return false
        }
    }

    return (
        <div className="crude-section">
            <div className="container">
                <div className="row">
                    <div className="main">
                        <div className="header">
                            <h2>to do list</h2>
                        </div>
                        <div className="add-data">
                            <div className="form">
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <div className="int">
                                        <input type="text" onChange={(e) => setList(e.target.value)} value={list} />
                                    </div>
                                    <div className="btn">
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Add