import React, {Component} from "react"

class Scale extends Component{

    tabUpdate(defK, inputKey){
        if(defK == inputKey) return "nav-link active"
        else return "nav-link"
    }

    contentUpdate(defK, inputKey){
        if(defK == inputKey) return "tab-pane fade show active"
            else return "tab-pane fade"
    }

    scaleUpdate(key, maj_min){
        return (maj_min == "major" ? "./img/scale/"+ key +"_major.gif" : "./img/scale/"+ key +"_minor.gif")
    }

    render (){
        let {keyCh} = this.props
        
        return (
            <div>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class={this.tabUpdate("A",keyCh[0])} id="A-tab" data-toggle="tab" href="#A" role="tab" aria-controls="A" aria-selected="true">A</a>
                    </li>
                    <li class="nav-item">
                        <a class={this.tabUpdate("B",keyCh[0])} id="B-tab" data-toggle="tab" href="#B" role="tab" aria-controls="B" aria-selected="false">B</a>
                    </li>
                    <li class="nav-item">
                        <a class={this.tabUpdate("C",keyCh[0])} id="C-tab" data-toggle="tab" href="#C" role="tab" aria-controls="C" aria-selected="false">C</a>
                    </li>
                    <li class="nav-item">
                        <a class={this.tabUpdate("D",keyCh[0])} id="D-tab" data-toggle="tab" href="#D" role="tab" aria-controls="D" aria-selected="false">D</a>
                    </li>
                    <li class="nav-item">
                        <a class={this.tabUpdate("E",keyCh[0])} id="E-tab" data-toggle="tab" href="#E" role="tab" aria-controls="E" aria-selected="false">E</a>
                    </li>
                    <li class="nav-item">
                        <a class={this.tabUpdate("F",keyCh[0])} id="F-tab" data-toggle="tab" href="#F" role="tab" aria-controls="F" aria-selected="false">F</a>
                    </li>
                    <li class="nav-item">
                        <a class={this.tabUpdate("G",keyCh[0])} id="G-tab" data-toggle="tab" href="#G" role="tab" aria-controls="G" aria-selected="false">G</a>
                    </li>
                </ul>

                <div class="tab-content" id="myTabContent">
                    <div class={this.contentUpdate("A",keyCh[0])} id="A" role="tabpanel" aria-labelledby="A-tab">
                        <img class="img-thumbnail" src={require("./img/scale/A_"+ keyCh[1] +".gif")} />
                    </div>
                    <div class={this.contentUpdate("B",keyCh[0])} id="B" role="tabpanel" aria-labelledby="B-tab">
                        <img class="img-thumbnail" src={require("./img/scale/B_"+ keyCh[1] +".gif")} />
                    </div>
                    <div class={this.contentUpdate("C",keyCh[0])} id="C" role="tabpanel" aria-labelledby="C-tab">
                        <img class="img-thumbnail" src={require("./img/scale/C_"+ keyCh[1] +".gif")} />
                    </div>
                    <div class={this.contentUpdate("D",keyCh[0])} id="D" role="tabpanel" aria-labelledby="D-tab">
                        <img class="img-thumbnail" src={require("./img/scale/D_"+ keyCh[1] +".gif")} />
                    </div>
                    <div class={this.contentUpdate("E",keyCh[0])} id="E" role="tabpanel" aria-labelledby="E-tab">
                        <img class="img-thumbnail" src={require("./img/scale/E_"+ keyCh[1] +".gif")} />
                    </div>
                    <div class={this.contentUpdate("F",keyCh[0])} id="F" role="tabpanel" aria-labelledby="F-tab">
                        <img class="img-thumbnail" src={require("./img/scale/F_"+ keyCh[1] +".gif")} />
                    </div>
                    <div class={this.contentUpdate("G",keyCh[0])} id="G" role="tabpanel" aria-labelledby="G-tab">
                        <img class="img-thumbnail" src={require("./img/scale/G_"+ keyCh[1] +".gif")} />
                    </div>
                </div>


            </div>
        )
    }
}

export default Scale