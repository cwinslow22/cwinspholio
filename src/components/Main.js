import React from 'react'
import PropTypes from 'prop-types'

import propPic from '../images/propertEAZY2.png'
import notePic from '../images/notesApp.png'
import profile from '../images/profile.jpg'
import game from '../images/gameOfLife.png'

const contactTitle = {
  margin: '0 auto',
  marginBottom: '60px',
}

const appTitle = {
  textAlign: 'center',
  fontSize: '1.9rem',
}

const contactItems = {
  display: 'flex',
  justifyContent: 'space-evenly',
  marginBottom: '30px',
}

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/* <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
    
          {close}
        </article> */}

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <a
            href="https://properteazy.netlify.com/"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p style={appTitle}>PropertEAZY</p>
          </a>
          <a
            href="https://properteazy.netlify.com/"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="image main">
              <img src={propPic} alt="screenshot of app" />
            </span>
          </a>
          <p>
            Property management app that makes managing a property as pain free
            as possible. Tenants can make rent payments and maintenance
            requests, while owners are able to add properties, update work
            orders and manage tenants.
          </p>
          <h4>Technology</h4>
          <p>
            React | Material UI | styled-components | Node | Express |
            PostgreSQL | Stripe Connect
          </p>
          {/* <a
            href="https://github.com/Lambda-School-Labs/labs9-property-management"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>GitHub</p>
          </a> */}
          <button
            type="button"
            class="btn btn-secondary"
            style={{ marginRight: '10px' }}
          >
            <a
              href="https://github.com/Lambda-School-Labs/labs9-property-management"
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>GitHub</p>
            </a>
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            style={{ marginBottom: '50px' }}
          >
            <a
              href="https://properteazy.netlify.com/"
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Website</p>
            </a>
          </button>
          <a
            href="https://cwinslownotes.netlify.com/"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p style={appTitle}>Lambda Notes</p>
          </a>
          <a
            href="https://cwinslownotes.netlify.com/"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="image main">
              <img src={notePic} alt="screenshot of app" />
            </span>
          </a>
          <p>
            A simple note taking app with edit, delete and search functionality.
          </p>
          <h4>Technology</h4>
          <p>React | Node | Express | PostgreSQL</p>
          <button
            type="button"
            class="btn btn-secondary"
            style={{ marginRight: '10px' }}
          >
            <a
              href="https://github.com/cwinslow22/front-end-project-week"
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>GitHub</p>
            </a>
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            style={{ marginBottom: '50px' }}
          >
            <a
              href="https://cwinslownotes.netlify.com/"
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Website</p>
            </a>
          </button>
          <a
            href="https://cwinslowgameoflife.netlify.com/"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p style={appTitle}>Game of Life</p>
          </a>
          <a
            href="https://cwinslowgameoflife.netlify.com/"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="image main">
              <img src={game} alt="screenshot of app" />
            </span>
          </a>
          <p>
            A React app based on John Conway's Game of Life, one of the earliest
            examples of cellular automaton.
          </p>
          <h4>Technology</h4>
          <p>React | Canvas</p>
          <button
            type="button"
            class="btn btn-secondary"
            style={{ marginRight: '10px' }}
          >
            <a
              href="https://github.com/cwinslow22/Conways-Life"
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>GitHub</p>
            </a>
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            style={{ marginBottom: '50px' }}
          >
            <a
              href="https://cwinslowgameoflife.netlify.com/"
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Website</p>
            </a>
          </button>
          <ul style={contactItems} className="icons">
            <li>
              <a
                href="mailto:cwinslow22@yahoo.com?Subject=Portfolio"
                className="icon fa-envelope"
              >
                <span className="label">email</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/cwinslow/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/cwinslow22"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={profile} alt="" />
          </span>
          <p>
            Greetings, thanks for stopping by. I'm Charlie and a recent graduate
            from Lambda School's Full Stack Web Development program. In my not
            too distant past, I was a successful trader where I honed my problem
            solving skills in the Chicago bond market. More recently, I've been
            helping clients build things over at{' '}
            <a
              href="https://windsprint.io/"
              target="_blank"
              rel="noopener noreferrer"
              // className="icon fa-linkedin"
            >
              WindSprint.
            </a>
          </p>
          <ul style={contactItems} className="icons">
            <li>
              <a
                href="mailto:cwinslow22@yahoo.com?Subject=Portfolio"
                className="icon fa-envelope"
              >
                <span className="label">email</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/cwinslow/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/cwinslow22"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 style={contactTitle} className="major">
            Contact
          </h2>
          {/* <span className="image main">
            <img src={contact} alt="" />
          </span> */}
          <p>
            Looking for my resume? Just drop me an email at the link below and
            I'd love to send you a fresh copy.
          </p>
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form> */}
          <ul style={contactItems} className="icons">
            <li>
              <a
                href="mailto:cwinslow22@yahoo.com?Subject=Portfolio"
                className="icon fa-envelope"
              >
                <span className="label">email</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/cwinslow/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/cwinslow22"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
