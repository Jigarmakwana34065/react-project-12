import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { db } from "../firebass-config"
import "./add.css"
import { useEffect, useState } from "react"

const Add = () => {

    const [list, setList] = useState("")
    const [fireData, setFireData] = useState([])

    let record = collection(db, "jigar")

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await addDoc(record, {
                name: list
            })
            alert("Record Add")
            setList('')
            getUser()
        } catch (err) {
            console.log(err);
            return false
        }
    }

    const getUser = async () => {
        try {
            let fireStoreData = await getDocs(record);
            let res = fireStoreData.docs.map((val) => (
                {
                    ...val.data(), id: val.id
                }
            ))

            setFireData(res)
        } catch (err) {
            console.log(err);
            return false
        }
    }

    const deleteData = async (id) => {
        try {
            // method 1

            await(deleteDoc(doc(db, "jigar", id))) 

            // method 2

            // let userDelete = await doc(db, "jigar" , id)
            // const deletedData = await deleteDoc(userDelete)

            alert("Record Deleted")
            getUser()
        } catch (err) {
            console.log(err);
            return false
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    console.log(fireData);

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
                                        <button type="submit"><i class="fa-solid fa-circle-check"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="view-data">
                            <ul>
                                {
                                    fireData.map((val) => {
                                        return (
                                            <li>
                                                <p>{val.name}</p>
                                                <button type="submit" onClick={() => deleteData(val.id)}><i class="fa-solid fa-trash-can"></i></button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Add