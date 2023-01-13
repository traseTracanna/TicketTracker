/*
** This file is used for fake data until i create and connect the DB.
** Should help with front end development.
*/


//samples of each data type:

const fakeUser1 = {
    name: 'john snow',
    id: '12345',
    isAdmin: true
};

const fakeUser2 = {
    name: 'bilbo bagins',
    id: '86753',
    isAdmin: false
};

const fakeUser3 = {
    name: 'batman begins',
    id: '11100',
    isAdmin: false
};

const fakeUser4 = {
    name: 'Kali Ma',
    id: '10203',
    isAdmin: false
};

const fakeUser5 = {
    name: 'Digadango Senior',
    id: '00001',
    isAdmin: true
};

const fakeUser6 = {
    name: 'Sriracha Jones',
    id: '56709',
    isAdmin: false
};

const fakeComment1 = {
    createdBy: fakeUser1,
    dateCreated: '1/6/23',
    commentText: 'This is fake comment 1.'
};

const fakeComment2 = {
    createdBy: fakeUser3,
    dateCreated: '1/6/23',
    commentText: 'This is fake comment 2.'
};



const fakeTicket1 = {
    name: 'fakeTicket 1',
    description: 'This is the first fake ticket.',
    type: 'bug/error',
    priority: 'low',
    dateCreated: '1/6/23',
    associatedProject: 'recursion',
    createdBy: fakeUser1,
    assignedUsers: [fakeUser2, fakeUser3],
    comments: [fakeComment1, fakeComment2],
    id: 'ft0001'
};

const fakeTicket2 = {
    name: 'fakeTicket 2',
    description: 'This is the second fake ticket.',
    type: 'feature addition',
    priority: 'high',
    dateCreated: '1/10/23',
    associatedProject: 'recursion',
    createdBy: fakeUser1,
    assignedUsers: [fakeUser2, fakeUser3],
    comments: [fakeComment1, fakeComment2],
    id: 'ft0002'
};

const fakeProject1 ={
    name: 'fakeProject1',
    description: 'This is the first fake project.',
    dateCreated: '1/6/23',
    projectManagers: [fakeUser1],
    createdBy: fakeUser1,
    assignedUsers: [fakeUser1, fakeUser2, fakeUser3],
    comments: [fakeComment1, fakeComment2],
    listOfTickets: [fakeTicket1, fakeTicket2],
    id: 'fp0001' 
};

const fakeProject2 ={
    name: 'fakeProject2',
    description: 'This is the second fake project.',
    dateCreated: '1/9/23',
    projectManagers: [fakeUser2],
    createdBy: fakeUser2,
    assignedUsers: [fakeUser1, fakeUser3],
    comments: [fakeComment1, fakeComment2],
    listOfTickets: [fakeTicket1],
    id: 'fp0003' 
};


//For some reason, having the project object as a part of the ticket object list of things causes infinite recursion when trying to load this data. This may not be a problem, however,
//when data will be loaded from the data base. 
//fakeTicket1.associatedProject = fakeProject1;




export const arr1 = [{test: 'test', number: 'number'}, {test: 'test2', number: 'number2'}];


/* A project object has: 
    * name
        A string
    * description
        A string
    * date created
        A date object or string or something
    * project manager(s)
        an array of users
    * created by
        a user
    * assigned users
        an array of users
    * comments
        an array of comment objects
    * list of tickets
        an array of ticket objects
    * an id
        a uuid

const projects = an array of project objects
*/
export const projects = [fakeProject2, fakeProject1];


/* A ticket object has:
    * name
        A string
    * description
        A string
    * type
        A string
    * priority
        A string
    * date created
        A date object or string or something
    * associated project
        A string
    * created by
        A user
    * assigned users
        an array of users
    * comments
        an array of comment objects
    * an id
        uuid

const tickets = an array of ticket objects
*/
export const tickets = [fakeTicket1, fakeTicket2];


/* A comment object has:
    * created by
        A user Object
    * date created
        A data object or something
    * comment text
        A string

*/ 

/* A user object has:
    * name
        string
    * id
        uuid
    * isAdmin
        boolean

const users = an array of user objects
*/ 
export const users = [fakeUser1, fakeUser2, fakeUser3, fakeUser4, fakeUser5, fakeUser6];


