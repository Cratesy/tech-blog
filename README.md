# tech-blog

![MIT license](https://img.shields.io/badge/license-MIT-green)

## Table of Contents

- [tech-blog](#tech-blog)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [deployed url](#deployed-url)
  - [screenshots](#screenshots)

## Description

I've been tasked with making a tech-blog that saves to a server database.
Ive done this by doing;

- building server files
- building controllers for functions such as delete/ post / edit ,
- building a db to push into for blogs/comments/users
- building routes so that what ever is clicked the route works,
- building models so that everything can be linked to one another,
- middleware for if your logged in or not,
- hooks for password hashing using "Bcrypt",
- helpers for formatting the date/time for blog/comment created at and edited at,

## Installation

```
git clone git@github.com:Cratesy/tech-blog.git
cd tech-blog
npm install
```

## Usage

As a user, i am presented with the homepage which tells me to log in or sign up to view blogs.
as a user i click on sign up fill out all the fields required and then presented with the login page so that i can log in using the details i signed up with.
as a user once i've logged in i can see all blogs created on homepage i can go to the dashboard to see all blogs i've created can also edit them and delete them here.
as a user i can create a blog on the dashboard/homepage and from homepage view a single blog and comments and also add my own comments to it.
as a user i can log out

## License

[MIT License](https://opensource.org/licenses/MIT)

## Contributing

[Mike](https://github.com/Cratesy)

## Tests

None were need

## deployed url

https://stormy-bayou-37854.herokuapp.com/

## screenshots

<img src="./public/assets/img/landing%20page%20blog%20app.jpg"
alt="landing page"/>
<img src="./public/assets/img/dashboard%20page%20for%20user%20blog%20app.jpg"
alt="dashboard"/>
<img src="./public/assets/img/home%20page%20for%20logged%20in%20user%20to%20see%20everyones%20blogs%20blog%20app.jpg"
alt="homepage of a logged in user"/>
<img src="./public/assets/img/blog%20and%20comments%20for%20a%20single%20blog%20on%20view%20tab%20blog%20app.jpg"
alt="blog page with comments and box for adding a comment "/>
