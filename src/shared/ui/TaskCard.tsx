import { type PropsWithChildren } from 'react'

const TaskCard = ({ children }: PropsWithChildren) => {
    return (
        <div className="task-card">
            {
                children
            }
        </div>
    )
}

export default TaskCard