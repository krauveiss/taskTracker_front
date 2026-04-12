import React, { useState } from 'react'
import { useCreateTask } from './useCreateTask';
import { Button } from '@mui/material';



const useTaskForm = () => {
    const [title, setTitle] = useState('');
    const { loading, createTask } = useCreateTask();

    async function onSubmit(e: React.SubmitEvent) {
        e.preventDefault();

        if (!title.trim()) {
            return
        }

        try {
            await createTask(title.trim());
        }
        catch (e) {
            console.log(e)
        }
        setTitle("");
    }

    return { title, setTitle, onSubmit, loading }
}

export default useTaskForm