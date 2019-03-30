import React from 'react';

class LanguageSelector extends React.Component {

    render() {
        return (
            <div>
                Select a language:
                <i
                className="flag us"
                onClick={() => this.props.onLanguageChange("english", "blue")}
                />
                <i
                className="flag nl"
                onClick={() => this.props.onLanguageChange("dutch", "red")}
                />
                {/* {this.state.language}> */}
            </div>
        );
    }

}

export default LanguageSelector;