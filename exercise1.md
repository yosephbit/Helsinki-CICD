1. linting, testing, and building python applications.
* for linting python application, the most common tool is pylint and pycodestyle. You can run `python -m pycodestyle <file.py>`.
* for testing python applications, we can use pytest which is external module or unittest. You can run `python -m pytest <file.py>` and pytest will look for methods that have the word 'test' in them, and run them.
* python basically don't need build stage. you can run python as it is just like how you run it on the development stage.

2. other ci tools
* CircleCI is one of the famous cloud base CI tool. you can write `config.yml` file in a `.circleci` directory which will contain the images and commands on how to run test lint.. your code.
* TeamCity is also another option
* Not popular as other, but Fabrics is also CI tool. It is pythons module and needs python environment to run. It is on premise and does need complicated scripts. 

3. cloud base or self-host.
I should say it depends. Cloud based CI tools are easy to set up, cheap, reliable... and most of them has free trial period. You don't have to care weather your computer having the self-host CI tool is online or not, working or not... All you need to do is push your code. And also they have notification system, weather they will send you a message or notify you on a slack. It is pretty handy if you are developing small to medium application. On the other hand, self-hosted can be a good choice if you want your own set up, control it in your way, and more importantly if you don't want to share your secret environmental variables with third parties or have your own server. If so, self-hosted might be a good choice.
