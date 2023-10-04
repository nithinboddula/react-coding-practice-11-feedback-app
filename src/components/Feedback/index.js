import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isRating: true}

  onEmoji = () => {
    this.setState({isRating: false})
  }

  render() {
    const {isRating} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        {isRating ? (
          <div className="rating-container">
            <h1 className="heading">
              How satisfied are you with our
              <br /> customer support performance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(eachEmoji => {
                console.log('bhjb')
                return (
                  <li className="each-emoji" key={eachEmoji.id}>
                    <img
                      src={eachEmoji.imageUrl}
                      className="emoji-logo"
                      onClick={this.onEmoji}
                      alt={eachEmoji.name}
                    />
                    <p className="emoji-name">{eachEmoji.name}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        ) : (
          <div className="love-emoji-container">
            <img src={loveEmojiUrl} className="love-logo" alt="love emoji" />
            <h1 className="greeting">Thank You!</h1>
            <p className="feedback-message">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
