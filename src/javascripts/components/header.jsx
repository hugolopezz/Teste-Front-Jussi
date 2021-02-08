import React, { Component } from 'react';
import CharactersItems from './characterItems';
import Loading from './loading';

class Header extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.state = {
      characters: [],
      loading: true,
      setSearchTerm: ''
    };

  }
  updateSearch(event) {
    this.setState({ setSearchTerm: event.target.value })
  }
  componentDidMount() {
    this.charactersApi();

    setTimeout(() => {
      this.setState({ loading: false })

    }, 2000);
  }

  charactersApi = () => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then(res => {
        this.setState({
          characters: res.results
        });
      });
  };

  render() {
    const { characters, loading } = this.state;
    const filterCharacters = characters.filter((val) => {
      if (this.state.setSearchTerm === "") {
        return null
      } else if (val.name.toLowerCase().includes(this.state.setSearchTerm.toLowerCase())) {
        return val
      }
    });

    return (
      <header className="header">
        <div className="header__left">
          <i className="logoJussi"></i>
          <nav className="menu">
            <a href="#">
              Nossas soluções
            </a>
            <a href="#">
              Conheça a Jüssi
            </a>
          </nav>
        </div>
        <div className="header__right">
          <form className="form__search">
            <input type="text" name="search" autoComplete="off" className="field" placeholder="Buscar" onChange={this.updateSearch.bind(this)} />
            <div className="search__resultado">
              <ul className="characters">
                {filterCharacters.map((val, key) => {
                  return <CharactersItems key={key}
                    id={val.id}
                    name={val.name}
                    image={val.image}
                    gender={val.gender}
                  />
                })}
              </ul>
            </div>
            <i className="search"></i>
          </form>
          <a href="#">
            Login
          </a>
          <i className="cart"></i>
        </div>
        <Loading result={require('../lottie/loading.json')} activeStart={loading} />
      </header>
    );
  }
}

export default Header;