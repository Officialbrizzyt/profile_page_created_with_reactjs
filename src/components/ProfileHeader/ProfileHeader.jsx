import React from 'react'
import './ProfileHeader.css'

const ProfileHeader = () => {
  return (
    <header className="profile_header">
        <div className="profile_highlight_wrapper">
            <div className="profile_highlight">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-school" width="24"
                          height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                          stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                          <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
              </svg>
              2024
            </div>
            Student
        </div>
        <div className="profile_avater">
            <img src="../assets/mydp.jpeg" loading='lazy' alt="" />
        </div>
        <div className="profile_highlight_wrapper">
            <div className="profile_highlight">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coin" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                        <path d="M12 7v10" />
            </svg>
             200$
            </div>
            Hourly Rate
        </div>
    </header>
  )
}

export default ProfileHeader