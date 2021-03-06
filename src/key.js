import React, {Component} from "react"
import Scale from './Scale'
import $ from "jquery";

class Key extends Component{
    constructor(props){
        super(props)
        this.state = {
            major: {
                A: ["A", "Bm", "C#m", "D", "E", "F#m", "G#dim"],
                B: ["B", "C#m", "D#m", 'E', "F#", "G#m", "A#dim"],
                C: ["C", "Dm", "Ebm", "F", "G", "Abm", "Bbdim"],
                D: ["D", "Em", "F#m", "G", "A", "Bbm", "C#dim"],
                E: ["E", "F#m", "G#m", "A", "B", "C#m", "D#dim"],
                F: ["F", "Gm", "Abm", "Bb", "C", "Dbm", "Ebdim"],
                G: ["G", "Am", "Bbm", "C", "D", "Ebm", "F#dim"],},

            minor: {A: ["Am", "Bdim", "C", "Dm", "Em", "F", "G"],
                B: ["Bm", "C#dim", "D", "Em", "F#m", "G", "A"],
                C: ["Cm", "Ddim", "Eb", "Fm", "Gm", "Ab", "Bb"],
                D: ["Dm", "Edim", "F", "Gm", "Am", "Bb", "C"],
                E: ["Em", "F#dim", "G", "Am", "Bm", "C", "D"],
                F: ["Fm", "Gdim", "Ab", "Bbm", "Cm", "Db", "Eb"],
                G: ["Gm", "Adim", "Bb", "Cm", "Dm", "Eb", "F"],},
                
            keyProgress: ["A", "Bm", "C#m", "D", "E", "F#m", "G#dim"],
            keyThis: ["A","major"],
            infoVisible: <p class="alert alert-info visible mt-3">Select your Key!!</p>,
            infoOpen:"False"
            //min_on_maj: [1, 2, 5],
        }
        this.keyProgress = this.keyProgress.bind(this)
    }

    keyProgress(val, maj_min) {
        //let minor = (maj_min == "major" ? Object.values(this.state.min_on_maj) : Object.values(this.state.min_on_min) )
        //let dim = (maj_min == "major" ? 6 : 1)
        let change = []
        if(maj_min === "major"){
            for(let i in this.state.major){
                if(i === val){
                    change = this.state.major[i]
                }
            }
        }
        else{
            for(let i in this.state.minor){
                if(i === val){
                    change = this.state.minor[i]
                }
            }
        }
        this.setState({
            keyProgress: change,
            keyThis: [val, maj_min],
            infoVisible: <p class="alert alert-success visible mt-3">Key changed!!</p>,
        })
    }
    
    moveDown(){
        $('html, body').animate({scrollTop:
        $('#scale').offset().top}, 'slow')
    }

    changeInfo(){
        if(this.state.infoOpen==="True"){
            this.setState({
                infoVisible: <p class="alert alert-success visible mt-3">Click Scale to open!!</p>,
                infoOpen:"False"
            })
            
        }
        else{
            this.setState({
                infoVisible: <p class="alert alert-success visible mt-3">Click Scale to close!!</p>,
                infoOpen:"True"
            })
        }
        this.moveDown()
    }

    render(){
        return(
            <div class="container p-3 bg-white rounded">
                <div class="form-group">
                    <select class="selectpicker mx-2 my-2" ref = {e => this.list = e} onChange={() => this.keyProgress(this.list.value, this.key.value)}>
                        <option value='A'>A</option>
                        <option value='B'>B</option>
                        <option value='C'>C</option>
                        <option value='D'>D</option>
                        <option value='E'>E</option>
                        <option value='F'>F</option>
                        <option value='G'>G</option>
                    </select>

                    <select class="selectpicker" ref = {f => this.key = f} onChange={() => this.keyProgress(this.list.value, this.key.value)}>
                        <option value="major">Major</option>
                        <option value="minor">Minor</option>
                    </select>
                </div>

                {/*<button class="btn btn-primary mb-3" onClick={() => this.keyProgress(this.list.value, this.key.value)}>Chord progression!!</button>*/}
                
                <p class="alert alert-primary" role="alert">{this.state.keyProgress.join(' -> ')}</p>

                <button class="btn btn-info my-3" data-toggle="collapse" data-target="#scale" onClick={() => this.changeInfo()}>Scale</button>
                <div id="scale" class="collapse">
                    <Scale keyCh={this.state.keyThis}/>
                </div>    
                {this.state.infoVisible}
            </div>
        )
    }
}

export default Key