import { createServerSupabaseClient } from "../_Utils/supabaseServer";

// ==================================================
function getTodayRange() {
    const date = new Date();
    const startDate = new Date(date.setHours(0, 0, 0, 0)).toISOString();
    const endDate = new Date(date.setHours(24, 0, 0, 0)).toISOString();
    return { startDate, endDate };
}
function getDateRange(selectedDate) {
    if (!selectedDate) return;
    const date = new Date(selectedDate);

    const start = new Date(date);
    const end = new Date(date);

    const startDate = new Date(start.setHours(0,0,0,0)).toISOString();
    const endDate = new Date(end.setHours(24, 0, 0, 0)).toISOString();
    return { startDate, endDate };
}

// ==================================================

export async function generateTask(taskData) {
    const supabase = createServerSupabaseClient();
    try {
        const { data, error } = await supabase
        .from('tasks')
        .insert([taskData])
        .select()
        
        if (error) throw new Error(error.message);

        return data;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

// Get
export async function getTasks(userId,filter,sort,date) {
    const supabase = createServerSupabaseClient();
    const { startDate, endDate } = getDateRange(date)|| {};
    try {
        const getQuery = supabase
            .from("tasks")
            .select("*")
            .eq("userId",userId)
        
        if (filter &&  filter !== "all") {
            if (filter === "Completed") getQuery.eq("isCompleted", true); 
            if (filter === "Not-Completed") getQuery.eq("isCompleted", false); 
        }

        if (sort) {
            const [_, direction] = sort.split("-");
            const isAsc = direction === "asc";
            getQuery.order("created_at",{ascending:isAsc})
        }

        if (date) {
            getQuery
                .gte("created_at", startDate)
                .lt("created_at", endDate)
        }

        const { data: tasks, error } = await getQuery;
        
        if (error) throw new Error(error.message);
        
        return tasks;
    }
    catch (error) {
        throw new Error(error.message);
    }
}
export async function getTodayTasks(userId,filter,sort) {
    const supabase = createServerSupabaseClient();
    const { startDate, endDate } = getTodayRange();
    try {
        const getQuery = supabase
            .from("tasks")
            .select("*")
            .eq("userId", userId)
            .gte("created_at", startDate)
            .lt("created_at", endDate)
        
        if (filter && filter !== "all") {
            if(filter === "Completed") getQuery.eq("isCompleted",true)
            if (filter === "Not-Completed") getQuery.eq("isCompleted", false)
        }
        
        if (sort) {
            const sortState = sort.split("-").slice(1,).join('')
            const isAsc = sortState === "asc";
            getQuery.order("created_at",{ascending: isAsc});
        }
        
        const { data: tasks, error } = await getQuery;
        
        if (error) throw new Error(error.message);
        return tasks;
    }
    catch (error) {
        throw new Error(error.message);
    }
}
export default async function getTask(taskId) {
    const supabase = createServerSupabaseClient();
        try {
        const { data: task, error } = await supabase
            .from("tasks")
            .select()
            .eq("id", taskId)
            .single()
        if (error) throw new Error(error.message);
        return task;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

// Update
export async function editTask(taskId,updatedData) {
    const supabase = createServerSupabaseClient();
    try {
        const { error } = await supabase
            .from("tasks")
            .update([updatedData])
            .eq("id", taskId)
            .select()
        
        if (error) throw new Error(error.message);
        return true;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

// Delete
export async function removeTask(taskId) {
    const supabase = createServerSupabaseClient();
    try {
        const { error } = await supabase
            .from("tasks")
            .delete()
            .eq("id", taskId)
        if (error) throw new Error(error.message);
        return true;
    }
    catch (error) {
        throw new Error(error.message);
    }
}
export async function removeAllTodayTasks(userId) {
    const supabase = createServerSupabaseClient();
    const { startDate, endDate } = getTodayRange();
    try {
        const {error} = await supabase
            .from("tasks")
            .delete()
            .gte("created_at", startDate)
            .lt("created_at", endDate)
            .eq("userId",userId)
        
        if (error) throw new Error(error.message);
        return true;
    }
    catch (error) {
        throw new Error(error.message);
    }
}
export async function removeAllTodayCompletedTasks(userId) {
    const supabase = createServerSupabaseClient();
    const { startDate, endDate } = getTodayRange();
    try {
        const deleteProccess = await supabase
            .from("tasks")
            .delete()
            .gte("created_at", startDate)
            .lt("created_at", endDate)
            .eq('isCompleted', true)
            .eq("userId",userId)
        
        const { error } = deleteProccess;
        
        if (error) throw new Error(error.message);
        
        return true;
    }
    catch (error) {
        throw new Error(error.message);
    }
}
export async function deleteAllUserTasks(userId) {
    const supabase = createServerSupabaseClient();
    try {
        const { data, error } = await supabase
            .from("tasks")
            .delete()
            .eq("userId", userId)        
        if (error) throw new Error(error.message);
        return data;
    }
    catch (error) {
        throw new Error(error.message);
    }
}
export async function deleteAllUserCompletedTasks(userId) {
    const supabase = createServerSupabaseClient();
    try {
        const { data, error } = await supabase
            .from("tasks")
            .delete()
            .eq("userId", userId)
            .eq("isCompleted",true)
        if (error) throw new Error(error.message);
        return data;
    }
    catch (error) {
        throw new Error(error.message);
    }
}
