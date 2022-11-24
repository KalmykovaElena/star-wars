import React, {Component} from 'react';
import Spinner from "../spinner";

const WithDataHoc = (ViewComponent) => {
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
        console.log('noData')
        return <Spinner/>
    }
    console.log('isData')
    return <ViewComponent {...this.props} data={data}/>
}

    }
};

export {WithDataHoc};