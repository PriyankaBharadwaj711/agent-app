import React from 'react'

class StatPage extends React.Component {
    render(){
        return(
            <div style={{width:'100%'}}>
                <ul className = "nav nav-tabs">
                    {
                        this.props.tabs.map(tab => {
                            const Active = (tab ===this.props.selected ? 'active' :'');
                        
                        return(
                            <li className='nav-item' key={tab}>
                                <a className={'nav-link'+Active} onClick={() => this.props.setSelected(tab)}>
                                    {tab}

                                </a>

                            </li>

                        );
                        })
                        }
                    </ul>
                {this.props.children}
            </div>
        );
    }
}

export default StatPage
