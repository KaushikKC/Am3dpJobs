import React, { useState, useEffect } from 'react'
import { useSessionContext } from 'supertokens-auth-react/recipe/session'
import { signOut } from "supertokens-auth-react/recipe/thirdpartyemailpassword"
let getSupabase;

export default function User() {

    const SignOut = async () => {
        await signOut();
        
    }

    const session = useSessionContext()

  const [userEmail, setEmail] = useState('')
  useEffect(() => {
    async function getUserEmail() {
      if (session.loading) {
        return;
      }
      // retrieve the supabase client who's JWT contains users userId, this will be
      // used by supabase to check that the user can only access table entries which contain their own userId
      const supabase = getSupabase(session.accessTokenPayload.supabase_token)

      // retrieve the user's name from the users table whose email matches the email in the JWT
      const { data } = await supabase.from('users').select('email').eq('user_id', session.userId)

      if (data.length > 0) {
        setEmail(data[0].email)
      }
    }
    getUserEmail()
  }, [session])

  if (session.loading) {
    return null;
  }
  return (
    <div>
        <p>
          You are authenticated with SuperTokens! (UserId: {session.userId})
          <br />
          Your email retrieved from Supabase: {userEmail}
        </p>
        <div className='d-flex justify-content-between align-items-center'>
                    <div className='collapse navbar-collapse'  id="navbarNav">
                        <ul className='d-flex justify-content-between align-items-center mt-3'  style={{listStyle:"none"}}>
                            
                            <li  className='px-2'>
                                <button type="button" onClick={SignOut} class="btn btn-outline-dark">Sign Out</button>
                            </li>
                            
                        </ul>     
                    </div>
                </div>
    </div>
  )
}
