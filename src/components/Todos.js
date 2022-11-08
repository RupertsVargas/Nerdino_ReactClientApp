import React, { useState ,Component} from 'react';
import { useQuery, useMutation } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input,Form } from 'reactstrap';
// import PropTypes from 'prop-types'
import { api } from '../utilities/api'
import PropTypes from 'prop-types';
function countRemainingTasks(todoList) {
    return todoList.tasks.filter(t => !t.done).length;
}






Input.propTypes = {
    // TablePaginationActions.propTypes = {
    //     count: PropTypes.number.isRequired,
    //     onPageChange: PropTypes.func.isRequired,
    //     page: PropTypes.number.isRequired,
    //     rowsPerPage: PropTypes.number.isRequired,
    //   };
    // name:PropTypes.string.isRequired,
    
    // string.isRequired,
//     children: PropTypes.node,
//     // type can be things like text, password, (typical input types) as well as select and textarea, providing children as you normally would to those.
//     type: PropTypes.string,
//     size: PropTypes.string,
//     bsSize: PropTypes.string,
//     state: deprecated(PropTypes.string, 'Please use the prop "valid"'),
//     valid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
//     invalid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//     // ref will only get you a reference to the Input component, use innerRef to get a reference to the DOM input (for things like focus management).
//     innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//     static: deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
//     plaintext: PropTypes.bool,
//     addon: PropTypes.bool,
//     className: PropTypes.string,
//     cssModule: PropTypes.object,
//   };CustomInput.propTypes = {
//     className: PropTypes.string,
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     type: PropTypes.string.isRequired, // radio, checkbox, select, range.
//     label: PropTypes.string, // used for checkbox and radios
//     inline: PropTypes.bool,
//     valid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
//     invalid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
//     bsSize: PropTypes.string,
//     cssModule: PropTypes.object,
//     children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.func]), // for type="select"
//     // innerRef would be referenced to select node or input DOM node, depends on type property
//     innerRef: PropTypes.oneOfType([
//       PropTypes.object,
//       PropTypes.string,
//       PropTypes.func,
//     ])
  };




function CreateTodoListModal(props) {
    const { onNewList } = props;
    const formRef = React.useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [task, setTask] = useState([{name:""}]);
    var count = 0;
    const toggle = () => setIsOpen(!isOpen);

    const onClickPlus = () => {
        console.log(task);
        // let size = post.length;
        const copyRows = [...task];
        copyRows.push({"name":""});
        // const copyRows = [{"hola":"HOLA"}];
        // copyRows[size+1] = {
        // ...copyRows[size+1],
        // ["hola"]: 12
        // };
        setTask(copyRows)
        console.log("NUEVO");
        console.log(copyRows);
        return false;
    }
    const { mutate } = useMutation(todoList => {
        return api.post(`todolist/todolist.php`, todoList);
    });
    const addNewTodoList2 = (event) =>
    
    {
        
            event.preventDefault();

            // console.log(post);
            // let newPara = { "name":name , "task":post};
            mutate({ name,task}, {
                onSuccess: () => {
                    onNewList && onNewList();
                    toggle();
                }
            });

        // console.log(event);
        return false;
    }
    function addNewTodoList() {
        // console.log(post);
        return false;
        mutate({ name }, {
            onSuccess: () => {
                onNewList && onNewList();
                toggle();
            }
        });
    }

    const HandleSubmit = () => {
        // console.log( formRef.current);
        // return false;
    //     if (!formRef.current.check()) {
    //     //   toaster.push(<Message type="error">Error</Message>);
          
    //     //   return;
    //   }
    //   else{
    //   }
    }
    
    function varContinue(){
        if(isOpen==false){
            // setTask([{name:""}]);   
            
            if(name!==""){
                setName("");
            }
            if(task.length!==1){
                // setName("");
                setTask([
                {name:""}
            ]);    
            }
            
        }
        console.log(isOpen);    // isOpen
    }

    function updateTask(value,index){
        // updateTask(e.target.value);
        console.log(index);
        const copyRows = [...task];
        for (let i = 0; i < copyRows.length; i++) {
            if(index==i){
                copyRows[i].name=value;
            }   
            // const element = array[i];
            
        }
        // copyRows[index] = {
        //   ...copyRows[index],
        //   [name]: value
        // };
        setTask(copyRows);
        // console.log()
    }

    varContinue();
    // varContinue;
    
    return (
        <>
            <button className="btn btn-default float-right" onClick={toggle}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>New ToDo List</ModalHeader>
                <Form
                onSubmit={addNewTodoList2}
                        // ref={formRef}
                    >
                <ModalBody>
                    
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input required type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
                        </FormGroup>
                        <FormGroup style={{display: "flex",justifyContent: "flex-end",alignItems: "flex-end",alignContent: "stretch"}}>
                            <Label for="addTask">Add task</Label>
                            <button type='button' id="addTask" className="btn btn-default float-right" onClick={onClickPlus}>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </FormGroup>

                        {/* <FormGroup>
                            <Label for="task0">Task 1</Label>
                            <Input required type="text" id="task0" name="task0" 
                            onChange={e => updateTask(e.target.value,0) }
                            />
                        </FormGroup> */}
                        {task.map((row, index) => (

                            <FormGroup key={"keyTask"+index}>

                                <Label  for={"task"+(index)}>Task {(index+1)}</Label>
                                <Input
                                onChange={e => updateTask(e.target.value,index) }
                                required type="text" id={"task"+(index)} name={"task"+(index)} />

                            </FormGroup>
                        
                        ))}
                        
                
                    
                </ModalBody>
                <ModalFooter>
                    <Button color="default" onClick={toggle}>Cancel</Button>
                    <Button color="primary" type="submit" 
                    // onSubmit={addNewTodoList2} 
                    // onSubmit={ () => {return false}}
                     >Create</Button>
                    {/* <Button color="primary" onClick={() => addNewTodoList()}>Create</Button> */}
                </ModalFooter>
                </Form>
            </Modal>
        </>
    );
}

