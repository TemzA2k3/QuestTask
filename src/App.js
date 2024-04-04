import React from 'react';
import Avatar from "./components/Avatar/avatar";

class App extends React.Component {
    avatarList = [
        {
            imageSrc: "https://i.imgur.com/1bX5QH6.jpg",
            userName: "Lin Lanying"
        },
        {
            imageSrc: "https://i.imgur.com/YfeOqp2.jpg",
            userName: "Test user"
        }
    ];

    render() {
        return (
            <div className="App">
                {this.avatarList.map((avatar, index) => (
                    <Avatar key={index} userName={avatar.userName} imageSrc={avatar.imageSrc} />
                ))}
            </div>
        );
    }
}

export default App;
