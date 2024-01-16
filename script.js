document.addEventListener(
    'DOMContentLoaded', () => {
        let dataInsert = document.querySelector("[data-insert]");
        const addButton = document.querySelector("[data-task");
        const newData = document.querySelector("#add-new-task");
        addButton.addEventListener('click',() =>{

            if(dataInsert.value === ''){
                alert('Please enter your task');
                return;
            }
            const taskText = dataInsert.value;
            
            //Create a new div everytime I click Addtask
            const newTask = document.createElement('div');
            newTask.setAttribute('class', 'all-tasks flex rounded-2xl bg-gray-800 borde-2 p-2 w-96 mt-6 gap-2 md:w-2/4');

            //Text Box
            const newInput = document.createElement('div');
            newInput.setAttribute('data-stored', '');
            newInput.classList.add('bg-gray-800', 'outline-none', 'w-72', 'md:w-full', 'h-8', 'flex', 'items-center', 'pl-2', 'text-white');
            newInput.innerHTML = taskText;

            //Adding Edit Button
            const editButton = document.createElement('button');
            editButton.setAttribute('data-edit', '');
            editButton.setAttribute('class',"text-white bg-yellow-500 h-8 w-20 rounded-2xl ");
            editButton.innerHTML = 'Edit';

            //Adding Delete Button
            const deleteButton = document.createElement('button');
            deleteButton.setAttribute('data-delete', '');
            deleteButton.setAttribute('class',"text-white bg-red-500 h-8 w-20 rounded-2xl ");
            deleteButton.innerHTML = 'Delete';

            //Inserting every update inside newData
            newTask.appendChild(newInput);
            newTask.appendChild(editButton);
            newTask.appendChild(deleteButton);
            newData.appendChild(newTask);
            dataInsert.value = '';

            
            //DeleteButton logic
            deleteButton.addEventListener("click", ()=>{
                newTask.remove();
            })

            //editButton logic
            editButton.addEventListener('click', ()=>{
                const newText = prompt('Enter your text');
                if(newText === ''){
                    alert('Please enter your new task');
                    return;
                }
                newInput.innerHTML = newText;
            })
        })
        
    }
)

