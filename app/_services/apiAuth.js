import { createAdminSupabaseClient } from "../_Utils/supabaseAdmin";
import { createAccount } from "./apiAccount";
import { createServerSupabaseClient  } from '@/app/_Utils/supabaseServer';

export async function signUpAuth(accountData) {
    const supabase = createServerSupabaseClient();
    const {fullName,email, password } = accountData;
    try {
        let { data, error } = await supabase.auth.signUp({email, password,
            options: {
                data: {
                    fullName: fullName,
                }
            }})
        
        if (error) throw new Error(error.message);
        await createAccount(accountData);
        return data;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

export async function getCurrentUser() {
    const  supabase  = createServerSupabaseClient ();
    const { data: session } = await supabase.auth.getSession();

    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();

    if (error) throw new Error(error.message);

    return data?.user;
}

export async function updateUserPassword(newPassword) {
    const supabase = createServerSupabaseClient();
    
    const { data,error } =    await supabase.auth.updateUser({ password: newPassword });  

    if (error) throw new Error(error.message);

    return data?.user;
}

export async function removeUserAccount(uid) {
    const supabaseAdmin = createAdminSupabaseClient();
    
    const { data, error } = await supabaseAdmin.auth.admin.deleteUser(uid);  

    if (error) throw new Error(error.message);

    return data?.user;
}