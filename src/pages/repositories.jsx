import { Component } from "react";

export default class repository extends Component{
    constructor(props){
        super(props);
        this.state = {
            repositorios : [],
            nomeUsuario : '',
            id : 0,
            name : '',
            description : '',
            dateCriacao : 0,
            size : 0
        };
    };

    atualizaEstadoNome = async (event) => {
        await this.setState({ nomeUsuario: event.target.value })
        console.log(this.state.nomeUsuario)
    }

    buscarRepositorio = () => {
        console.log('Chamada para a API.')

        fetch(`https://api.github.com/users/${this.state.nomeUsuario}/repos`)

        .then(resposta => resposta.json()).then(dados => this.setState({ repositorios: dados})).catch(erro => console.log(erro))
    }

    // mostrarRepositorio = (event) => {
        
    //     console.log(this.buscarUsuario.nomeUsuario)
    // }

    componentDidMount(){
        
    }


    render(){
        return(
            <div>
                <main>
                    <section>
                        <form onSubmit={this.buscarRepositorio}>
                        <div>
                            <input type='text' value={this.state.nomeUsuario} placeholder='Username do GitHub' onChange={this.atualizaEstadoNome}/>
                            <button type='button' onClick={() => this.buscarRepositorio()}>Enviar</button>
                        </div>
                        </form>

                        <h2>Repositórios</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nome</th>
                                    <th>Descrição</th>
                                    <th>Tamanho</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.repositorios.map((repositories => {
                                        return(
                                            <tr key={repositories.id}>
                                                <td>{repositories.id}</td>
                                                <td>{repositories.name}</td>
                                                <td>{repositories.description}</td>
                                                <td>{repositories.dateCriacao}</td>
                                                <td>{repositories.size}</td>
                                            </tr>
                                        )
                                    }))
                                }
                            </tbody>
                        </table>
                        
                    </section>
                </main>
            </div>
        )
    }
}