import React, { Component } from 'react'


class  Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            filmes:[]

        }
        this.loadFilmes = this.loadFilmes.bind(this);
    }

    componentDidMount(){
       this.loadFilmes();
    }

    loadFilmes(){
      //https://sujeitoprogramador.com/r-api/?api=filmes
      let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
      fetch(url)
      .then((r)=> r.json())
      .then((json)=>{
          this.setState({filmes: json});
          console.log(json);

      });


    }

    render(){
    return(

        <h1>Bem Vindo a Pagina Home</h1>

    );
}
}
export default Home;