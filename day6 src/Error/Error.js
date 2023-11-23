import React ,{Component} from "react";
export default class Error extends Component{
    state={
        error:null,
    };
    static getDerivedStateFromError(error)
    {
        return{error:error};
    }
    componentDidCatch(error,info)
    {
        console.log(error,info);
    }
    render()
    {
        if(this.state.error)
        {
            return <p style={{color:"red"}}>Something went wrong</p>;
        }
        return this.props.children;
    }
}