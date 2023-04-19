import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar'
import { useState } from 'react';


interface CommentProps{
    content: 'string';
    onDeleteComment: (comment : string) => void;
}



export function Comment({ content, onDeleteComment }:CommentProps) {

    const [ likeCount , setLikeCount] = useState (0);

    function handleDeleteComment() {
   
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state)=>{
         return state +1
        })
    }

    return (
        <div className={styles.comment} >
            <Avatar hasBorder={false} src="src\Images\Neymar-2-1.webp" className={styles.avatar} />

            <div className={styles.commentBox} >
                <div className={styles.commentContent} >

                    <header>
                        <div className={styles.authorAndTime} >
                            <strong>Neymar Jr.</strong>
                            <time title='12/04/2023 as 16:17' dataTime="2023-04-12 15:51:30" >Cerca de uma 1 hora atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentario' >
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button onClick={handleLikeComment} >
                        <ThumbsUp />

                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>

    )
}