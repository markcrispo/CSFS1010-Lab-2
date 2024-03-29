## Installation:

```
git clone https://github.com/markcrispo/CSFS1010-Lab-2
cd CSFS1010-Lab-2
npm i
npm run dev
```

# CFS1010 Lab 2

We'll continue building on the To Do List application that we started in Lab 1.

## Step 1 - Multiple To-Do list items

Underneath the To-Do list, add an "Add" button and a "Remove" button to add and remove tasks from the bottom of the To-do list.

_Hints:_

- Add a `useState` to track the number of todos. Add and Remove should increment/decrement the count respectively.

## Step 2 - Removing individual tasks

Next, we'll want to be able to remove specific tasks from the To-Do list. To accomplish this, we'll want to [lift state](https://react.dev/learn/sharing-state-between-components)

In `ToDoItem`:

- Convert the `useState` hooks for the checkbox and text field to props

In `App.jsx`:

- Add `const [todos, setTodos] = useState([{ title: 'Get groceries', isChecked: false }])`
- Map the `todos` state to the `<ToDoItem />` component
- Implement functions `setIsChecked` and `setTitle` for a to-do item at a particular index
- Hook up the "Add" and "Remove" buttons that we added in Step 1

Once we're done with that refactor, we can implement the remove button:

In `ToDoItem`:

- Add a "Remove" button, and a `handleRemove` prop

In `App.jsx`:

- Implement `handleRemove` for a to-do item at a particular index

## Step 3 - Task summary

Add a message at the bottom of the To-Do list telling the user how many tasks they've completed. If they've completed all their tasks, add an additional message telling them, "Good job!"

## Step 4 - Filtering

A product manager tells you that users would like to filter their To-Do list:

- _Active_: Shows all tasks that haven't been completed
- _Completed_: Shows all tasks that have been completed
- _All_: Shows all tasks regardless of completion

Add three buttons - one for each filter.

## Bonus Exercises:

- Add an Empty State when there are no tasks on the To-Do list.
- Add a "Check All" button that marks all tasks as completed
