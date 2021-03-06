import React from './react'
import ReactDOM from './react-dom'

// const ele = (
//   <div style={{color: 'red'}}>
//     hello, <span>react</span>
//   </div>
// )

// 函数组件
// function Home(){
//   return (
//       <div className="active" title="tan">
//           hello,<span>react</span>
//           <Tan />
//       </div>
//   )
// }

// function Tan(){
//   return (
//       <h1>
//           我是嵌套函数--
//       </h1>
//   )
// }

// function Home(){
//   return (
//       <div className="active" title="tan">
//           hello,<span>react</span>
//           <Tan tan="我是传进来的参数" />
//       </div>
//   )
// }

// class Tan extends React.Component {

//   constructor(props){
//       super( props )
//       this.state = {
//           num: 0
//       }
//   }

//   componentWillMount(){
//       console.log( "组件将要加载--" )
//   }

//   componentWillReceiveProps( props ){
//       console.log( "componentWillReceiveProps", props )
//   }

//   componentDidMount(){
//       console.log( "组件加载完成--" )
//   }

//   componentWillUpdate(){
//       console.log( "组件将要更新" )
//   }

//   componentDidUpdate(){
//       console.log( "组件更新完成" )
//   }
  
//   handleClick(){
//       // 修改状态的方法是调用 setState
//       console.log( "数据改变了--" )
//       this.setState({
//           num: this.state.num + 1
//       })
//   }

//   render(){
//       return (
//           <div>
//               <h1>我是类组件-----{ this.state.num }</h1>
//               <button onClick={ this.handleClick.bind( this ) } >点击</button>
//           </div>
//       )
//   }
// }

// 函数组件

class Tan extends React.Component {

  constructor(props){
      super( props )
      this.state = {
          num: 0,
          list: [ 1,2,3,4,5 ]
      }
  }

  componentWillMount(){
      console.log( "组件将要加载--" )
  }

  componentWillReceiveProps( props ){
      console.log( "componentWillReceiveProps", props )
  }

  componentDidMount(){
      console.log( "组件加载完成--" )
      console.log( this.state.list )
      for( let i = 0; i < 10; i ++  ){
          this.setState( ( preState, preProps ) => {
              console.log( "之前的状态：", preState )
              return {
                  num: preState.num + 1
              }
          })
      }
  }

  componentWillUpdate(){
      console.log( "组件将要更新" )
  }

  componentDidUpdate(){
      console.log( "组件更新完成" )
  }
  
  handleClick(){
      // 修改状态的方法是调用 setState
      console.log( "数据改变了--" )
      this.setState({
          num: this.state.num + 1
      })
  }

  render(){
      console.log( "render---" ,this.state.list )
      return (
          <div className="active">
              <h1>我是类组件-----{ this.state.num }</h1>
              <button onClick={ this.handleClick.bind( this ) } >点击</button>
              {
                  this.state.list.map( item => {
                      return <p>{ item }</p>
                  })
              }
              {/* <h1>数组的长度：{ this.state.list.length }</h1> */}
          </div>
      )
  }
}


ReactDOM.render( <Tan />, document.querySelector("#root") )