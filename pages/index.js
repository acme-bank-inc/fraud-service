import React, { Component } from 'react'

class FraudCheckPage extends Component {
  constructor(props) {
    super(props)
    this.state = { transactionId: '', result: null }
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch('/api/fraud-check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ transactionId: this.state.transactionId })
    })
      .then(res => res.json())
      .then(data => this.setState({ result: data }))
  }

  render() {
    return (
      <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'system-ui, sans-serif' }}>
        <h1>Fraud Detection Service</h1>
        <p>Acme Bank fraud detection and risk assessment platform.</p>

        <section style={{ marginTop: '2rem' }}>
          <h2>Fraud Check</h2>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              type="text"
              placeholder="Transaction ID"
              value={this.state.transactionId}
              onChange={(e) => this.setState({ transactionId: e.target.value })}
              style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem' }}
            />
            <button type="submit" style={{ padding: '0.5rem 1rem' }}>Check Fraud</button>
          </form>
        </section>

        {this.state.result && (
          <section style={{ marginTop: '2rem' }}>
            <h2>Result</h2>
            <pre>{JSON.stringify(this.state.result, null, 2)}</pre>
          </section>
        )}

        <section style={{ marginTop: '2rem' }}>
          <h2>Status</h2>
          <p>Service operational.</p>
        </section>
      </div>
    )
  }
}

export default FraudCheckPage
