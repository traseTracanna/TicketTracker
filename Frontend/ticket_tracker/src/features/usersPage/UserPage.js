/* User's page
        * This will have a table similar to the dataList table, so can probably just recycle that for this purpose? 
        * The issue i face here is if this is supposed to display data of every user from the db, where am i pulling and storing that data from? 
            * I could make a slice similar to allProjects or allTickets that would house allUsers, but i'm not sure if that's wholly necessary. 
            * I just don't want to have to re-call the server to fetch every user's data everytime this page is navigated to
                and other than storing this info in the state, i don't know where else it would go to solve this issue. 
        This whole section is kind of a mess when it comes to slices. I feel like there's a better way to go about all of it but i'm not just sure. 



*/