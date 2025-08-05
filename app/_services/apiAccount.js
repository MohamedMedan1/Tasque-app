import { createAdminSupabaseClient } from "../_Utils/supabaseAdmin";
import { createServerSupabaseClient } from "../_Utils/supabaseServer";

export async function createAccount(accountData) {
    const supabase = createAdminSupabaseClient();
    try {
        const { data, error } = await supabase
        .from('accounts')
        .insert([accountData])
        .select()
        
        if (error) throw new Error(error.message);
        
        return data;
    }
    catch (error) {
        throw new Error(error.message)
    }
}

export async function getAccountID(email) {
    const supabase = createServerSupabaseClient();
    try {
        let { data, error } = await supabase
        .from('accounts')
        .select("id")
        .eq('email', email)
        .maybeSingle()
        if (error) throw new Error(error.message);
        
        return data;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

export async function getAccountPassword(userId) {
    const supabase = createServerSupabaseClient();
    try {
        let { data, error } = await supabase
        .from('accounts')
        .select("password")
        .eq('id', userId)
        .single()
        if (error) throw new Error(error.message);
        
        return data;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

export async function updateAccountPassword(userId,oldPass,newPass) {
    const supabase = createServerSupabaseClient();
    try {
        const { data, error } = await supabase
            .from("accounts")
            .update([newPass])
            .eq("password", oldPass)
            .eq("id", userId)
        
        if (error) throw new Error(error.message);
        return data;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteUserAccount(userId) {
    const supabase = createServerSupabaseClient();
    try {
        const { data, error } = await supabase
            .from("accounts")
            .delete()
            .eq("id", userId)
        
        if (error) throw new Error(error.message);
        return data;
    }
    catch (error) {
        throw new Error(error.message);
    }
}


