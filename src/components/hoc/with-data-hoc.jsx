import React, {Component} from 'react';
import {logDOM} from "@testing-library/react";
import Spinner from "../spinner";

const WithDataHoc = (vewComponent) => {
    return class extends Component{
        state = {
         data: null,
        }
        componentDidMount() {

            const {getData} = this.props


            getData()
                .then(itemList => {
                    this.setState({
                        itemList
                    })
                })
                .catch((e)=>console.log(e))
        }
render(){
            const {data}=this.state
    if (!data){
        return <Spinner/>
    }
    return <ViewComponent {...this.props} data={data}/>
}

    }
};

export {WithDataHoc};