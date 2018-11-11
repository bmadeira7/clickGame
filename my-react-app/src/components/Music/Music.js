import React from "react";
class Music extends React.Component {
    constructor(props) {
      super(props);
      this.state = { play: true };
      this.url = "http://87.117.201.160:8200/;";
      this.audio = new Audio(this.url);
      this.togglePlay = this.togglePlay.bind(this);
    }
  
    togglePlay() {
      this.setState({ play: !this.state.play });
      console.log(this.audio);
      this.state.play ? this.audio.play() : this.audio.pause();
    }
  
    render() {
      return (
        <div>
          <button className="btn-outline-danger ml-1 mt-2" onClick={this.togglePlay}>{this.state.play ? 'Listen to UK GARAGE' : 'Pause'}</button>
        </div>
      );
    }
  }
  
  export default Music;