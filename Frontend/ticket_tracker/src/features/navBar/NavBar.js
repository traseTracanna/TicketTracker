/* 
Navigation bar
    * Depending on the selected button, those components will be displayed beneath the nav bar -- So the dataListSlice state is toggled by these button presses?
    * Or maybe there is a viewSlice that changes whether looking at projectList, ticketList, a ticket, or a project?
    * Also needs logout button  
    

    ***

    This component will be the main thing rendered by our App, i think. And then within this component, it will render pages underneath depending on the state of the view slice. 
    Essentially, we'll just have jsx for the nav and logout buttons themselves, and below that have logic that will display different things depending on the state of the view. 
    Not entirely sure if this is the best way to go about this, but i'm kinda here for it. 

*/