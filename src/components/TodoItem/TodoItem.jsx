
import { useDispatch } from 'react-redux';
import { changeStatusTodoAC, deleteTodoAC } from '../../redux/actionCreators/todosAC';
import todoItemStyles from './styles.module.css'

export const TodoItem = ({id, title, status, inx}) => {

  const dispatch = useDispatch()

  const deleteTodoHandler = () => {
    dispatch(deleteTodoAC(id))
  }

  const statusTodoHandler = () => {
    dispatch(changeStatusTodoAC(id))
  }

  return (
    <li
      className="list-group-item d-flex justify-content-between"
    >
      <span
        className={`d-flex align-items-center ${
          status ? todoItemStyles.done : ""
        }`}
      >
        {inx + 1}. {title}{" "}
      </span>
      <div>
        <button
          onClick={deleteTodoHandler}
          type="button"
          className="btn mx-2 btn-danger"
        >
          Delete
        </button>
        <button
          onClick={statusTodoHandler}
          type="button"
          className="btn btn-success"
        >
          Done
        </button>
      </div>
    </li>
  );
};