function TodoLists(props) {
    const { todoLists, onNewList } = props;

    const [selectedTodoList, setSelectedTodoList] = useState(todoLists[0]);

    const { mutate } = useMutation(todoTask => {
        if (todoTask.done) {
            return api.delete(`todolist/todotasksundone.php?id=${todoTask.id}`);
        }
        else {
            return api.put(`todolist/todotasksdone.php?id=${todoTask.id}`);
        }
    });

    function setTaskCompleted(todoTask) {
        console.log(todoTask);
        mutate(todoTask, {
            
            onSuccess: (value) => {
                console.log(value);

                todoTask.done = !todoTask.done;
            }
        });
    }

    return (
        <div className="row">
            <div className="col-sm-4">
                <div className="clearfix">
                    <h2 className="float-left">Lists</h2>
                    <CreateTodoListModal onNewList={onNewList} />
                </div>
                <ul className="list-group">
                    {todoLists && todoLists.map(todoList =>
                        <li key={todoList.id} className={classNames("list-group-item", { active: selectedTodoList.id === todoList.id })} onClick={() => setSelectedTodoList(todoList)}>
                            <span className="float-left">{todoList.name}</span>
                            <span className="badge badge-light float-right">{countRemainingTasks(todoList)} / {todoList.tasks.length}</span>
                        </li>
                    )}
                </ul>
            </div>
            <div className="col-sm-8">
                <div className="clearfix">
                    <h2 className="float-left">{selectedTodoList.name}</h2>
                </div>
                <ul className="list-group">
                    {selectedTodoList && selectedTodoList.tasks && selectedTodoList.tasks.map(todoTask =>
                        <li key={todoTask.id} className="list-group-item">
                            <input type="checkbox" checked={todoTask.done} onChange={() => setTaskCompleted(todoTask)} />
                            <span className={classNames("ml-2", { done: todoTask.done })}>{todoTask.title}</span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

function Todos() {
    const { isLoading, isError, isSuccess, data, refetch } = useQuery("todolists", async () => {
        return api.get("todolist/todolists.php");
    });

    return (
        <div>
            <h1>ToDos</h1>
            <>
                {isLoading && <p><em>Loading...</em></p>}
                {isError && <p><em>Unable to retrieve data. Try again later.</em></p>}
                {isSuccess && <TodoLists todoLists={data} onNewList={() => refetch()} />}
            </>
        </div>
    );
}

export default Todos;
