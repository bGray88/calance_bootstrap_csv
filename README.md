# README
## API Data Fetcher (Github Bootstrap Repo)

Built using Node and Express, this simple app will fetch some repo data from the Bootstrap Github page.

## Usage
- Clone the repo to a destination of your choice: 'git clone git@github.com:bGray88/calance_bootstrap_csv.git'
- The app can be run in one of two ways:
* Ia) To run via app, double click the app in the 'dist' directory for your system specific preference- MACOS, WIN, LINUX.
* Ib) The alternate method would be to run it using npm and node: navigate to the root directory of this project and type-
```sh
npm install
```
```sh
npm start
```
(If npm is not found then node is not installed and the process of installing NVM, NPM, and Node will need to come first)
* II) Navigate to localhost:8000 in your browser of your choice.
* III) Click on 'Collect Info' in the Navbar.
* IV) Input an absolute or relative save destination for your CSV file and click the 'Process' button.
* V) View the info in the new window about the CSV file created.
* VI) Locate your new CSV file in the destination you had selected.

![alt text](src/public/images/readme/readme-sample-form.png)

![alt text](src/public/images/readme/readme-sample-info.png)

<a name="readme-top"></a>

<details>
  <summary>Table of Contents</summary>
  <ul list-style-position="inside">
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#learning-goals">Learning Goals</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#endpoints">Endpoints</a></li>
      </ul>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
      <ul>
        <li><a href="#developers">Developers</a></li>
        <li><a href="#project-managers-instructors">Project Managers-Instructors</a></li>
      </ul>
    </li>
  </ol>
</details>

## About the Project
  
  ### Production Links
  
  * [Github Bootstrap Repo Info](https://github.com/bGray88/calance_bootstrap_csv) <br>

  ### Learning Goals

  * To build a Node & Express app from the ground up

  ### Built With

  [![Node]][Node-url] [![Express]][Express-url] [![Postman]][Postman-url]

  ### Roadmap
  <details>
    <summary>Done</summary>
    - [x] Add Readme<br>
    - [x] Setup Repo and Push to Github<br>
    - [x] Readme: Outlines the learning goals<br>
    - [x] Readme: Clone and Setup<br>
  </details>
  <details>
    <summary>In Progress</summary>
  </details>

  <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

  ### Prerequisites

  * Node v16.15.1^

  ### Installation

  _Below are instructions for forking and cloning this repo_

1. Clone the repo
  ```sh
  git clone git@github.com:bGray88/calance_bootstrap_csv.git
  ```
  2. Install Modules
  ```sh
  npm install
  ```
  3. Run the servers
  ```sh
  npm start
  ```

  <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Pages
  
  ### Pages - Welcome
  
  A simple welcome page with a navbar that will guide users between the two pages.

  ### Pages - Form

  ![alt text](src/public/images/readme/readme-sample-form.png)

  On this page, the user can input either a relative or an absolute path in which to save the CSV

  ### Pages - Info

  ![alt text](src/public/images/readme/readme-sample-info.png)

  This page will display any data returned by the called API in a table format

## Contributing

  Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

  If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
  Don't forget to give the project a star! Thanks again!

  1. Fork the Project
  2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
  3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
  4. Push to the Branch (`git push origin feature/AmazingFeature`)
  5. Open a Pull Request

  ### Developers

  <div align="center">
    <img src="https://avatars.githubusercontent.com/u/111726505?v=4" alt="Profile" width="80" height="80">
    <p align="center">
      Brandon Gray<br>
      <a href="https://github.com/bGray88">Github: bGray88</a><br>
      <a href="https://www.linkedin.com/in/brandon-gray-67903689/">LinkedIn: Brandon Gray</a>
    </p>
  </div>

  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  [Node]: https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white
  [Node-url]: https://nodejs.org/en/
  [Express]: https://img.shields.io/badge/Express.js-404D59?flat&logo
  [Express-url]: https://expressjs.com/
  [Postman]: https://img.shields.io/badge/-Postman-FF6C37?style=flat&logo=postman&logoColor=white
  [Postman-url]: https://www.postman.com/
