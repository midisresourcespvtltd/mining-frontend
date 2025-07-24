import React from 'react'

interface HTMLBlockProps {
  value: {
    html: string
  }
}

const HTMLBlock: React.FC<HTMLBlockProps> = ({ value }) => {
  return (
    <div 
      className="html-block"
      dangerouslySetInnerHTML={{ __html: value.html }}
    />
  )
}

export default HTMLBlock 