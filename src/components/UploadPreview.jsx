
import {InputFile} from './'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import {useState} from 'react'

const UploadPreview = ({setImageUrl, imageUrl}) => {
    const [uploading, setUploading] = useState(true)
    
    const handleFileChange = async e => {
        const file = e.target.files[0]
        if(file) setUploading(true)
        const storage = getStorage()

        const storageRef = ref(storage, `images/${file.name}`)

        const data = await uploadBytes(storageRef, file)
        console.log("Uploaded a file successfully!")

        const downloadURL = await getDownloadURL(storageRef)
        setImageUrl(downloadURL)
        if(downloadURL) setUploading(false)
        console.log("Download URL: ", downloadURL)
    }


    return (
        <div className="upload flex rounded-2xl justify-center items-center" style={{backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageUrl})`}}>
            <InputFile handleFileChange={handleFileChange}>
                {
                    uploading 
                    ?
                    <>
                        <span>Upload to server</span>
                        <div className="custom-loader"></div>
                    </>
                        :
                    <>
                        <span>{imageUrl.length ? 'Change preview' : 'Upload preview'}</span>
                        <div className="upload-icon">
                            <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.14645 3.35355L1.75 5.75C1.61193 5.88807 1.38807 5.88807 1.25 5.75C1.11193 5.61193 1.11193 5.38807 1.25 5.25L5.14645 1.35355C5.34171 1.15829 5.65829 1.15829 5.85355 1.35355L9.75 5.25C9.88807 5.38807 9.88807 5.61193 9.75 5.75C9.61193 5.88807 9.38807 5.88807 9.25 5.75L6.85355 3.35355C6.53857 3.03857 6 3.26165 6 3.70711V10.5C6 10.7761 5.77614 11 5.5 11C5.22386 11 5 10.7761 5 10.5V3.70711C5 3.26165 4.46143 3.03857 4.14645 3.35355Z" fill="black"/>
                                <path d="M9 14H2.30902C1.93733 14 1.69558 13.6088 1.8618 13.2764C1.9465 13.107 2.11963 13 2.30902 13H9C9.27614 13 9.5 13.2239 9.5 13.5C9.5 13.7761 9.27614 14 9 14Z" fill="black"/>
                                <path d="M4.14645 3.35355L1.75 5.75C1.61193 5.88807 1.38807 5.88807 1.25 5.75C1.11193 5.61193 1.11193 5.38807 1.25 5.25L5.14645 1.35355C5.34171 1.15829 5.65829 1.15829 5.85355 1.35355L9.75 5.25C9.88807 5.38807 9.88807 5.61193 9.75 5.75C9.61193 5.88807 9.38807 5.88807 9.25 5.75L6.85355 3.35355C6.53857 3.03857 6 3.26165 6 3.70711V10.5C6 10.7761 5.77614 11 5.5 11C5.22386 11 5 10.7761 5 10.5V3.70711C5 3.26165 4.46143 3.03857 4.14645 3.35355Z" stroke="black"/>
                                <path d="M9 14H2.30902C1.93733 14 1.69558 13.6088 1.8618 13.2764C1.9465 13.107 2.11963 13 2.30902 13H9C9.27614 13 9.5 13.2239 9.5 13.5C9.5 13.7761 9.27614 14 9 14Z" stroke="black"/>
                            </svg>
                        </div>
                    </>
                }
                
                
            </InputFile>
        </div>
    )
}


export default UploadPreview