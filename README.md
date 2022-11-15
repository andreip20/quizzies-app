# quizzlet-app
My first app in React


Hello! In this project, I have made a quizz app where you're being sent to 3 pages:

# First page
This is the intro page. The button will send you to the second page, which is the actual quizz page. This page has nothing special going on - basic styling with CSS and a transfer function which I have implemented through manipulating the className attribute.

# Second page
This is the quizz page. The questions and the answers are both being pulled through an API, called Trivia API. There are 4 questions at all times, with 4 answers to choose from. Upon completion, the user can submit the answers and will get redirected to the final page. The user cannot submit the whole quizz unless all questions have been answered. The answer-buttons are dynamic, so one can change the answer to the question at any times before submitting.

# Third page
This is the third and final page. Here, the final result will be shown to the user and have the possibility of taking another quizz, being therefore redirected to the intro page through a page reload. 



-- Project was made using React, HTML and CSS.
-- Implemented API-call through axios-react library.
-- Manipulated the pages through className attribute of .jsx using CSS styling (hidden/shown through boolean values).

For any other inquiries/issues don't hesitate to post on #Issues section on the repo.

That is all!
