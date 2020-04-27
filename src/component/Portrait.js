import React from 'react';
//var DropzoneComponent = require('react-dropzone-component');
import DropzoneComponent from 'react-dropzone-component';
class Portrait extends React.Component {

  constructor(props) {
    super(props);
    this.djsConfig = {
      autoProcessQueue: false,
      addRemoveLinks: true,
      maxFiles: 1,
      acceptedFiles: "image/jpeg,image/png,image/gif"

    }
    this.componentConfig = {
      iconFiletypes: ['.jpg', '.png', '.gif'],
      showFiletypeIcon: true,
      postUrl: 'no-url'
    };

    //this.maxfilesexceeded = file => this.removeFile(file);
    this.maxfilesexceeded = function(file){
      this.removeAllFiles();
      this.addFile(file);
    }

    // Simple callbacks work too, of course
    this.callback = file => {
      console.log('Portrait.callback(file)');
      this.getBase64(file);
    }

    this.success = file => {
      console.log('Portrait.success(file)');
      var reader = new FileReader();
      reader.onload = function () {
        console.log('FileReader.onload...' + reader.result);
        this.props.updateBase64Portrait(reader.result);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
      reader.readAsDataURL(file);
    }

    this.callUpdatePortrait = reader => {
      console.log('Portrait.onload...' + reader.result);
      this.props.updateBase64Portrait(reader.result);
    }
    this.getBase64 = file => {
      console.log('getBase64(file)...');
       var reader = new FileReader();
       reader.onload = () => this.callUpdatePortrait(reader);
       reader.onerror = function (error) {
         console.log('Error: ', error);
       };
       reader.readAsDataURL(file);
    }


    this.dropzone = null;
  }

  render(){
    const config = this.componentConfig;
    const djsConfig = this.djsConfig;

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
         init: dz => this.dropzone = dz,
         drop: this.callbackArray,
         addedfile: this.callback,
         success: this.success,
         maxfilesexceeded: this.maxfilesexceeded
     }
    return (
      <div>
        <DropzoneComponent config={config} eventHandlers={eventHandlers}
                       djsConfig={djsConfig}/>
      </div>
      );
  }

}

export default Portrait;
