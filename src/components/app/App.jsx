import {Component} from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import Main from '../main/Main';
import User from '../../models/User';
import UserContext from '../../common/UserContext';
import CircularProgress from '@mui/material/CircularProgress';

class App extends Component
{
    static contextType = UserContext;

    constructor(props)
    {
        super(props);
        this.state =
        {
            erro: null,
            user: null,
            loading: true,
        };

        this.setUser = this.setUser.bind(this);
    }

    componentDidMount()
    {
        (async()=>{
            this.setState({...this.state, loading: true});
            const user = await User.get('rodrigopradogarcia');
            this.setState({...this.state, user: user});
            setTimeout(()=>{
                this.setState({...this.state, loading: false});
            },1);
        })();
    }

    componentDidCatch(erro)
    {
        this.setState({...this.state, erro});
    }

    setUser(userLogin)
    {
        (async()=>{
            this.setState({...this.state, loading: true});
            const user = await User.get(userLogin);
            this.setState({...this.state, user: user});
            setTimeout(()=>{
                this.setState({...this.state, loading: false});
            },1);
        })();
    }

    render()
    {
        if(this.state.loading)
        {
            return(
            <>
                <GlobalStyle />
                <div style={{margin:0,padding:0,height:'100vh',width:'100%', background:'#171717', display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <CircularProgress color="primary" />
                </div>
            </>
            );
        }

        if(this.state.erro)
        {
            return(<h1>Algo deu errado!</h1>);
        }
        
        return(
            <>
                <GlobalStyle />
                <UserContext.Provider value={{user: this.state.user, setUser: this.setUser}}>
                    <Main />
                </UserContext.Provider>
            </>
        );
    }
}

export default App;