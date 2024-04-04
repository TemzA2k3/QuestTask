import React from 'react';

class Avatar extends React.Component {
    constructor() {
        super();
        this.state = {
            isAvatarsVisible: false,
        };
    }

    handleShowAvatars() {
        this.setState({ isAvatarsVisible: !this.state.isAvatarsVisible });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleShowAvatars()}>Click!!!</button>
                {this.state.isAvatarsVisible ? (
                    <div>
                        <div>{this.props.userName}</div>
                        <img src={this.props.imageSrc} alt="Avatar"></img>
                    </div>
                ) : (
                    <div>Here should be list of avatars</div>
                )}
            </div>
        );
    }
}

export default Avatar;
