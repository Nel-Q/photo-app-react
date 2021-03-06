import React from 'react';
import NavBar from './NavBar';
import Profile from './Profile';
import Stories from './Stories';
import Suggestions from './Suggestions';
import Posts from './Posts';

class App extends React.Component {  

    render () {
        return (
            <div>
                <NavBar title="Photo App" username="my user" />
                <aside>
                    <header>
                        <Profile />
                    </header>
                    <div className="suggestions">
                        <p className="suggestion-text">Suggestions for you</p>
                        <div>
                            <Suggestions />
                        </div>
                    </div>
                </aside>

                <main className="content">
                    <header className="stories">
                        <Stories />
                    </header>
                    <Posts />
                </main>
            </div>
        );
    }
}

export default App;