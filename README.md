## Comeon home assignment solution Ivan Riumkin

### Additional script
I added json-server as a dev dependency and added start script - "npm run start-backend"

### Technical choices

1 Routing. In this solution, I did not use routing because it seems like for this scale it might not provide any benefits. However if I were to use routing the solution would be done in a similar fashion where game lobby and actual launched game would have their own routes protected by conditional rendering on the front-end and by a middleware function that would check whether the user logged in or not (for example by checking the validity of validation token) on the backend.

2 Context. I used context only to pass authentification and user data. However, games data and categories could also use context if the application becomes more complex. At this stage there's only two-level props drilling at most which is ok, but if further nested element required the same data then context would be a better solution.

3 Error handling. Some basic error handling is implemented in async functions using try-catch blocks. It could be further improved by creating custom error components that would wrap the async functions. Moreover, error-modal component could be added for a customised error message pop-up screen instead of using alert.


### Issue
I wasn't quite sure how to enable mobile layout of the game screen as it sees to be passed with the application data ? For now I just made the full screen mode in the desktop with the button to go back. Mobile view of the game screen isn't breaking anything but is not quite usable unless the screen is rotated.

### Other notes

I tried to use minimum of libraries from the React ecosystem. Redux and reducers could be used, although I think it would be an overkill for this scale and the code would be a bit less readable. However, for a larger scale, with additional features Redux would be a good choice.
