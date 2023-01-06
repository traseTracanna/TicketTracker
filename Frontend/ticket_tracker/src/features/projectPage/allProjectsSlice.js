/* 
* allProjectsSlice
    contains data for all projects. This would be accessed by a selector to display based on the active user.       
* allTicketsSlice
    contains data for all tickets. This would be accessed by a selector to display based on the active user.

*** So allProjectsSlice and allTicketsSlice only reducers would be to load the initial data. 
    They would then have selectors that would:
        return filtered lists of that data based on the user who is logged in or
        return filtered data based on an individual project/ticket to load into a single project/ticket page 
    ...

     I was wrong. 
    It seems these may also need reducers for
     updating information about tickets and projects as new comments and tickets are created, 
     and names/descriptions are updated

     So basically, on initial load a list of data is taken from the db and assigned to the state of that slice to be accessed by a selector later.
     Meaning, the state of allTicketsSlice would look something like:
        allTicketsReducer.state = [ { * ticket info from db * }, { * ticket info from db *} ]
        So you would need a reducer that accepts a payload with the ticket/project to update, search through the state array for the matching ticket/project id, and then update its 
        changed fields with the new info.
    
        for instance, if the action is to add a new comment the reducer's action creator would be called 'addComment' and it would: 
            Parse the array list of projects/tickets in the state to find the matching one
            update the matching project/ticket's array of comments by pushing the new one on 
    ***





*/