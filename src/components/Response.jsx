import React from 'react'

export default function Response({ response }) {
  return (
    <>
        <div className="alert alert-warning" role="alert">
            {response}
        </div>
    </>
  )
}
