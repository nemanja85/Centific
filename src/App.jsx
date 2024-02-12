import { InputDropdown } from './components/InputDropdown'


export const App=()=> {
  return (
    <div>
      <InputDropdown />
      <div id='buttonGroup'>
    <button className='button-1'>Add Task</button>
      <button>Cancel</button>
      </div>


    </div>
  )
}

