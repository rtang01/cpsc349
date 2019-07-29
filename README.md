# Day 12

Install [JSON Server](https://github.com/typicode/json-server):

    $ npm install -g json-server

Clone the GitHub repository:

    $ git clone https://github.com/ProfAvery/cpsc349

Start JSON Server:

    $ cd cpsc349/day12
    $ json-server --watch db/db.json


# Day 10

Clone the GitHub repository:

    $ git clone https://github.com/ProfAvery/cpsc349

Open the page with browser-sync:

    $ cd cpsc349/day10
    $ browser-sync start --server --startPath /posts.html --files '*.html, *.js'


# Day 6

Install the [Eleventy](https://www.11ty.io) static site generator:

    $ npm install -g @11ty/eleventy

Clone the GitHub repository:

    $ git clone https://github.com/ProfAvery/cpsc349

Generate the static site and open it with browser-sync:

    $ cd cpsc349/day6
    $ eleventy --serve

