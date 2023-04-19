import {PencilLine  } from 'phosphor-react'
import {Avatar} from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar(){
    return(
        
        <aside className={styles.sidebar} >
            <img
             className={styles.cover}
             src="https://media.istockphoto.com/id/1413150175/pt/foto/panorama-60-mpix-xxxxl-size-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=612x612&w=is&k=20&c=oCXzpZbniSZAZU99WB5ebIN1KdOxWaZ0kX7sQcU6XzE="
            
            />

             <div className={styles.profile} > 
               <Avatar src="https://github.com/DiegoBr7.png "/>
               <strong>Diego Brasileiro</strong>
               <span>Web developer</span>
             </div>

             <footer>
                <a href="#">
                <PencilLine/>Editar seu Perfil</a>
             </footer>

        </aside>
    )
}