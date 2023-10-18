<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/dzitting/chat-app">
    <img src="https://imgtr.ee/images/2023/10/17/c3e63cebb4a55e4e3375d0895608d16d.jpeg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Chattle: Web Chat Application</h3>

  <p align="center">
    A web chat application created with CRA React.js, using Firebase and Redux
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template#readme"><strong>Checkout the README Template »</strong></a>
    <br />
    <br />
    <a href="https://chattle.netlify.app/">View Deployed</a>
    ·
    <a href="https://dzitting.github.io/">Project List</a>
    ·
    <a href="https://github.com/dzitting/chat-app/issues">Feedback/Issues</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Chattle Web App Screenshot][product-screenshot]](https://imgtr.ee/images/2023/10/17/c3e63cebb4a55e4e3375d0895608d16d.jpeg)

I created this project for direct messaging friends from a web application. The design is so that users can only message another user with the exact username, or previous conversation. 

When searching for a user:

<h4>Example</h4>

The user you are looking for `janedoex`

```sh
Search user... JaneDoeX
```

This will result in _no_ results due to the fact this is a case sensitive search and the two queries do not match.

You can find the frameworks and what this application was built with below. The styling was made with different CSS modules.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

 [![React][React.js]][React-url]

 [![Redux][Redux]][Redux-url]

 [![Firebase][Firebase]][Firebase-url]

 [![React Router][React Router]][React Router-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get started with this repo, you will need a code editor, like VSCODE. And also some experience with the terminal.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

  ```sh
  npm install
  ```

### Installation

1. Get a Firebase Acccount at [https://firebase.google.com/](https://firebase.google.com/)
2. Setup the authorization by following the Firebase instructions when you setup your Firestore app.
3. Clone the repo
   ```sh
   git clone https://github.com/dzitting/chat-app.git
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Enter your API & ID in `.env`
   ```js
   const API_KEY = 'ENTER YOUR API';
   const ID = 'ENTER YOUR ID';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To use this application you must either:

* Create an account
* Use the provided mock account
    * Username: jstein@mail.com
    * Pass: 123stein

If you use the mock account, you may proceed directly to login and checkout the current conversations Jeff Steinman has already.

Otherwise, head over to the sign-up page and create an account with username, email, & password. **Don't forget to upload your profile picture!**

(If you forget your picture it can be edited inside the app after login.)

Once you're signed up, you'll be redirected to the login page where you can login with the email and password you used at signup. Once you're logged in, you may search users to message. Feel free to message Jeff Steinman for fun if you don't have any other users to message, yet.

### SearchBar

To find users to message, you may use the `search bar` below the Conversations title. The search is **case sensitive**! Checkout <a href="#about-the-project">About the Project</a> for more information or the `Help` button inside the app. That will breakdown the usage further.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Users can create an account
- [x] Users can login to their existing account
- [x] Data is stored within Firebase
- [x] Email is authorized through Firebase Authorization
- [x] 3 Pane Structure
- [x] Users can have Profile Picture
- [ ] Sending Content
    - [x] Text
    - [ ] Image
- [ ] Mobile Responsiveness
    - [ ] React Native alternative

See the [open issues](https://github.com/dzitting/chat-app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

*No contributions at this time*

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTACT -->
## Contact

Denise Zitting - [linkedin](https://linkedin.com/in/denise-zitting101)

Project Link: [https://github.com/dzitting/chat-app](https://github.com/dzitting/chat-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [React Router Docs](https://reactrouter.com/en/main)
* [Redux Docs](https://redux.js.org/tutorials/index)
* [Firebase Docs](https://firebase.google.com/docs/firestore)
* [PedroTech](https://www.youtube.com/watch?v=0gLr-pBIPhI&ab_channel=PedroTech)
* [LlamaDev](https://www.youtube.com/watch?v=k4mjF4sPITE&ab_channel=LamaDev)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dzitting/chat-app.svg?style=for-the-badge
[contributors-url]: https://github.com/dzitting/chat-app/graphs/contributors
[Firebase]: https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white
[Firebase-url]: https://firebase.google.com/
[forks-shield]: https://img.shields.io/github/forks/dzitting/chat-app.svg?style=for-the-badge
[forks-url]: https://github.com/dzitting/chat-app/network/members
[stars-shield]: https://img.shields.io/github/stars/dzitting/chat-app.svg?style=for-the-badge
[stars-url]: https://github.com/dzitting/chat-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/dzitting/chat-app.svg?style=for-the-badge
[issues-url]: https://github.com/dzitting/chat-app/issues
[license-shield]: https://img.shields.io/github/license/dzitting/chat-app.svg?style=for-the-badge
[license-url]: https://github.com/dzitting/chat-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/denise-zitting101
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[React Router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React Router-url]: https://reactrouter.com/en/main
[Redux]:https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]:https://redux.js.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 