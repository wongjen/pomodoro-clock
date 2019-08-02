## React Pomodoro Clock

Pomodoro Clock is a simple timer built with JavaScript and React.

### User Stories

The following stories are implemented:

[x] User can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement".
[x] User can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment".
[x] User can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5.
[x] User can see an element with a corresponding id="session-length", which by default displays a value of 25.
[x] User can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session").
[x] User can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).
[x] User can see a clickable element to start/stop the timer.
[x] User can see a clickable element to reset the timer.
[x] User can click the reset element and any running timer should be stopped, the default values of the timers should display (break-length = 5, session-length = 25), and the timer should reset to its default state.
[x] User can click on the break decrement/increment elements to decrease/increase the break session by 1, seeing the updated value.
[x] User can click on the session decrement/increment elements to decrease/increase the session by 1, seeing the updated value.
[x] User should not be able to set a session or break length to <=0.
[x] User should not be able to set a session or break length to > 60.
[x] When a user first clicks on the start/stop element, the timer should begin running from the value currently displayed in the session length, even if the value has been incremented or decremented from the original value of 25.
[x] If the timer is running, the element with the id of time-left should display the remaning time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).
[x] If the timer is running and the user clicks the start-stop element, the countdown should pause.
[x] If the timer is paused and the user clicks the start-stop element, the countdown should resume running from the point at which it was paused.
[x] When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun.
[x] When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.
[x] When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun.
[x] When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.
[x] When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. 

### Demo

You may view a demo version of this code here:
http://chubby-letter.surge.sh/

### Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
