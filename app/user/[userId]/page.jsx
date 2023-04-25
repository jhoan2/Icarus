import { useNoteStore } from "../../../components/store"
import StoreInitializer from '../../../components/StoreInitializer'
import { redirect } from 'next/navigation';

const getNoteTree = async ({userId}) => {
  const data = await fetch(`http://localhost:3000/api/noteTree?id=${userId}`, {method: "GET"})
  if (!data.ok) return undefined
  return data.json();
}


export default async function NoteTreePage({params}) {
  const { userId } = params
  if(!userId) {
    redirect('/')
  }
  const { value } = await getNoteTree({userId})
  const noteTree = value
  useNoteStore.setState({noteTree: noteTree})

  return(
  <section>
    <StoreInitializer noteTree={noteTree}/>
  </section>
  )
}