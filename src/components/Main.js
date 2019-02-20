import React from 'react'
import PropTypes from 'prop-types'

import propPic from '../images/propertEAZY2.png'
import notePic from '../images/notesApp.png'
import profile from '../images/profile.jpg'

const contactTitle = {
  margin: '0 auto',
  marginBottom: '60px',
}

const appTitle = {
  textAlign: 'center',
  fontSize: '1.5rem',
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
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
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
            style={{ textDecorationColor: 'blue' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p style={appTitle}>PropertyEAZY</p>
          </a>
          <span className="image main">
            <img src={propPic} alt="screenshot of app" />
          </span>

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
          <a
            href="https://github.com/Lambda-School-Labs/labs9-property-management"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>GitHub</p>
          </a>
          <a
            href="https://cwinslownotes.netlify.com/"
            style={{ textDecoration: 'red' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p style={appTitle}>Lambda Notes</p>
          </a>
          <span className="image main">
            <img src={notePic} alt="screenshot of app" />
          </span>

          <p>
            A simple note taking app with edit, delete and search functionality.
          </p>
          <h4>Technology</h4>
          <p>React | Node | Express | PostgreSQL</p>
          <a
            href="https://github.com/cwinslow22/front-end-project-week"
            // style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>GitHub</p>
          </a>
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
            <img src={profile} alt="profile picture" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
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
            {/* <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li> */}
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
