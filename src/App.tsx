import './global.css';
import { Header } from './Components/Header';
import {Sidebar} from './Components/Sidebar';
import { Post } from './Components/Post';



const posts = [
  {
   id:1,
   author:{
     avatarUrl:'https://github.com/DiegoBr7.png',
     nome:'Diego Brasileiro',
     role:'FullStack Developer' 
   },
   content:[
     {type:'paragraph',content:'Fala galeraa 👋'},
     { type:'paragraph',content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
     {type:'link',content:"👉https://github.com/DiegoBr7"}
   ],
   publishedAt: new Date('2023-04-15T20:17:00')
  },
  {
    id:2,
    author:{
      avatarUrl:'https://github.com/MaykBrito.png',
      nome:'Mayk Brito',
      role:'FullStack Developer' 
    },
    content:[
      {type:'paragraph',content:'Fala galeraa 👋'},
      { type:'paragraph',content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link',content:"👉https://github.com/MaykBrito"}
    ],
    publishedAt: new Date('2023-04-15T20:17:00')
   }
 ]



import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
            
        <aside>

        <Sidebar/>
        
        </aside>


        <main>
       {posts.map(post => {
        return (
          <Post
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          />
        )
       })}
        </main>

      </div>
    </div>
  )
}

export default App
