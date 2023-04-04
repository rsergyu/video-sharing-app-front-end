import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase';

const Container = styled.div`
width: 100svw;
height: 100svh;
position: absolute;
top:0;
left:0;
background-color: #000000e7;
z-index:11;
display:flex;
align-items:center;
justify-content:center;
`;
const Wrapper = styled.div`
width:30%;
height:70%;
background-color: #fff;
color: #000;
display: flex;
flex-direction:column;
padding: 20px;
gap:20px;
position: relative;
`;
const Close = styled.div`
position: absolute;
top:10px;
right:10px;
cursor: pointer;
`;
const Title = styled.h1`
text-align: center;
`;
const DragAndDropZone = styled.div`
border: 3px dashed #000;
height:80%;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const DropTitle = styled.h1`
font-weight:300;
text-align:center;

`;
const DropInput = styled.input`
`;
const SelectFileBtn = styled.button`
display: flex;
align-items: center;
background-color: transparent;
border-radius: 20px;
gap: 7px;
color: #065fd4;
border: 1px solid #909090;
padding: 5px 15px 5px 10px;
font-weight: 500px;
font-size:1rem;
margin-block:12px;
cursor: pointer;
`;


const Upload = ({setOpen}) => {

    const [videoFile, setVideoFile] = useState(null);
    const [videoFilePerc, setVideoFilePerc] = useState(0);
    const [inputs, setInputs] = useState("");
    const [tags, setTags] = useState([]);

    const inputRef = useRef()

    const uploadFile = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                default:
                    break;
                }
            }, 
            (error) => {

            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setInputs(prev => {
                        return {...prev, url: downloadURL}
                        
                    })
                }
            )}
        )
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        
    };
    const handleDrop = (e) => {
        e.preventDefault();
        setVideoFile(e.dataTransfer.files);
    };

    const handleChange = (e) => {

        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
            
        })
    }

    // if(videoFile) return (

    // )

  return (
    <Container>
        <Wrapper>
            <Close onClick={()=>setOpen(false)}>X</Close>
            <Title>
                Upload a new video
            </Title>
            {!videoFile ? (
            <DragAndDropZone onDragOver={handleDragOver} onDrop={handleDrop}>
                <DropTitle>Drag and drop video</DropTitle>
                <DropInput type="file" accept='video/*' onChange={(e) => setVideoFile(e.target.files[0])} hidden ref={inputRef}></DropInput>
                <DropTitle>or</DropTitle>
                <SelectFileBtn onClick={() => inputRef.current.click()}>Select file</SelectFileBtn>
            </DragAndDropZone>
            ):
            <DragAndDropZone>
                <DropTitle></DropTitle>
                <DropInput name='title' type='text' placeholder='Title' onChange={handleChange}></DropInput>
                <DropInput name='desc' rows={8} placeholder='Description' onChange={handleChange}></DropInput>
                <DropInput name='tags' type='text' placeholder='Separate the tags with commas' onChange={handleChange}></DropInput>
            </DragAndDropZone>
            }
        </Wrapper>
    </Container>
  )
}

export default Upload