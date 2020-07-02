import React from 'react'

class SongCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {spans: 0}
        this.imageRef = React.createRef();
    }
componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans);


}

setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height/10 +1);
    this.setState({spans})
}



    render(){
        //const image = this.props.image;
        return(
            <div style = {{ gridRowEnd: `span ${this.state.spans}` }}></div>
        );
    }
}

export default SongCard;