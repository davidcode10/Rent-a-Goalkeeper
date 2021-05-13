                        Convocation Route

| HTTP Method |              URI path             |           Description           |
|-------------|:---------------------------------:|--------------------------------:|
|     GET     |        /getAllConvocations        | List all convocations create    |
|     GET     | getOneConvocation/:convocation_id | Get one convocation for details |
|     POST    |        /newConvocation            | Create new convocation          |
|     PUT     |  editConvocation/:convocation_id  | Edit convocation                |


-------------------------------------------------------------------------------------

                        Auth Route

| HTTP Method |         URI path         |       Description        |
|-------------|:------------------------:|-------------------------:|
|     POST    |          /signup         | User sign up             |
|     POST    |          /login          | User log in              |
|     POST    |          /logout         | User log out             |
|     POST     |          /isloggedin     | Verify if it's logged in |