import { useState } from "react";



function TaskCreate({onClick,task,taskFormUpdate ,onUpdate}) {
            //?   snippet'lar yani değişebilir verilerin tanımlanması
            const [title, setTitle] = useState(task ? task.title : '');
            const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');
            // console.log(title,taskDesc);
            
            
            //?  Title ve Desc propslarını  belleğe kaydetme/Set etme  aksiyonu
            const  handleTitleChange = (event) =>{
                setTitle(event.target.value);
            };
            const handleTaskChange = (event) =>{
                setTaskDesc(event.target.value);
                
            };
        
            //?  Button ile child'dan parent'a veri taşıma işlemi.
            const handleSubmit = (event) =>{
                event.preventDefault();
                if(taskFormUpdate){
                    onUpdate(task.id,title,taskDesc)
                }else{
                    onClick(title,taskDesc);     
                }
              
                setTitle('');
                setTaskDesc('');
            }
             
return (
            <div> 
                {''}
                {taskFormUpdate ?   //! True ise.



                <div className="TaskUpdate-Pdiv" >
                <h3>Lütfen Task Düzenleyiniz !</h3>
                <form className="Task-Create-Form">
                    <label className="TaskCreate-Label">Başlığı Düzenleyiniz</label>
                    <input className="Task-input" type="text" value={title} onChange={handleTitleChange} />
                    <label className="TaskCreate-Label"> Task Düzenleyiniz!</label>
                    <textarea className="Task-input"  value={taskDesc} onChange={handleTaskChange}  rows={5}></textarea>
                    <button className="TextCreate-Button update-button" onClick={handleSubmit}>Düzenle</button>
                </form>
            </div>
            
            
            :  //? değilse  (False ise )
            
            
            <div className="TaskCreate-Pdiv" >
            <h3>Lütfen Task Ekleyiniz !</h3>
            <form className="Task-Create-Form">
                <label className="TaskCreate-Label">Başlık</label>
                <input className="Task-input" type="text" value={title} onChange={handleTitleChange} />
                <label className="TaskCreate-Label"> Task Giriniz!</label>
                <textarea className="Task-input"  value={taskDesc} onChange={handleTaskChange}  rows={5}></textarea>
                <button className="TextCreate-Button" onClick={handleSubmit}>Oluştur</button>
            </form>
        </div>} </div>

    );
}

export default TaskCreate;