/*
dataListSlice 
    the state of this slice will determine 2 things:
        1) The way data in the list is sorted, meaning an action dispatcher will re-render the data in a specific order based on what is clicked to sort
            This data is stored in a linked list, where each node is an N number of rows, and once full will create a new node to continue filling
            Each node will be a page of data to be displayed, and by default, after sort and on initial render, display page 1
        2) Which page of data is being displayed in the list
            meaning if the listPagesNav value is updated, it will be reflected in this state, thus returning a different page of data should one be available.

        How this works in code would be like:
            1) A user selects a dataList page
            2) the viewSlice will update accordingly, telling the dataListSlice which data it needs to select, either ticket or project.
            3) the appropriate selector from allProjectsSlice or allTicketsSlice is utilized to get all of the data based on the current user and store it in a variable here
            4) the data in the variable is then loaded into a doubly-linked list of pages that contain row components 
            5) Page 1 of the data is displayed on the page, and will be updated to page N if the user clicks a navigation button
            6) When a user clicks a sort button, the data within the variable is resorted by a reducer action and stored in the state, the navState is reverted to page 1, and the
                data is re-rendered. 
            7) If a user clicks a project or ticket name, it calls the viewSlice to update, and the view is changed to that individual ticket or project


*/ 