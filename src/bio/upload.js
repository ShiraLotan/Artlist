import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone'
import Fab from '@material-ui/core/Fab';
import './upload.css';



function Upload() {

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className="upload">
      <h4 className='headUplaod'>Upload music <span className='numSongs'>4-6 songs</span></h4>

          <div className='dragNdrop' {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <div className='totalDragNdropContent'>
                <p className='dragNdropContent'><span className='clickToUpload'>Click to upload</span> or drag and drop here</p>
                <p className='format'>MP3 / WAV format</p>
              </div>
          }
        </div>

        <div className='checkBoxArea'>
          <div className='checkbox-container'><input type="checkbox" id='checkBoxId'  class="checkBoxClass" />I have full rights for the music.</div>
          <div className='checkbox-container'><input type="checkbox" id='checkBoxId' class="checkBoxClass" />None of the songs are a cover of another artist's material.</div>
          <div className='checkbox-container'><input type="checkbox" id='checkBoxId' class="checkBoxClass" />The music is clear for use in any web platform, including YouTube monetization.</div>
        </div>
        <Fab color="primary"  className='submitMusic' variant="extended" >
          Submit
        </Fab>
    </div>
  );
}

export default Upload;
