import { stages } from '../../constants/stages'

export function Hangman({ stage }) {
    if(stage >= stages.length) stage = stages.length-1
    if(stage < 0) stage = 0
    return <>
    <img className='w-60' src={stages[stage]} alt={'hangman in stage: ' + stage} />
    </>
}