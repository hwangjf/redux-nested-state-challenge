How was this?
How far did you all get?
Not much time to work on it thats fine we will go over this together

We can go over another example tomorrow even though this one was super simple
imagine we implemented having a user

Some things to note just from a super high level
Can someone describe to me what is happening and how we can make this happen with react and redux (this is not a problem I would initially attempt to solve with redux rather this is a simple implementation that is meant to show how it could be used and implemented)

What is going on here we are writing notes for a given subject that is pretty self explanatory
What does our global store need to hold and how does this help us
While this is a relatively simple app it still is designed with a pretty complex pattern

Let's walk through the flow of what is happening 
We have an input field, that is purely controlled by react and why does this make sense? it is a super local change there is nothing that happens to the rest of the application until there is a submission

What are the buzzwords from redux and what do they mean and where and how are they used?
- store/createStore
- Provider
- connect
- mapStateToProps
- mapDispatchToProps
- reducer
- actions
- types

https://gist.github.com/alexgriff/0e247dee73e9125177d9c04cec159cc6


in order to fake combine reducer I am going to add a signup 

We can grow this domain a bit further and I will implement a backend and can review auth with thunk 