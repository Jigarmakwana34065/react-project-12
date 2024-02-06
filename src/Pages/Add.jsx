import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebass-config"
import "./add.css"
import { useEffect, useState } from "react"

const Add = () => {

    const [list, setList] = useState("")

    let record = collection(db, "jigar")

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await addDoc(record, {
                name: list
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
                        <div className="view-data">
                            <table border={1}>
                                {/* {
                                    record.map((val) => {
                                        return (
                                            <tr>
                                                <td>{val.name}</td>
                                            </tr>
                                        )
                                    })
                                } */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Add