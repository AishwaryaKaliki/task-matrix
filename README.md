## task-matrix

This is an application implementing the Eisenhower Matrix technique for prioritizing tasks, using ReactJS and SemanticUI for React.

### Installation
    Download the zip file and extract the contents. Navigate into the 'task-matrix' folder.
    Create a db.json file for persisting data with the following format:

    {
        "accounts" :[
            {
                "id": 1,
                "username": "user1",
                "name": "User 1",
                "data": [
                    {
                        "name": "Task List 1",
                        "tasks": [["Task1", "Task2"],["Task3","Task4"],[],[]],
                        "pending": 4
                    },
                    {
                        "name": "Task List 2",
                        "tasks": [["Task1"],["Task2"],[],[]],
                        "pending": 2
                    }
                ]
            }
        ]
    }


    Then navigate to the folder in your terminal and execute the following:
    npm install
    npm start
    (In a separate terminal)npm run-script startdb    

### Features
    * Login Page, available at localhost:3000/
    * User's tasklist, available at localhost:3000/<username>

### Working on:    
    * Connecting the Login to the User's task list.
    * Adding tasks, and task editing buttons.
    * Adding a button to create new lists for a user.
    * Creating users/accounts.
    * Persisting data.
    * Labels for tasks.
    * Progress bars: tasks left and tasks completed.
    * Other styles and formatting.

