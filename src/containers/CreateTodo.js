import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo,editTodo,setAddEditState } from '../actions/actionCreator'
import {bindActionCreators} from 'redux'

class CreateTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            stateAddEdit: true, //true: Add State  false: Edit State;
            todotext: '',
//            acive: false,
        }
        this.onChangeTodoText = this.onChangeTodoText.bind(this)
    }
    onChangeTodoText(e){
         this.setState({
             todotext: e.target.value
         })
        this.props.setAddEditState(
            this.props.stateAddEdit,
            this.props.id,
            e.target.value
        )
    }

    render(){
        return (
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <div>
                      <input    onChange    = {this.onChangeTodoText} 
                                value       = {this.props.todotext} 
                                type        = "text" 
                                className   = "form-control" 
                                id          = "inputEmail3" 
                                placeholder = "add todo here"/>
                      </div>
                      <div      style   ={{float: "right"}}>
                      <button   type    = "button" 
                                onClick = { () => this.props.setAddEditState(true) } 
                                style   = {{marginTop: "25px", marginRight: "15px"}} 
                                className="btn btn-danger">Cancel</button>
                      <button   type    ="button" 
                                onClick ={() =>{ 
                                    if(this.props.stateAddEdit)             
                                        this.props.addTodo(this.state.todotext); 
                                    else
                                        this.props.editTodo(this.props.id,this.state.todotext);
                                    this.props.setAddEditState(true,0,"");    
                                    } } 
                                style   ={{marginTop: "25px"}} 
                                className="btn btn-success">{this.props.stateAddEdit? "Add":"Edit"}</button>
                      </div>          
                    </div>
                  </div>
        );
    }
}
const mapStateToProps = state => {
    if(!state.AddStateReducer.stateAddEdit)
    {
        return {
            stateAddEdit: state.AddStateReducer.stateAddEdit,
            id :          state.AddStateReducer.id,
            todotext :    state.AddStateReducer.text,
        };
    }else{
        return {
            stateAddEdit: true,
        };
    }
  };

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo,
        editTodo,
        setAddEditState,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo)