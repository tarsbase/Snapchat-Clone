import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {resetCameraImage, selectCameraImage} from '../../features/cameraSlice'
import './Preview.css'
import CloseIcon from '@material-ui/icons/Close';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CreateIcon from '@material-ui/icons/Create';
import NoteIcon from '@material-ui/icons/Note';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CropIcon from '@material-ui/icons/Crop';
import TimerIcon from '@material-ui/icons/Timer';
import SendIcon from '@material-ui/icons/Send';


function Preview() {
    const cameraImage=useSelector(selectCameraImage);
    const history=useHistory();
    const dispatch = useDispatch()

    useEffect(()=>{
        if(!cameraImage){
            history.replace('/')
        }
    },[cameraImage, history])

    const closePreview=()=>{
        dispatch(resetCameraImage());
    }

    const sendPost=()=>{
        
    }

    return (
        <div className='preview'>
            <CloseIcon onClick={closePreview} className='preview__close' />
            <div className='preview__toolbarRight'>
                <TextFieldsIcon/>
                <CreateIcon/>
                <NoteIcon/>
                <MusicNoteIcon/>
                <AttachFileIcon/>
                <CropIcon/>
                <TimerIcon/>
            </div>
            <img src={cameraImage} alt='camera snap'/>
            <div className='preview__footer'>
                <h2 onClick={sendPost}>Send Now</h2>
                <SendIcon fontSize='small' className='preview__sendIcon'/>
            </div>
        </div>
    )
}

export default Preview