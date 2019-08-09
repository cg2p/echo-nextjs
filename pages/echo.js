import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'

class Echo extends Component {
  constructor (props) {
    super(props)

    this.state = { echoText: '', error: '' }
    this.handleEchoTextChange = this.handleEchoTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEchoTextChange (event) {
    this.setState({ echoText: event.target.value })
  }
  
  async handleSubmit (event) {
    event.preventDefault()
    this.setState({ error: '' })
    const echoText = this.state.echoText;
    const url = 'http://localhost:3001/echo';
    
    var myheaders = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: myheaders,
        body: JSON.stringify({ echoText })
      })
      if (response.ok) {
        const { echoResponse } = await response.json()
        console.log('echoResponse is %s', echoResponse);
        this.setState({echoResponse: echoResponse });
      } else {
        console.log('echo failed.')
        let error = new Error(response.statusText)
        error.response = response
        throw error
      }
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        echoText, 
        error
      )
      this.setState({ error: error.message })
    }
  }

  render () {
    return (
      <Layout>
        <div className='echo'>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='echo text'>Echo</label>

            <input
              type='text'
              id='echoText'
              name='echoText'
              value={this.state.echoText}
              onChange={this.handleEchoTextChange}
            />
            
            <button type='submit'>Go</button>

            <p className={`error ${this.state.error && 'show'}`}>
              {this.state.error && `Error: ${this.state.error}`}
            </p>
          </form>

          <p>Last echo was: {this.state.echoResponse}</p>
        </div>
        <style jsx>{`
          .echo {
            max-width: 340px;
            margin: 0 auto;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          form {
            display: flex;
            flex-flow: column;
          }

          label {
            font-weight: 600;
          }

          input {
            padding: 8px;
            margin: 0.3rem 0 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .error {
            margin: 0.5rem 0 0;
            display: none;
            color: brown;
          }

          .error.show {
            display: block;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Echo;
