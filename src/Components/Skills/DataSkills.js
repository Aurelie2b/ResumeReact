import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {

    return state + action;

}

export class Provider extends Component {

    state = {
        dataSkills : [
            {
                id : 1,
                categorie: 'Backend',
                description: ['C#', 'PHP', 'SQL', 'JavaScript']
            },
            {
                id : 2,
                categorie: 'Frameworks',
                description: ['ASP.NET', 'Symfony', 'Codeigniter', 'Angular', 'Node JS', 'React', 'jQuery']
            },
            {
                id : 3,
                categorie: 'Web',
                description: ['HTML5', 'CSS3', 'XML/XSLT', 'Ajax', 'Json','Responsive web design']
            },
            {
                id : 4,
                categorie: 'Database',
                description: ['Microsoft SQL Server', 'MySQL', 'PhpMyAdmin', 'MariaDB', 'Firebase']
            },
            {
                id : 5,
                categorie: 'Tools',
                description: ['Git/GitHub','Visual Studio 2019', 'Visual studio code', 'NetBeans', 'Brackets', 'XAMPP', 'Unit Testing']
            },
            
            {
                id : 6,
                categorie: 'Web server',
                description: ['Apache']
            }
        
        ],

        dispatch: action => {
            this.setState(state =>reducer(state, action))
        }
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
