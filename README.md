# Getting Started

To start you will need the [docker](https://docs.docker.com/get-docker/), [docker-compose](https://docs.docker.com/compose/install/) and [node](https://nodejs.org/en/download/) installed on your machine.

That done, just access the terminal in the folder `centrifugo-docker-compose`:

~~~console
 $ cd centrifugo-docker-compose/
~~~

And run the docker-compose:

~~~console
 $ docker-compose up
~~~

Then open another terminal and access the anonymous-chat-app-client folder:

~~~console
 $ cd anonymous-chat-app-client/
~~~

Install the project's dependencies:

~~~console
 $ npm install
~~~

Start the development server:

~~~console
 $ npm start
~~~


## How the project was built
The project was built using React on the front end and Centrifuge on the backend running in a Docker container and orchestrated by the docker-compose.
Two projects from other developers were used:
- [Message Chat Box](https://bootsnipp.com/snippets/1ea0N);
- [Centrifugo docker-compose demo
](https://github.com/rongfengliang/centrifugo-docker-compose);